'use server';

/**
 * @fileOverview Provides AI-powered feedback on code or configuration snippets.
 *
 * - getCodeFeedback - A function that takes code/config and returns feedback.
 * - CodeFeedbackInput - The input type for the getCodeFeedback function.
 * - CodeFeedbackOutput - The return type for the getCodeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeFeedbackInputSchema = z.object({
  code: z
    .string()
    .describe('The code or configuration snippet to provide feedback on.'),
  language: z.string().describe('The programming or configuration language of the snippet.'),
  context: z
    .string()
    .optional()
    .describe('Additional context about the simulation or environment the code is used in.'),
});
export type CodeFeedbackInput = z.infer<typeof CodeFeedbackInputSchema>;

const CodeFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-generated feedback on the code snippet.'),
});
export type CodeFeedbackOutput = z.infer<typeof CodeFeedbackOutputSchema>;

export async function getCodeFeedback(input: CodeFeedbackInput): Promise<CodeFeedbackOutput> {
  return codeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeFeedbackPrompt',
  input: {schema: CodeFeedbackInputSchema},
  output: {schema: CodeFeedbackOutputSchema},
  prompt: `You are a helpful AI code tutor. A user is writing code or config snippets as part of a network simulation and asks for your feedback.

      Provide concise and helpful feedback on the code or configuration, including potential errors, improvements, and best practices.  Do not provide the answer, instead act as a helpful tool to provide useful feeback.

      Language: {{{language}}}
      Context: {{{context}}}
      Code:
      ````{{language}}}
      {{{code}}}
      ````
      `,
});

const codeFeedbackFlow = ai.defineFlow(
  {
    name: 'codeFeedbackFlow',
    inputSchema: CodeFeedbackInputSchema,
    outputSchema: CodeFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
