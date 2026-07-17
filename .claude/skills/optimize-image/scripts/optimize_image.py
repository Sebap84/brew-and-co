#!/usr/bin/env python3
import sys
import os
import requests
from PIL import Image
from io import BytesIO


def optimize(url, output_path, width=1200, quality=85):
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    r = requests.get(url, headers=headers, timeout=30)
    r.raise_for_status()

    img = Image.open(BytesIO(r.content))

    if img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[3])
        img = bg
    elif img.mode != "RGB":
        img = img.convert("RGB")

    if img.width > width:
        img = img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)

    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    img.save(output_path, "WEBP", quality=quality, method=6)

    size_kb = os.path.getsize(output_path) / 1024
    print(f"✓ {output_path}")
    print(f"  {size_kb:.1f} KB | {img.width}x{img.height}px")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python optimize_image.py <url> <output_path> [width] [quality]")
        sys.exit(1)

    optimize(
        sys.argv[1],
        sys.argv[2],
        int(sys.argv[3]) if len(sys.argv) > 3 else 1200,
        int(sys.argv[4]) if len(sys.argv) > 4 else 85,
    )
