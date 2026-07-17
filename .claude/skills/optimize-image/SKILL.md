---
name: optimize-image
description: |
  Use this skill when the user asks to download an image from a URL, optimize or convert
  images to WebP, resize images for the web, save Pexels or stock photos to the public
  folder for local serving, or replace external image URLs with local WebP copies.
  Trigger phrases: "download image", "optimize image", "convert to webp", "save image locally",
  "download from Pexels", "add image to public folder".
argument-hint: <url> [width=1200] [filename=auto] [quality=85]
allowed-tools: [Bash, Read, Glob]
version: 1.0.0
---

# Optimize Image

Downloads an image from a URL, resizes it, converts it to WebP, and saves it to
`public/images/` for local serving — replacing external CDN dependencies with
fast, self-hosted assets.

## Arguments

Parse `$ARGUMENTS` to extract:

| Arg | Required | Default | Description |
|-----|----------|---------|-------------|
| `url` | yes | — | Image URL to download (Pexels, Unsplash, etc.) |
| `width` | no | 1200 | Target width in px; height auto-calculated |
| `filename` | no | auto | Output name without extension |
| `quality` | no | 85 | WebP quality 1–100 |

**Parsing examples:**
- `/optimize-image https://images.pexels.com/photos/123/photo.jpeg`
- `/optimize-image https://images.pexels.com/photos/123/photo.jpeg width=800`
- `/optimize-image https://images.pexels.com/photos/123/photo.jpeg width=800 filename=hero-coffee`
- `/optimize-image https://images.pexels.com/photos/123/photo.jpeg width=800 filename=hero quality=90`

## Recommended Dimensions by Use Case

| Use Case | Width | Notes |
|----------|-------|-------|
| Hero / banner | 1920 | Full-width background image |
| Featured image | 1200 | Default; good for large cards |
| Product card | 800 | Menu item images |
| Thumbnail | 400 | Small previews |

## Steps

### 1. Parse Arguments

Extract `url`, `width` (default 1200), `filename` (default auto), `quality` (default 85)
from `$ARGUMENTS`.

### 2. Derive Output Filename

If no `filename` provided, extract one from the URL:
- Pexels URL `.../photos/685527/pexels-photo-685527.jpeg` → `pexels-685527`
- Other URLs → last path segment without extension (strip query params first)

Always append `.webp`. Final output: `public/images/<filename>.webp`

### 3. Check Python Dependencies

Run: `python -c "import PIL, requests" 2>&1`

If the check fails, install with:
```
pip install -r .claude/skills/optimize-image/requirements.txt
```

### 4. Run the Script

```bash
python .claude/skills/optimize-image/scripts/optimize_image.py \
  "<url>" \
  "public/images/<filename>.webp" \
  <width> \
  <quality>
```

The script creates `public/images/` if it doesn't exist.

### 5. Report Results

Tell the user:
- Output file: `public/images/<filename>.webp`
- Local path for `src` attributes: `/images/<filename>.webp`
- File size in KB and final dimensions (printed by the script)

If the project has `lib/menu.ts` or similar files with Pexels URLs matching this image's
photo ID, offer to update those references to use the local path instead.
