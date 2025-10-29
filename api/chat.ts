import type { VercelRequest, VercelResponse } from '@vercel/node';
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Resume context - hardcoded for now (we'll improve this)
const RESUME_CONTEXT = `
Kiriti Gunukuntla Bhasker
Full Stack Developer
Email: kiritigb07@gmail.com
Phone: +1 (437) 799-3425
Location: Mississauga, Ontario
LinkedIn: https://linkedin.com/in/kiritigb
GitHub: https://github.com/kiritigb

SUMMARY:
Full-Stack Developer with 3+ years of experience building scalable SaaS platforms, AI-powered solutions, and enterprise applications. Skilled in React, FastAPI, .NET, SQL Server, and cloud platforms with hands-on experience delivering production-ready LLM/RAG-powered features. Completed Masters in Big Data Analytics from Trent University.

EDUCATION:
- Masters of Science (Applied Modelling and Quantitative Methods – Big Data Analytics)
  Trent University, Canada
  Jan 2023 - Apr 2024
  CGPA: 8.6

- B.Tech (Computer Science with AI Specialization)
  Koneru Lakshmaiah Education Foundation, India
  Jul 2017 - Jun 2021
  CGPA: 7.9

EXPERIENCE:
- Full Stack Engineer | Lucid Data Hub | Toronto, ON | 2022 - Aug 2025
  Built multi-tenant SaaS data integration platform serving healthcare, finance, retail, and mining industries.
  Developed interactive dashboards with React and TypeScript. Designed FastAPI endpoints and integrated
  Celery + Redis for long-running LLM tasks. Implemented confidence scoring for code conversion using ML techniques.
  Technologies: React, TypeScript, FastAPI, .NET, SQL Server, Generative AI, RAG, Celery, Redis

- Software Developer | Vtiger Systems | Hyderabad, India | 2021 - 2022
  Developed CRM extensions using VTAP framework (built on Vue.js), enabling clients to extend SaaS CRM
  with custom apps and connectors. Built interactive UI components and integrations.
  Technologies: VTAP, Vue.js, JavaScript, CRM Development, Integration

- Software Development Intern | SenSen Networks | Hyderabad, India | 2020
  Developed real-time file broadcast systems for automated processing pipelines.
  Technologies: Python, Real-time Systems, CI/CD

SKILLS:
Languages & Frameworks: Python, C#, JavaScript/TypeScript, React, Vue.js, .NET, FastAPI, Flask, Node.js
AI/ML & Data Science: Generative AI, RAG Systems, LangChain, NLP, Machine Learning, Deep Learning, Hugging Face
Databases & DevOps: Microsoft SQL Server, PostgreSQL, Redis, Celery, Docker, Azure, Databricks, Git/CI/CD
`;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Create chat completion with Groq
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant for Kiriti Gunukuntla Bhasker's portfolio website. This website is visited by recruiters, colleagues, and friends who want to learn about Kiriti's professional background.

Your role is to answer questions about Kiriti using ONLY the information from his resume provided below. You must:
- Copy exact names, dates, company names, and education details from the context
- Answer to the best of your knowledge strictly from the context provided
- If information is not in the context, say "I don't have that information in the resume"
- Do NOT make up or hallucinate any information
- Be precise, accurate, and factual

Resume Context:
${RESUME_CONTEXT}`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'llama-3.3-70b-versatile', // Fast and good quality
      temperature: 0.3,
      max_tokens: 500,
    });

    const reply = chatCompletion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Groq API error:', error);
    return res.status(500).json({
      error: 'Failed to generate response',
      details: error.message
    });
  }
}
