import embeddings from "@/public/embeddings.json";

function cosineSimilarity(a: number[], b: number[]) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dot / (magA * magB);
}

async function getEmbedding(text: string) {
    const res = await fetch("https://api.openai.com/v1/embeddings", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-embedding-3-small",
            input: text
        })
    });

    const json = await res.json();
    return json.data[0].embedding;
}

export async function POST(req: Request) {
    const { message } = await req.json();

    const isWorkout = message.toLowerCase().includes("scheda");

    const queryEmbedding = await getEmbedding(message);

    const results = embeddings.map((e: any) => ({
        text: e.text,
        score: cosineSimilarity(queryEmbedding, e.embedding),
    }));

    const top = results
        .sort((a, b) => b.score - a.score)
        .slice(0, 2);

    const context = top.map(t => t.text).join("\n");

    let systemPrompt = "";
    let userPrompt = "";

    if (isWorkout) {
        systemPrompt = "Sei un personal trainer esperto.";

        userPrompt = `
Crea una scheda di allenamento ordinata.

Formato obbligatorio:

Giorno 1:
- Esercizio — serie x ripetizioni
- Esercizio — serie x ripetizioni

Giorno 2:
- Esercizio — serie x ripetizioni

Regole:
- Max 3-4 giorni
- Vai a capo tra i giorni
- Usa trattini
- Sii chiaro e ordinato
- NIENTE testo inutile

Usa queste info:
${context}

Richiesta: ${message}
`;
    } else {
        systemPrompt = "Rispondi in modo breve e chiaro usando solo le informazioni fornite.";

        userPrompt = `
Contesto:
${context}

Domanda: ${message}
`;
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ],
            max_tokens: isWorkout ? 400 : 150
        })
    });

    const data = await res.json();

    return Response.json({
        reply: data.choices[0].message.content
    });
}