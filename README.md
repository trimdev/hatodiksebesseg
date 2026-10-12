# Hatodik Sebesség

Responsive React / Next.js driving-school redesign, in the school's navy + red brand colours. Motion: masked hero headline, animated road, marquee, scroll-linked text and route progress, a gear-shift indicator (1→6 by section), magnetic buttons and scroll reveals — all disabled under reduced motion. No WebGL or 3D assets are loaded.

- `npm install`
- `npm run dev` → http://localhost:3006
- `npm run build`
- `npm test` (uses installed Google Chrome on macOS)

School content and instructor photographs: https://www.hatodik-sebesseg.hu/ (with a hyphen), inspected 2026-09-26. Contact buttons open phone/email; fees and legal documents link to the existing school website. Nothing is deployed.

The discarded cockpit experiment lives in `blender/` locally only (git-ignored, large binaries). Its third-party assets were from Poly Haven (CC0).

**Pages:** the home page plus every page of the old WordPress site, at the same URLs so existing links keep working: `/tanfolyamaink`, `/b-kategorias-tanfolyamok-koltsegei` (with a cost calculator), `/a-kategorias-tanfolyamok-koltsegei`, `/oktatoink` (filterable), `/kapcsolat` (live open/closed status and an enrolment form that opens the visitor's e-mail app), `/cegadatok`, `/vallalasi-feltetelek`, `/adatkozles` (chart + quarterly tables), `/adatkezelesi-tajekoztato`, `/impresszum`, `/irasos-tajekoztato`. They share the header and footer in `app/(site)/layout.js`.

**School data** (prices, instructors, opening hours, company data, quarterly statistics) lives in `content/school.js`, commented in Hungarian. Prices and the statistics have to be updated there by hand. The content was taken over from the old site on 2026-10-06; the motorbike prices came from the price-table image on that page.

**News / notices:** edit at the unlinked page `/szerkesztes` (password login). Set `ADMIN_PASSWORD` in `.env.local` or the server environment; changing it logs everyone out. Edits are saved to `content/news.json`, so the site must run on a server with a writable disk (`npm run build && npm start`), not serverless hosting. An entry marked *Kiemelt* (urgent) also shows as a dismissible notice at the bottom of the screen, and only one can be urgent at a time. Entries marked *Minta* (sample) are placeholders, so delete them before going live.
