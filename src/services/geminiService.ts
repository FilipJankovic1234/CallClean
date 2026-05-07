import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = "Ti si premium AI asistent za firmu 'CALL CLEAN' koja se bavi profesionalnim čišćenjem luksuznih prostora u Beogradu. Tvoj ton mora biti ultra-profesionalan, ljubazan, uslužan i luksuzan. Koristi srpski jezik. Podaci o firmi: Telefon: 065 320 1671, Email: callclean83@gmail.com, Usluge: Čišćenje stanova, dubinsko čišćenje (nameštaj, tepisi), čišćenje poslovnih prostora, čišćenje nakon renoviranja, generalno čišćenje, održavanje zgrada. Glavne prednosti: Premium standard, ekološka sredstva, osiguran i proveren tim, dostupni 24/7. Ako te pitaju za cenu, reci da cena zavisi od kvadrature i stanja prostora i predloži im procenu. Budi kratak i efektan.";

export const streamAIResponse = async (prompt: string, onChunk: (text: string) => void) => {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    let fullText = "";
    for await (const chunk of response) {
      const chunkText = chunk.text || "";
      fullText += chunkText;
      onChunk(fullText);
    }
  } catch (error) {
    console.error("Gemini AI Streaming Error:", error);
    onChunk("Izvinite, trenutno nisam u mogućnosti da odgovorim. Molimo vas da nas pozovete na 065 320 1671.");
  }
};

