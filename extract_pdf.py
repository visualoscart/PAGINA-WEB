import fitz  # PyMuPDF
import sys

def extract_pdf_info(filepath):
    try:
        doc = fitz.open(filepath)
        text = ""
        for page in doc:
            text += page.get_text()
        print("--- Text Extracted ---")
        print(text)
    except Exception as e:
        print(f"Error reading with fitz: {e}")
        try:
            from pypdf import PdfReader
            reader = PdfReader(filepath)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            print("--- Text Extracted (pypdf) ---")
            print(text)
        except Exception as e2:
            print(f"Error reading with pypdf: {e2}")

if __name__ == "__main__":
    extract_pdf_info("Manual de Marca - Visual Oscart.pdf")
