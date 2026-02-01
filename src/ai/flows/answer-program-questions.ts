"use server";

/**
 * @fileOverview A flow that answers questions about Iron Lady's programs.
 *
 * - answerProgramQuestions - A function that answers questions about Iron Lady's programs.
 * - AnswerProgramQuestionsInput - The input type for the answerProgramQuestions function.
 * - AnswerProgramQuestionsOutput - The return type for the answerProgramQuestions function.
 */

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const AnswerProgramQuestionsInputSchema = z.object({
  question: z
    .string()
    .describe("The question about Iron Lady\u2019s programs."),
  programInformation: z
    .string()
    .describe("Information about Iron Lady\u2019s programs."),
});
export type AnswerProgramQuestionsInput = z.infer<
  typeof AnswerProgramQuestionsInputSchema
>;

const AnswerProgramQuestionsOutputSchema = z.object({
  answer: z.string().describe("The answer to the question."),
});
export type AnswerProgramQuestionsOutput = z.infer<
  typeof AnswerProgramQuestionsOutputSchema
>;

export async function answerProgramQuestions(
  input: AnswerProgramQuestionsInput,
): Promise<AnswerProgramQuestionsOutput> {
  return answerProgramQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: "answerProgramQuestionsPrompt",
  input: { schema: AnswerProgramQuestionsInputSchema },
  output: { schema: AnswerProgramQuestionsOutputSchema },
  prompt: `You are an AI assistant for Iron Lady, an organization that provides programs and services for women's leadership. Use the following context to answer the user's question. If the answer is not contained within the provided context, use your general knowledge to provide a helpful and encouraging response in the persona of a leadership guide.

Context:
{{{programInformation}}}

Question: {{question}}`,
});

const answerProgramQuestionsFlow = ai.defineFlow(
  {
    name: "answerProgramQuestionsFlow",
    inputSchema: AnswerProgramQuestionsInputSchema,
    outputSchema: AnswerProgramQuestionsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
