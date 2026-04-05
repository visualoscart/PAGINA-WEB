---
description: Agregar una nueva marca a la sección de Diseño de Identidad Visual
---

Este workflow describe los pasos exactos para agregar una nueva marca al portafolio interactivo de "Diseño de Identidad Visual" de Visual Oscart. El sistema está automatizado, por lo que basta con crear una carpeta con los recursos correctos y ejecutar el script en Python.

## Pasos del Workflow

1. **Crear la Carpeta de la Marca**
   - En la raíz del proyecto (`d:\0 VISUAL OSCART\8 Otros\WEB\`), crea una carpeta siguiendo el formato numerado: `[NUMERO] DISEÑO [NOMBRE DE MARCA]`.
   - Ejemplo: `2 DISEÑO EMPRESA X`

2. **Agregar los Recursos Base**
   Coloca los siguientes archivos principales en la raíz de la nueva carpeta:
   - `LOGO.png` o `LOGO.jpg`: Se usa como icono en el grid principal y junto a la descripción del concepto.
   - `PORTADA.png` o `PORTADA.jpg`: Sumamente importante. Es el fondo que levita en la tarjeta del grid y el fondo premium de la sección de filosofía en el modal.
   - `VIDEO.mp4`: El video en bucle para la cabecera (hero) del modal.
   
3. **Crear el Archivo de Textos (`TEXTO.txt`)**
   - Crea un archivo llamado `TEXTO.txt`.
   - Incluye exactamente las siguientes tres etiquetas de sección en mayúsculas, separando los textos por estas etiquetas, sin saltos de línea extra dentro de las etiquetas si no es deseado:
     ```text
     [CONCEPTO]
     (Redacta aquí el concepto principal de la marca, asegurándote que no sea exageradamente largo para no dañar el diseño compacto)
     
     [MISION]
     (Redacta aquí la misión de la marca)
     
     [VISION]
     (Redacta aquí la visión de la marca)
     ```

4. **Agregar las Imágenes de Soporte**
   Agrega las imágenes adicionales que nutrirán las secciones. El script automático los reconoce **por el nombre del archivo**. Simplemente asegúrate de que el nombre del archivo contenga la palabra clave:
   - **Mockups**: El archivo debe contener la palabra `MOCKUP` (Ej: `1 MOCKUP BRANDing.jpg`). Se ubicarán en una matriz interactiva.
   - **Fondos (Carrusel)**: El archivo debe contener la palabra `FONDO` (Ej: `FONDO_01.png`). Se mostrarán en el carrusel de slider infinito.
   - **Versiones de Logo**: El archivo debe contener la palabra `VERSION` (Ej: `VERSION LOGO 2.jpg`). Se enlistarán en un grid de 3 columnas (en móviles).
   - **Valores**: El archivo debe contener la palabra `VALOR` (Ej: `VALOR_HONESTIDAD.png`). Se colocarán flotando al final de la filosofía.

5. **Ejecutar el Script de Automatización**
   - Una vez la carpeta contiene todos los archivos e imágenes nombrados correctamente, usa la terminal para ejecutar el script:
   // turbo
   `python build_brands.py`
   - Si todo es correcto, el script actualizará el archivo `marcas_data.js` con las nuevas rutas, aplicando la sintaxis correcta.

6. **Verificar**
   - Abre `index.html` en tu navegador o mediante tu Live Server (`npm run dev` si aplicara) para validar que los cambios se renderizan de manera compacta, con fondos automáticos y que los assets cargan adecuadamente y las animaciones detonan dinámicamente.
