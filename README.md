# Hatodik Sebesség

Responsive React / Next.js driving-school redesign, in the school's navy + red brand colours. Motion: masked hero headline, animated road, marquee, scroll-linked text and route progress, a gear-shift indicator (1→6 by section), magnetic buttons and scroll reveals — all disabled under reduced motion. No WebGL or 3D assets are loaded.

- `npm install`
- `npm run dev` → http://localhost:3006
- `npm run build`
- `npm test` (uses installed Google Chrome on macOS)

School content and instructor photographs: https://www.hatodik-sebesseg.hu/ (with a hyphen), inspected 2026-09-26. Contact buttons open phone/email; fees and legal documents link to the existing school website. Nothing is deployed.

The discarded cockpit experiment lives in `blender/` locally only (git-ignored, large binaries). Its third-party assets were from Poly Haven (CC0).

**News / notices:** edit at the unlinked page `/szerkesztes` (password login). Set `ADMIN_PASSWORD` in `.env.local` or the server environment; changing it logs everyone out. Edits are saved to `content/news.json`, so the site must run on a server with a writable disk (`npm run build && npm start`), not serverless hosting. An entry marked *Kiemelt* (urgent) also shows as a dismissible notice at the bottom of the screen, and only one can be urgent at a time. Entries marked *Minta* (sample) are placeholders, so delete them before going live.
