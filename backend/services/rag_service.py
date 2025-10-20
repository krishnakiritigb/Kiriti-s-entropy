"""
RAG Service
Handles LLM-powered Q&A about Kiriti's resume
Uses LangChain with Ollama for RAG
"""
import os
from typing import Optional, List
from langchain_ollama import ChatOllama
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from .pdf_parser import get_parser


class RAGService:
    def __init__(self):
        self.llm: Optional[ChatOllama] = None
        self.rag_chain = None
        self.retriever = None
        self.resume_context = ""
        self.use_llm = os.getenv("USE_LLM", "false").lower() == "true"
        self.ollama_base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.ollama_model = os.getenv("OLLAMA_MODEL", "llama3.2:1b")
        self.ollama_embed_model = os.getenv("OLLAMA_EMBED_MODEL", "nomic-embed-text")

    def initialize(self):
        """Initialize the RAG pipeline with LangChain and Ollama"""
        # Load resume text
        parser = get_parser()
        self.resume_context = parser.extract_text()
        print(f"Loaded resume context ({len(self.resume_context)} chars)")

        # Initialize RAG pipeline if LLM is enabled
        if self.use_llm:
            try:
                print(f"Initializing LangChain with Ollama at {self.ollama_base_url}")
                print(f"Using chat model: {self.ollama_model}")
                print(f"Using embedding model: {self.ollama_embed_model}")

                # Initialize LLM with async support
                self.llm = ChatOllama(
                    base_url=self.ollama_base_url,
                    model=self.ollama_model,
                    temperature=0.7,
                )

                # Split text into chunks
                text_splitter = RecursiveCharacterTextSplitter(
                    chunk_size=1000,
                    chunk_overlap=200,
                    length_function=len,
                )
                chunks = text_splitter.split_text(self.resume_context)
                print(f"Split resume into {len(chunks)} chunks")

                # Create embeddings and vector store with dedicated embedding model
                embeddings = OllamaEmbeddings(
                    base_url=self.ollama_base_url,
                    model=self.ollama_embed_model,
                )
                vectorstore = Chroma.from_texts(
                    texts=chunks,
                    embedding=embeddings,
                    collection_name="resume_collection",
                )

                # Create retriever - retrieve more chunks for better context
                self.retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

                # Create custom prompt template
                template = """You are an AI assistant for Kiriti Gunukuntla Bhasker's portfolio website. This website is visited by recruiters, colleagues, and friends who want to learn about Kiriti's professional background.

Your role is to answer questions about Kiriti using ONLY the information from his resume provided below. You must:
- Copy exact names, dates, company names, and education details from the context
- Answer to the best of your knowledge strictly from the context provided
- If information is not in the context, say "I don't have that information in the resume"
- Do NOT make up or hallucinate any information
- Be precise, accurate, and factual

Resume Context: {context}

Question: {question}

Answer (use only information from the resume):"""

                prompt = ChatPromptTemplate.from_template(template)

                # Create RAG chain using LCEL (LangChain Expression Language)
                def format_docs(docs):
                    return "\n\n".join(doc.page_content for doc in docs)

                self.rag_chain = (
                    {"context": self.retriever | format_docs, "question": RunnablePassthrough()}
                    | prompt
                    | self.llm
                    | StrOutputParser()
                )

                print("RAG pipeline initialized successfully")
            except Exception as e:
                print(f"Error initializing RAG pipeline: {e}")
                print("Will use fallback responses")
                self.use_llm = False
        else:
            print("LLM disabled. Using fallback responses.")

    async def generate_response_async(self, question: str) -> str:
        """Generate response to user question about Kiriti using RAG (async)"""
        if not self.resume_context:
            self.initialize()

        # RAG is required - no fallback mode
        if not self.use_llm or not self.rag_chain:
            return "The AI chatbot is currently unavailable. Please make sure the LLM service is enabled and configured properly."

        try:
            result = await self.rag_chain.ainvoke(question)
            return result.strip()
        except Exception as e:
            print(f"RAG chain error: {e}")
            return f"I apologize, but I encountered an error processing your question. Please try again or rephrase your question. Error: {str(e)}"

    def generate_response(self, question: str) -> str:
        """Sync wrapper for backward compatibility"""
        import asyncio
        try:
            loop = asyncio.get_event_loop()
        except RuntimeError:
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
        return loop.run_until_complete(self.generate_response_async(question))


# Singleton instance
_rag_service: Optional[RAGService] = None

def get_rag_service() -> RAGService:
    """Get or create RAG service instance"""
    global _rag_service
    if _rag_service is None:
        _rag_service = RAGService()
        _rag_service.initialize()
    return _rag_service
