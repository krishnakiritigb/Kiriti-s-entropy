# Kiriti's Entropy

Full-stack portfolio application with AI-powered chatbot.

**Live Site:** https://kiritientropy.duckdns.org

## Tech Stack

**Frontend:** React, TypeScript, Material-UI
**Backend:** Vercel Serverless Functions, Node.js (optional FastAPI for RAG)
**AI/ML:** Groq API (Llama 3.3 70B), RAG Systems
**Infrastructure:** Vercel Serverless, Docker, NGINX

## Setup

### Frontend
```bash
yarn install
yarn start
```

### Backend (Optional)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Prerequisites

- Node.js 16+
- Python 3.11+ (optional, for local backend)

## Features

- AI chatbot powered by Groq API
- Dark/Light theme
- Responsive design
- Serverless deployment
