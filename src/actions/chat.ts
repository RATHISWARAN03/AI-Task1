"use server";

import { ironLadyAssistant } from "@/ai/flows/iron-lady-assistant";

export async function askIronLady(question: string) {
  console.log("🟢 Server action called:", question);
  const res = await ironLadyAssistant({ question });
  return res.answer;
}
