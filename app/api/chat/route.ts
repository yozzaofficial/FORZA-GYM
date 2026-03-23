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

    const isWorkout = message.toLowerCase().includes("scheda") || message.toLowerCase().includes("plan") || message.toLowerCase().includes("workout");

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
        systemPrompt = "You are an expert personal trainer. Always reply in the same language the user used in their message, even if the context is in Italian.";

        userPrompt = `Create a workout plan using this data:
${context}

Request: ${message}

Format:
Day 1:
- Exercise — sets x reps

Rules: max 3-4 days, dashes only, no extra text.
IMPORTANT: Reply in the same language as the request above.`;

    } else {
        systemPrompt = "Answer briefly and clearly using only the provided information. Always reply in the same language the user used in their message, even if the context is in Italian.";

        userPrompt = `Context:
${context}

Question: ${message}
IMPORTANT: Reply in the same language as the question above.`;
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
            max_tokens: isWorkout ? 600 : 150
        })
    });

    const data = await res.json();

    return Response.json({
        reply: data.choices[0].message.content
    });
}