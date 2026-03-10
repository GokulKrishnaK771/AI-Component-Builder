import axios from "axios";

export const generateComponentFromAI = async (prompt) => {
    console.time("AI response")
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions", {
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert React developer. Generate a complete React functional component using Tailwind CSS styling. You MUST export default the component at the end (e.g., 'export default function ComponentName() {...}'). Do NOT include any import statements (like React or useState). Do NOT wrap your answer in markdown blocks like ```jsx. ONLY return the plain code."
                },
                {
                    role: "user",
                    content: `Create a React UI component for: ${prompt}`
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7
        },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        )
         console.timeEnd("AI response")
        return response.data.choices[0].message.content
    } catch (error) {
        console.error("AI generation failed:", error)
        return null
    }



}
