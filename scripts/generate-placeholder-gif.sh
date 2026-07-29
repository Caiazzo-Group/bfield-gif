#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_dir="$(cd "${script_dir}/.." && pwd)"
frame_dir="$(mktemp -d)"

cleanup() {
  rm -rf "${frame_dir}"
}
trap cleanup EXIT

command -v magick >/dev/null 2>&1 || {
  echo "ImageMagick is required. Install it with: brew install imagemagick" >&2
  exit 1
}

magick \
  -background none \
  -density 144 \
  "${project_dir}/assets/placeholder-field.svg" \
  -resize 800x800 \
  "${frame_dir}/field.png"

magick \
  -background none \
  -density 144 \
  "${project_dir}/assets/placeholder-background.svg" \
  -resize 800x800 \
  "${frame_dir}/background.png"

for frame in $(seq 0 47); do
  angle=$((frame * 360 / 48))
  frame_path="$(printf "%s/frame-%03d.png" "${frame_dir}" "${frame}")"

  magick \
    "${frame_dir}/background.png" \
    \( "${frame_dir}/field.png" \
      -background none \
      -virtual-pixel transparent \
      -distort SRT "${angle}" \
    \) \
    -gravity center \
    -compose over \
    -composite \
    "${frame_path}"
done

magick \
  -delay 8 \
  "${frame_dir}"/frame-*.png \
  -layers Optimize \
  -loop 0 \
  "${project_dir}/assets/placeholder-bfield.gif"

echo "Generated assets/placeholder-bfield.gif"
