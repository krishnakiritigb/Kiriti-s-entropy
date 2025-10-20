"""
PDF Parser Service
Extracts text from Kiriti's resume PDF
"""
import os
from PyPDF2 import PdfReader
from typing import Optional


class PDFParser:
    def __init__(self, pdf_path: str):
        self.pdf_path = pdf_path
        self.resume_text: Optional[str] = None

    def extract_text(self) -> str:
        if self.resume_text:
            return self.resume_text

        try:
            reader = PdfReader(self.pdf_path)
            text_parts = []
            for page in reader.pages:
                text = page.extract_text()
                if text:
                    text_parts.append(text)
            self.resume_text = "\n\n".join(text_parts)
            return self.resume_text
        except Exception as e:
            print(f"Error extracting PDF: {e}")
            return self._get_fallback_text()

    def _get_fallback_text(self) -> str:
        return """Kiriti Gunukuntla Bhasker
Full Stack Developer | React • FastAPI • .NET • SQL Server • Generative AI
kiritigb07@gmail.com | Mississauga, Ontario

3+ years of experience building scalable SaaS platforms and AI-powered solutions.
Expertise in React, FastAPI, .NET, SQL Server, and LLM/RAG systems."""


_parser_instance: Optional[PDFParser] = None

def get_parser() -> PDFParser:
    global _parser_instance
    if _parser_instance is None:
        resume_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "Resume", "Kiriti_FullStackDeveloper.pdf")
        _parser_instance = PDFParser(resume_path)
    return _parser_instance
