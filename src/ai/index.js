import { config } from "dotenv";
config();

import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";

// ✅ IMPORT FLOWS HERE (server-only)
import "@/ai/flows/answer-program-questions";

export const ai = genkit({
  plugins: [googleAI()],
  model: "googleai/gemini-2.5-flash",
});
