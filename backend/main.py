"""
FastAPI Backend for Kiriti's Portfolio
Provides RAG-powered chat endpoint
"""
from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.rag_service import get_rag_service
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Lifespan context manager for startup/shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize RAG service on startup"""
    print("Initializing RAG service...")
    _ = get_rag_service()  # Trigger initialization (side effect in singleton getter)
    print("RAG service ready!")
    yield
    # Cleanup on shutdown (if needed)
    print("Shutting down...")

# Initialize FastAPI app with lifespan
app = FastAPI(
    title="Kiriti's Entropy API",
    description="RAG-powered chatbot for Kiriti's Entropy",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware - allow frontend to access
# Get allowed origins from environment variable or use defaults
allowed_origins_str = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:5173,https://portfolio.4.229.177.128.nip.io")
allowed_origins = [origin.strip() for origin in allowed_origins_str.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request/Response models
class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Kiriti's Entropy API is running!",
        "endpoints": {
            "/chat": "POST - Chat with AI about Kiriti",
            "/health": "GET - Health check"
        }
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

# Chat endpoint
@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint - answers questions about Kiriti using RAG
    Runs LLM inference in a separate thread to avoid blocking the event loop
    """
    try:
        if not request.message or len(request.message.strip()) == 0:
            raise HTTPException(status_code=400, detail="Message cannot be empty")

        # Get RAG service
        rag = get_rag_service()

        # Use native async method (no thread pool needed - LangChain handles async natively)
        reply = await rag.generate_response_async(request.message)

        return ChatResponse(reply=reply)

    except HTTPException:
        raise
    except Exception as e:
        print(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
