# B-field animation

A lightweight GitHub Pages site for sharing magnetic-field animations from the
Caiazzo Group.

## Replace the placeholder

Replace `assets/placeholder-bfield.gif` with the final animation using the same
filename, then commit and push to `main`. GitHub Pages will publish the update
automatically.

To rebuild the included placeholder locally:

```bash
./scripts/generate-placeholder-gif.sh
```

This requires [ImageMagick](https://imagemagick.org/).

## Local preview

From the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

The site is served directly from the root of the `main` branch via GitHub Pages.
