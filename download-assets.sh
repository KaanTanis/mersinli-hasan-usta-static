#!/usr/bin/env bash
set -euo pipefail

BASE="https://www.mersinlihasanustatantuni.com"
ROOT="$(cd "$(dirname "$0")" && pwd)"
ASSETS="$ROOT/assets"
mkdir -p "$ASSETS"

# This package keeps all site images local so the redesign remains independent
# from the old Laravel site's /storage path. Run this while the old site is online.
files=(
  "logo.png|$BASE/logo.png"
  "product-et-lavas.webp|$BASE/storage/uploads/6874fb55a9921.webp"
  "product-et-acik.webp|$BASE/storage/uploads/6874fb567cdbc.webp"
  "product-et-sutlu-somun.webp|$BASE/storage/uploads/6874fb57339b9.webp"
  "product-et-yogurtlu.webp|$BASE/storage/uploads/6874fb57de411.webp"
  "product-biftek-lavas.webp|$BASE/storage/uploads/6874fb58973e2.webp"
  "product-biftek-acik.webp|$BASE/storage/uploads/6874fb594ee6e.webp"
  "product-biftek-sutlu-somun.webp|$BASE/storage/uploads/6874fb5a23710.webp"
  "product-biftek-yogurtlu.webp|$BASE/storage/uploads/6874fb5b0085a.webp"
  "product-tavuk-lavas.webp|$BASE/storage/uploads/6874fb5bd04eb.webp"
  "product-tavuk-acik.webp|$BASE/storage/uploads/6874fb5c840a1.webp"
  "product-tavuk-sutlu-somun.webp|$BASE/storage/uploads/6874fb5d364e2.webp"
  "product-tavuk-yogurtlu.webp|$BASE/storage/uploads/6874fb5dd8f7d.webp"
  "product-kunefe.webp|$BASE/storage/uploads/6874fb5e83873.webp"
  "icon-card.webp|$BASE/storage/uploads/6874fb5f52dc1.webp"
  "icon-phone.webp|$BASE/storage/uploads/6874fb5f53a20.webp"
  "icon-delivery.webp|$BASE/storage/uploads/6874fb5f54611.webp"
  "hero.webp|$BASE/storage/uploads/6874fb53df700.webp"
)

for item in "${files[@]}"; do
  name="${item%%|*}"
  url="${item#*|}"
  printf '→ %s\n' "$name"
  curl -L --fail --retry 3 --retry-delay 1 --connect-timeout 10 --max-time 60 \
    -A 'Mozilla/5.0 static-site-asset-fetcher' "$url" -o "$ASSETS/$name"
done

if command -v cwebp >/dev/null 2>&1; then
  printf '\n→ responsive variants\n'
  cwebp -quiet -q 82 -resize 640 0 "$ASSETS/hero.webp" -o "$ASSETS/hero-640.webp"
  cwebp -quiet -q 84 -resize 960 0 "$ASSETS/hero.webp" -o "$ASSETS/hero-960.webp"
  cwebp -quiet -q 85 -resize 1280 0 "$ASSETS/hero.webp" -o "$ASSETS/hero-1280.webp"
  for f in "$ASSETS"/product-*.webp; do
    [[ "$f" == *-480.webp ]] && continue
    cwebp -quiet -q 82 -resize 480 0 "$f" -o "${f%.webp}-480.webp"
  done
fi
if command -v sips >/dev/null 2>&1 && [[ -f "$ASSETS/logo.png" ]]; then
  sips -Z 320 "$ASSETS/logo.png" --out "$ASSETS/logo-320.png" >/dev/null
fi

printf '\nAssets ready: %s\n' "$ASSETS"
ls -lh "$ASSETS"
