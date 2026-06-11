import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function ChatBot() {

  console.log(
    "KEY:",
    import.meta.env.VITE_GEMINI_API_KEY
  );

  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askGemini = async () => {

    if (!question.trim()) return;

    try {

      setLoading(true);

      const apiKey =
        import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        setAnswer(
          "API Key not found. Check .env file."
        );
        setLoading(false);
        return;
      }

      const genAI =
        new GoogleGenerativeAI(apiKey);

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        });

      const prompt = `
                You are Vedant Mhatre's portfolio AI assistant.

                About Vedant:
                - Computer Science Student
                - Java Developer
                - React Developer
                - Flutter Enthusiast
                - Learning DSA
                - Built Finance Tracker, Stock Analyzer, InterviewFlow, OwlTrails and Cookify.

                User Question:
                ${question}

                Answer professionally and briefly.
                `;

                const result = await model.generateContent(prompt);

      const response =
        result.response.text();

      setAnswer(response);

    } catch (error) {

      console.error(error);

      setAnswer(
        error.message ||
        "Error connecting to Gemini."
      );
    }

    setLoading(false);
  };

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="chat-window">

          <h3>🤖 Ask Vedant AI</h3>

          <input
            type="text"
            placeholder="Ask about my projects, skills or experience...."
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <button onClick={askGemini}>
            Ask
          </button>

          {loading && (
            <p>Thinking...</p>
          )}

          <p>{answer}</p>

        </div>
      )}
    </>
  );
}

export default ChatBot;