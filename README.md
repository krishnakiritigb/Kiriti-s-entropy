# Kiriti's Entropy

Full-stack portfolio application with AI-powered chatbot.

**Live Site:** https://kiritientropy.duckdns.org

## Tech Stack

**Frontend:** React, TypeScript, Material-UI
**Backend:** FastAPI, Python, LangChain
**AI/ML:** Ollama, ChromaDB, tinyllama
**Infrastructure:** Azure Kubernetes Service (AKS), Docker, NGINX Ingress, Let's Encrypt

## Setup

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and configure Ollama settings
uvicorn main:app --reload
```

### Frontend
```bash
yarn install
yarn start
```

## Prerequisites

- Node.js 16+
- Python 3.11+
- Ollama with models: `llama3.2:1b`, `nomic-embed-text`

## Features

- AI chatbot with RAG architecture
- Dark/Light theme
- Responsive design
- PDF resume parsing
