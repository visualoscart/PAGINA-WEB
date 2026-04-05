import os
import json
import re

def parse_texto(file_path):
    concepto = ""
    mision = ""
    vision = ""
    if not os.path.exists(file_path):
        return concepto, mision, vision
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Normalize newline to overcome any regex inconsistencies across OSes
    content = content.replace('\r\n', '\n')
    
    # Try to extract sections allowing uppercase, lowercase, with accents
    concepto_match = re.search(r'CONCEPTO\s+(.*?)(?=\nMISI[OÓ]N|\nVISI[OÓ]N|$)', content, re.IGNORECASE | re.DOTALL)
    mision_match = re.search(r'MISI[OÓ]N\s+(.*?)(?=\nCONCEPTO|\nVISI[OÓ]N|$)', content, re.IGNORECASE | re.DOTALL)
    vision_match = re.search(r'VISI[OÓ]N\s+(.*?)(?=\nCONCEPTO|\nMISI[OÓ]N|$)', content, re.IGNORECASE | re.DOTALL)
    
    if concepto_match: concepto = concepto_match.group(1).strip()
    if mision_match: mision = mision_match.group(1).strip()
    if vision_match: vision = vision_match.group(1).strip()
    
    return concepto, mision, vision

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    marcas = []
    
    for item in os.listdir(base_dir):
        path = os.path.join(base_dir, item)
        if os.path.isdir(path) and not item.startswith('.'):
            files = os.listdir(path)
            # Find the exact or case-insensitive match for LOGO.xxx, VIDEO.xxx, PORTADA.xxx
            logo_file = next((f for f in files if f.upper().startswith('LOGO.')), None)
            video_file = next((f for f in files if f.upper().startswith('VIDEO.')), None)
            portada_file = next((f for f in files if f.upper().startswith('PORTADA.')), None)
            
            # If the folder has a LOGO, we treat it as a Brand Directory
            if logo_file:
                brand = {
                    "id": item,
                    "name": item.replace("1 DISEÑO ", "").replace("DISEÑO ", "").title(), # Clean name somewhat
                    "folderName": item,
                    "logoBtn": f"{item}/{logo_file}",
                    "portada": f"{item}/{portada_file}" if portada_file else None,
                    "video": f"{item}/{video_file}" if video_file else None,
                    "concepto": "",
                    "mision": "",
                    "vision": "",
                    "mockups": [],
                    "fondos": [],
                    "versiones": [],
                    "valores": []
                }
                
                texto_path = os.path.join(path, "TEXTO.txt")
                c, m, v = parse_texto(texto_path)
                brand['concepto'] = c
                brand['mision'] = m
                brand['vision'] = v
                
                # We need files to be sorted logically e.g., MOCKUP 1 before MOCKUP 2.
                # Python's sorted does lexicographical sort which works since they are 1, 2, 3...
                for f in sorted(files):
                    f_upper = f.upper()
                    if f_upper.startswith("MOCKUP"):
                        brand['mockups'].append(f"{item}/{f}")
                    elif f_upper.startswith("FONDO"):
                        brand['fondos'].append(f"{item}/{f}")
                    elif f_upper.startswith("VERSION"):
                        brand['versiones'].append(f"{item}/{f}")
                    elif f_upper.startswith("VALOR"):
                        brand['valores'].append(f"{item}/{f}")
                
                marcas.append(brand)
    
    # Output file
    out_file = os.path.join(base_dir, "marcas_data.js")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("window.marcasData = " + json.dumps(marcas, indent=4, ensure_ascii=False) + ";\n")
    print(f"✅ Se generó el archivo {out_file} con éxito. Encontradas {len(marcas)} marcas.")

if __name__ == "__main__":
    main()
