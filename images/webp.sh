#!/bin/bash

# Obtener el directorio donde est ubicado el script
SCRIPT_DIR=$(dirname "$0")

# Navegar al directorio del script
cd "$SCRIPT_DIR"

# Umbral de peso en bytes (por ejemplo, 500 KB)
THRESHOLD=500000

# Funcin para optimizar imgenes WebP
optimize_webp_images() {
  for img in *.webp; do
    if [ -f "$img" ]; then
      # Verificar el tamao de la imagen convertida usando stat compatible con macOS
      filesize=$(stat -f%z "$img")
      if [ $filesize -gt $THRESHOLD ]; then
        echo "La imagen $img es demasiado pesada ($filesize bytes). Optimizar ms."
        # Obtener el nombre original del archivo sin la extensin
        original_name="${img%.*}"
        # Optimizar la imagen con menor calidad
        cwebp -q 60 "$original_name" -o "$img"
        echo "Optimizada $img con menor calidad."
      fi
    fi
  done
}

# Optimizar todas las imgenes WebP en el directorio actual
optimize_webp_images

echo "Optimizacin de imgenes WebP completada."

