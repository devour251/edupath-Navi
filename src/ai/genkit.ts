import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import 'dotenv/config'; // Load environment variables from .env

export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY })],
  // Use the model reference for gemini 2.5 flash
  model: googleAI.model('gemini-2.5-flash'),
});
