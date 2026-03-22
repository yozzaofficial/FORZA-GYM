"use client"
import "./../css/chatai.css"
import React from "react"

type messagesType = {
    id: string,
    text: string
    sender: string
}

export default function ChatAI() {
    const [messages, setMessages] = React.useState<messagesType[]>([])
    const [input, setInput] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const chatRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        chatRef.current?.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [messages]);

    function getTimeFromNow() {
        const now = new Date(Date.now());
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    async function sendUserMessage(text = "") {
        if (loading) return;

        const finalText = text === "" ? input : text;
        if (!finalText.trim()) return;

        const userMessage = {
            id: getTimeFromNow(),
            text: finalText,
            sender: "user"
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message: finalText })
        });

        const data = await res.json();

        const aiMessage = {
            id: getTimeFromNow(),
            text: data.reply,
            sender: "ai"
        };

        setMessages((prev) => [...prev, aiMessage]);
        setLoading(false);
    }

    return <div className="chatContainer">
        <div className="chatHeader">
            <div className="AIInfo">
                <div className="AIProfile">🤖</div>
                <p className="AIName">FORZA AI Coach</p>
            </div>
            <p className="AIStatus">Online</p>
        </div>

        <div className="chatMessages" ref={chatRef}>
            <div className="msg">
                <div className="AIProfile">🤖</div>
                <div className="text">
                    <p> Hi! I’m the AI coach of FORZA 💪 I can help you with information about the gym, our classes and schedules, or create a personalized workout plan for you. Where would you like to start?</p>
                    <div className="timeMSG">Now</div>
                </div>
            </div>

            {messages.map((m, i) => (
                m.sender === "user" ? (
                    <div key={i} className="msgU">
                        <div className="text">
                            <p > {m.text}</p>
                            <div className="timeMSG">{m.id}</div>
                        </div>
                        <div className="profileU">MG</div>
                    </div>
                ) : (
                    <div key={i} className="msg">
                        <div className="AIProfile">🤖</div>
                        <div className="text">
                            <p style={{ whiteSpace: "pre-line" }}>{m.text}</p>
                            <div className="timeMSG">{m.id}</div>
                        </div>
                    </div>
                )
            ))}

            {loading && (
                <div className="msg">
                    <div className="AIProfile">🤖</div>
                    <div className="text">
                        <p className="typing">Typing...</p>
                    </div>
                </div>
            )}

            {messages.length == 0 && <div className="defaultMsg">
                <button className="msgD" onClick={() => sendUserMessage("Create a plan")} disabled={loading}>🗒️ Create a plan</button>
                <button className="msgD" onClick={() => sendUserMessage("Pricing")} disabled={loading}>💰 Pricing</button>
            </div>}
        </div>

        <div className="chatText">
            <input
                id="chatAI"
                type="text"
                placeholder="Write a message"
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendUserMessage();
                    }
                }}
            />
            <button className="chatSubmit" disabled={loading} onClick={() => sendUserMessage()}>➤</button>
        </div>
    </div>
}