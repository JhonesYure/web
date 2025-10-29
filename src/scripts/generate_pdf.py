"""
Script para converter os currículos HTML em PDF
Usa weasyprint para gerar PDFs profissionais
"""

import os

import weasyprint

# Caminhos dos arquivos
base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
assets_dir = os.path.join(base_dir, "assets")

html_files = {"resume-en.html": "resume-en.pdf", "resume-pt.html": "resume-pt.pdf"}

print("🚀 Iniciando conversão de HTML para PDF...\n")

for html_file, pdf_file in html_files.items():
    html_path = os.path.join(assets_dir, html_file)
    pdf_path = os.path.join(assets_dir, pdf_file)

    if os.path.exists(html_path):
        print(f"📄 Convertendo {html_file}...")
        try:
            with open(html_path, "r", encoding="utf-8") as f:
                html_content = f.read()
            doc = weasyprint.HTML(string=html_content, base_url=assets_dir)
            doc.write_pdf(pdf_path)
            print(f"✅ {pdf_file} criado com sucesso!")
        except Exception as e:
            print(f"❌ Erro ao converter {html_file}: {e}")
            import traceback

            traceback.print_exc()
    else:
        print(f"⚠️  Arquivo {html_file} não encontrado!")
    print()

print("✨ Conversão concluída!")
