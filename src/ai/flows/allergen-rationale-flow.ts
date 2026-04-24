'use server';
// 파일명: src/ai/flows/allergen-rationale-flow.ts
/**
 * @overview 특정 제품 성분이 알레르기 유발 물질로 판별된 경우, 그에 대한 과학적 근거를 Genkit(LLM)을 통해 생성합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
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

/**
 * @function getAllergenRationale
 * @description 외부에서 호출 가능한 서버 액션. Genkit Flow를 감싸서 실행합니다.
 * 
 * [호출 구조 및 순서]
 * 1. 클라이언트(Result Page)에서 getAllergenRationale 호출
 * 2. 내부적으로 allergenRationaleFlow 실행
 * 3. Genkit 프롬프트(allergenRationalePrompt) 처리 및 반환
 */
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
