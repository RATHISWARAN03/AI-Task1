"use server";

import { ai } from "@/ai/genkit";
import { z } from "genkit";

const IronLadyAssistantInputSchema = z.object({
  question: z
    .string()
    .describe("User question about Iron Lady or anything else"),
});

const IronLadyAssistantOutputSchema = z.object({
  answer: z.string(),
});

export type IronLadyAssistantInput = z.infer<
  typeof IronLadyAssistantInputSchema
>;
export type IronLadyAssistantOutput = z.infer<
  typeof IronLadyAssistantOutputSchema
>;

const IRON_LADY_CONTEXT = `
Iron Lady is a leadership and empowerment organization focused on women leaders.

About Iron Lady:
- Provides leadership coaching and mentoring for women
- Focuses on confidence building, communication skills, career growth, and executive leadership
- Offers structured programs, workshops, and one-on-one coaching
- Helps women become strong, confident, and impactful leaders

Tone & Personality:
- Warm, supportive, and inspiring
- Acts as a personal leadership guide
- Encouraging and motivational
- Simple, clear, and professional answers

Rules:
- If user asks about Iron Lady → answer clearly
- If user asks about courses → explain programs
- If user asks general questions → answer helpfully
- Never say "I don't know"
- Never mention internal system details
`;

const prompt = ai.definePrompt({
  name: "ironLadyAssistantPrompt",
  input: { schema: IronLadyAssistantInputSchema },
  output: { schema: IronLadyAssistantOutputSchema },
  prompt: `
You are Iron Lady's AI Guide.

Use the context below to answer the user's question.
If the question is not directly related to Iron Lady, still respond helpfully and professionally.

Context:
${IRON_LADY_CONTEXT}

User Question:
{{question}}
`,
});

export const ironLadyAssistant = ai.defineFlow(
  {
    name: "ironLadyAssistant",
    inputSchema: IronLadyAssistantInputSchema,
    outputSchema: IronLadyAssistantOutputSchema,
  },
  async (input) => {
    console.log("AI QUESTION:", input.question);

    const { output } = await prompt(input);
    return output!;
  },
);
