import fs from "fs";
import "dotenv/config";
import GymData from "../gymData";

async function generate() {
    const results = [];

    for (const item of GymData) {
        const res = await fetch("https://api.openai.com/v1/embeddings", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "text-embedding-3-small",
                input: item.text
            })
        });

        const json = await res.json();


        if (!res.ok) {
            console.error("Errore API:", json);
            continue;
        }

        results.push({
            id: item.id,
            text: item.text,
            embedding: json.data[0].embedding
        });
    }

    fs.writeFileSync(
        "./public/embeddings.json",
        JSON.stringify(results, null, 2)
    );

    console.log("✅ Embeddings salvati!");
}

generate();