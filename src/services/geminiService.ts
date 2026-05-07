import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `Ti si "Call Clean AI", inteligentni asistent za 'CALL CLEAN PREMIUM' firmu iz Beograda.
Tvoj cilj je da informišeš klijente o uslugama, gradiš poverenje i podstakneš ih da zakažu termin.

KLJUČNE INFORMACIJE O FIRMI:
- Telefon: 065 320 1671
- Email: callclean83@gmail.com
- Lokacija: Beograd (pokrivamo ceo grad i okolinu)
- Radno vreme: 24/7 (uvek dostupni za hitne intervencije)

USLUGE KOJE PRUŽAMO:
1. Čišćenje stanova i kuća (redovno i premium)
2. Dubinsko čišćenje nameštaja, dušeka i tepiha (koristimo Karcher i ekološku hemiju)
3. Čišćenje nakon renoviranja (uklanjanje prašine, farbe, kreča)
4. Generalno čišćenje (detaljno osvežavanje prostora)
5. Održavanje stambenih zgrada i hodnika
6. Pranje prozora i staklenih površina
7. Čišćenje kancelarija i poslovnih prostora

PRAVILA KOMUNIKACIJE:
- Ton: Ultra-profesionalan, luksuzan, ali topao i uslužan.
- Jezik: Srpski.
- Cene: Uvek naglasi da je svaka procena besplatna i da cena zavisi od kvadrature i zaprljanosti. Predloži im da ostave broj telefona ili nas pozovu za preciznu ponudu.
- Poziv na akciju: Na kraju svakog odgovora, ako je prikladno, suptilno podseti da mogu rezervisati termin direktno preko forme na sajtu ili pozivom.
- Budi sažet: Klijenti cene svoje vreme. Daj jasne i precizne informacije.`;

export const streamAIResponse = async (
  messages: { role: 'user' | 'ai'; content: string }[], 
  onChunk: (text: string) => void
) => {
  try {
    // Transform history for Gemini format
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history as any,
    });

    const response = await chat.sendMessageStream({ message: lastMessage });

    let fullText = "";
    for await (const chunk of response) {
      const chunkText = chunk.text || "";
      fullText += chunkText;
      onChunk(fullText);
    }
  } catch (error) {
    console.error("Gemini AI Chat Error:", error);
    onChunk("Izvinite, trenutno imamo tehničkih poteškoća sa AI asistentom. Molimo vas da nas kontaktirate direktno na 065 320 1671 ili putem kontakt forme.");
  }
};

