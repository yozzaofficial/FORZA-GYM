# 🏋️‍♂️ FORZA AI Coach

AI-powered fitness assistant built with Next.js that provides smart answers about gym information and generates personalized workout plans.

## 🚀 Features

* 🤖 AI chat assistant for gym support
* 📅 Answers about schedules, classes, and services
* 🧠 Semantic search with embeddings (custom knowledge base)
* 💪 Generates structured workout plans (gym, boxing, yoga)
* ⚡ Fast and lightweight (optimized for low cost)

## 🧠 How it works

1. User sends a message
2. The system generates an embedding of the query
3. It finds the most relevant data using cosine similarity
4. Context is sent to the AI model
5. AI generates a response or a workout plan

## 🛠 Tech Stack

* Next.js (App Router)
* React
* OpenAI API
* Embeddings (text-embedding-3-small)
* Vector similarity search (cosine similarity)

## 💡 Use Cases

* Gym websites
* Fitness SaaS tools
* Personal trainer assistants
* Customer support automation

## ⚙️ Setup

1. Clone the repo
2. Install dependencies

```bash
npm install
```

3. Add your API key

```
OPENAI_API_KEY=your_key_here
```

4. Run the project

```bash
npm run dev
```

## 📈 Future Improvements

* Chat memory
* User profiles
* Subscription system
* Analytics & usage tracking

---

💬 Built to be scalable, low-cost, and ready for real-world use.
