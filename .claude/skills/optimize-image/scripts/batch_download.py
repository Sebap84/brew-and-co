#!/usr/bin/env python3
"""Batch download and optimize all Pexels images for brew-and-co."""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))
from optimize_image import optimize

BASE = "https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb"

# (pexels_id, output_filename, width)
IMAGES = [
    # Product cards — 800px
    (685527,   "pexels-685527",   800),
    (312418,   "pexels-312418",   800),
    (302899,   "pexels-302899",   800),
    (374885,   "pexels-374885",   800),
    (3879495,  "pexels-3879495",  800),
    (3879496,  "pexels-3879496",  800),
    (37603081, "pexels-37603081", 800),
    (20205947, "pexels-20205947", 800),
    (9309995,  "pexels-9309995",  800),
    (4134388,  "pexels-4134388",  800),
    (3727250,  "pexels-3727250",  800),
    (3020919,  "pexels-3020919",  800),
    (3892469,  "pexels-3892469",  800),
    (36927102, "pexels-36927102", 800),
    (1126359,  "pexels-1126359",  800),
    (15106329, "pexels-15106329", 800),
    (34661986, "pexels-34661986", 800),
    (5122952,  "pexels-5122952",  800),
    (35903112, "pexels-35903112", 800),
    (35239874, "pexels-35239874", 800),
    # Nosotros grid — 800px
    (2467558,  "pexels-2467558",  800),
    (3182830,  "pexels-3182830",  800),
    # Hero images — 1920px
    (1855214,  "pexels-1855214",  1920),
    (683039,   "pexels-683039",   1920),
]

out_dir = "public/images"
errors = []

for pid, name, width in IMAGES:
    url = BASE.format(id=pid)
    out = f"{out_dir}/{name}.webp"
    try:
        optimize(url, out, width=width, quality=85)
    except Exception as e:
        print(f"✗ {name}: {e}")
        errors.append(name)

print(f"\n{'='*40}")
print(f"Done: {len(IMAGES) - len(errors)}/{len(IMAGES)} images downloaded")
if errors:
    print(f"Failed: {errors}")
