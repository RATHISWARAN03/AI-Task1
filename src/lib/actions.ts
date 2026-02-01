"use server";

import { answerProgramQuestions } from "@/ai/flows/answer-program-questions";
import { programInfo, faqs } from "@/lib/data";

export async function getAIResponse(question: string) {
  try {
    const faqString = faqs
      .map((faq) => `Question: ${faq.question}\nAnswer: ${faq.answer}`)
      .join("\n\n");
    const context = `${programInfo}\n\nFrequently Asked Questions:\n${faqString}`;

    const result = await answerProgramQuestions({
      question: question,
      programInformation: context,
    });
    return { success: true, answer: result.answer };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      answer: "I'm sorry, I encountered an error. Please try again.",
    };
  }
}
