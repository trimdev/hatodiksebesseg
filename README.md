# Hatodik Sebesség

Responsive React / Next.js driving-school redesign, in the school's navy + red brand colours. Motion: masked hero headline, animated road, marquee, scroll-linked text and route progress, a gear-shift indicator (1→6 by section), magnetic buttons and scroll reveals — all disabled under reduced motion. No WebGL or 3D assets are loaded.

- `npm install`
- `npm run dev` → http://localhost:3006
- `npm run build`
- `npm test` (uses installed Google Chrome on macOS)

School content and instructor photographs: https://www.hatodik-sebesseg.hu/ (with a hyphen), inspected 2026-09-26. Contact buttons open phone/email; fees and legal documents link to the existing school website. Nothing is deployed.

The discarded cockpit experiment lives in `blender/` locally only (git-ignored, large binaries). Its third-party assets were from Poly Haven (CC0).

**News / notices:** edit `content/news.js` (instructions in Hungarian at the top). An entry with `urgent: true` also shows as a dismissible notice at the bottom of the screen. Entries marked `sample: true` are placeholders — delete them before going live.
