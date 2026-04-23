'use server';
/**
 * @fileOverview Provides evidence-backed explanations for flagged allergens in products.
 *
 * - getAllergenRationale - A function that fetches the rationale and resources for a given allergen.
 * - AllergenRationaleInput - The input type for the getAllergenRationale function.
 * - AllergenRationaleOutput - The return type for the getAllergenRationale function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AllergenRationaleInputSchema = z.object({
  allergenName: z.string().describe('The name of the allergen ingredient.'),
  userAllergyProfile: z
    .string()
    .describe(
      'A description of the user\'s specific allergy profile, e.g., "severe peanut allergy", "dairy intolerance for child Jun".'
    ),
});
export type AllergenRationaleInput = z.infer<typeof AllergenRationaleInputSchema>;

const AllergenRationaleOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A clear, concise, and evidence-backed explanation of why the allergen is a concern.'),
  resources: z
    .array(
      z.object({
        title: z.string().describe('Title of the resource.'),
        url: z.string().url().describe('URL to the scientific data or official food safety resource.'),
      })
    )
    .describe('A list of links to scientific data or official food safety resources.'),
});
export type AllergenRationaleOutput = z.infer<typeof AllergenRationaleOutputSchema>;

export async function getAllergenRationale(
  input: AllergenRationaleInput
): Promise<AllergenRationaleOutput> {
  return allergenRationaleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'allergenRationalePrompt',
  input: {schema: AllergenRationaleInputSchema},
  output: {schema: AllergenRationaleOutputSchema},
  prompt: `You are an expert in food allergies and safety. Your task is to provide a clear, concise, and evidence-backed explanation of why a specific allergen is a concern for a user's allergy profile.

Also, provide links to scientific data or official food safety resources to support the explanation. Aim for 2-3 highly relevant resources.

Allergen: {{{allergenName}}}
User Allergy Profile: {{{userAllergyProfile}}}`,
});

const allergenRationaleFlow = ai.defineFlow(
  {
    name: 'allergenRationaleFlow',
    inputSchema: AllergenRationaleInputSchema,
    outputSchema: AllergenRationaleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
