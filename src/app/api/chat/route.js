import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const PORTFOLIO_CONTEXT = `
You are the AI Portfolio Assistant for Ranjeet Kumar.
Your goal is to showcase Ranjeet's skills, experience, and projects to visitors.

**Ranjeet's Profile:**
- **Role:** Full Stack Developer
- **Specialization:** Java, Spring Boot, Modern Web Architectures (React, Next.js).
- **Current Role:** Full Stack Developer at Chandra Realtors (2025 - Present), leading internal CRM and mobile app development and DevOps.
- **Previous Experience:** App Debugging at MereHisaab App (2024), fixing critical build issues and optimizing performance.
- **Education:** B.Tech in CSE from Baba Banda Singh Bahadur Engineering College (2021-2025).

**Key Skills:**
- Backend: Java, Spring Boot, Node.js
- Frontend: React, Next.js, Tailwind CSS
- Tools: Git, Docker, DevOps automation

**Your Capabilities (Tools):**
You can perform actions on the website by returning a specific JSON structure.
If the user asks to see a specific section or project, you SHOULD use these tools.

1.  **NAVIGATE**: Scroll to a section.
    - Format: { "type": "NAVIGATE", "section": "experience" }
    - Valid sections: "hero", "about", "skills", "experience", "projects", "contact"
2.  **HIGHLIGHT**: Highlight a specific project card (if applicable).
    - Format: { "type": "HIGHLIGHT", "id": "project-id" }
3.  **OPEN_LINK**: Open an external link.
    - Format: { "type": "OPEN_LINK", "url": "https://github.com/..." }

**Response Format:**
You must ALWAYS return your response as a JSON object with this structure:
{
  "message": "Your friendly text response here...",
  "action": { ... tool action object ... } // Optional, null if no action needed
}
Example:
{
  "message": "Here are Ranjeet's projects. The Portfolio website itself is a great example!",
  "action": { "type": "NAVIGATE", "section": "projects" }
}

**Tone:**
Friendly, professional, concise, and enthusiastic about technology.
Do not make up facts. If you don't know, say "I'm not sure about that detail, but Ranjeet is a quick learner!"
`;

export async function POST(req) {
    try {
        const { messages } = await req.json();
        const latestMessage = messages[messages.length - 1];

        // --- FALLBACK / MOCK MODE ---
        // If no API key is present, we use a mock responder for demonstration purposes.
        if (!process.env.GEMINI_API_KEY) {
            console.warn("GEMINI_API_KEY is missing. Using generic mock response.");
            return NextResponse.json(generateMockResponse(latestMessage.content));
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "application/json" }
        });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: PORTFOLIO_CONTEXT }]
                },
                {
                    role: "model",
                    parts: [{ text: JSON.stringify({ message: "Ready to assist! I understand Ranjeet's profile and my capabilities." }) }]
                },
                // Add simplified history here if needed, but for now we just send the latest user query with context
            ],
        });

        const result = await chat.sendMessage(latestMessage.content);
        const responseText = result.response.text();

        // Parse the JSON response from the LLM
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(responseText);
        } catch (e) {
            // Fallback if model didn't output valid JSON
            parsedResponse = {
                message: responseText,
                action: null
            };
        }

        return NextResponse.json(parsedResponse);

    } catch (error) {
        console.error("AI Chat Error:", error);
        return NextResponse.json({
            message: "I'm having a bit of trouble connecting to my brain right now. Please try again later!",
            action: null
        }, { status: 500 });
    }
}

// Simple keyword-based mock responder for when API key is missing
function generateMockResponse(text) {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("project") || lowerText.includes("work")) {
        return {
            message: "Ranjeet has worked on several impressive projects, including CRM systems and this portfolio! Let me take you to the projects section.",
            action: { type: "NAVIGATE", section: "projects" }
        };
    }

    if (lowerText.includes("experience") || lowerText.includes("job") || lowerText.includes("carrer")) {
        return {
            message: "Ranjeet is currently a Full Stack Developer at Chandra Realtors (2025-Present) and previously worked with MereHisaab App.",
            action: { type: "NAVIGATE", section: "experience" }
        };
    }

    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("hire")) {
        return {
            message: "Interested in working with Ranjeet? Great choice! Here's how you can get in touch.",
            action: { type: "NAVIGATE", section: "contact" }
        };
    }

    if (lowerText.includes("skill") || lowerText.includes("stack") || lowerText.includes("tech")) {
        return {
            message: "Ranjeet specializes in Java, Spring Boot, React, and Next.js. A powerful Full Stack combination!",
            action: { type: "NAVIGATE", section: "skills" }
        };
    }

    return {
        message: "I'm Ranjeet's AI Assistant. I can tell you about his projects, experience, and skills. What would you like to know?",
        action: null
    };
}
