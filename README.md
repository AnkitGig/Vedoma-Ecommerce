# Ecom React Conversion

This is a React (Vite) conversion of the static `ecom-latest` HTML template.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- All original CSS/JS plugins are loaded globally from `public/assets`.
- Pages are rendered as HTML fragments using `dangerouslySetInnerHTML` to preserve the original template markup.
- Navigation links use normal `<a href="/...">` routes.
