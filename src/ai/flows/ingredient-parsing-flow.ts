'use server';
/**
 * @fileOverview This file implements a Genkit flow for parsing product ingredient lists.
 * It identifies individual ingredients and highlights potential allergens based on a user's allergy profile.
 *
 * - ingredientParsing - A function that handles the ingredient parsing process.
 * - IngredientParsingInput - The input type for the ingredientParsing function.
 * - IngredientParsingOutput - The return type for the ingredientParsing function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IngredientParsingInputSchema = z.object({
  ingredientListText: z
    .string()
    .optional()
    .describe('The raw text of the ingredient list, if provided manually.'),
  photoDataUri: z
    .string()
    .optional()
    .describe(
      "A photo of the ingredient list, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  allergyProfile: z
    .array(z.string())
    .describe(
      "A list of allergens to check against, e.g., ['milk', 'peanuts', 'gluten'] (case-insensitive)."
    ),
});
export type IngredientParsingInput = z.infer<typeof IngredientParsingInputSchema>;

const IngredientParsingOutputSchema = z.object({
  parsedIngredients: z
    .array(
      z.object({
        name: z.string().describe('The name of the parsed ingredient.'),
        isAllergen: z.boolean().describe('True if this ingredient is an allergen according to the allergy profile.'),
        triggeredAllergens: z
          .array(z.string())
          .describe(
            "Specific allergens from the profile that this ingredient matches (case-insensitive, e.g., ['milk'])."
          ),
      })
    )
    .describe('A list of parsed ingredients with allergen identification.'),
});
export type IngredientParsingOutput = z.infer<typeof IngredientParsingOutputSchema>;

export async function ingredientParsing(
  input: IngredientParsingInput
): Promise<IngredientParsingOutput> {
  return ingredientParsingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseIngredientsPrompt',
  input: { schema: IngredientParsingInputSchema },
  output: { schema: IngredientParsingOutputSchema },
  prompt: `You are an expert food safety analyst for SafeBite. Your task is to accurately parse an ingredient list from the provided text or image, and then identify potential allergens based on the user's active allergy profile.

Instructions:
1. Extract all individual ingredients from the provided content.
2. For each ingredient, determine if it matches any item in the 'Allergy Profile'. Matches should be case-insensitive.
3. Populate 'isAllergen' as true if a match is found.
4. List all specific allergens from the 'Allergy Profile' that the ingredient matches in 'triggeredAllergens'. If no match, leave 'triggeredAllergens' as an empty array.
5. If both 'ingredientListText' and 'photoDataUri' are provided, prioritize parsing from the 'photoDataUri'.

Allergy Profile: {{{JSON.stringify allergyProfile}}}

Ingredient List (from text or image):
{{#if photoDataUri}}
  {{media url=photoDataUri}}
{{else}}
  {{{ingredientListText}}}
{{/if}}
`,
});

const ingredientParsingFlow = ai.defineFlow(
  {
    name: 'ingredientParsingFlow',
    inputSchema: IngredientParsingInputSchema,
    outputSchema: IngredientParsingOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to parse ingredients or identify allergens.');
    }
    return output;
  }
);
