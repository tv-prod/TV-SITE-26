# tvprod — TV Production Website

## Project overview
Full custom-coded website for **TV Production** — an Israeli video production company run by **Gal Oren** (producer/director) and **Tal Weisman** (camera/editor). Built from scratch: HTML/CSS/JS, Hebrew RTL, no frameworks.

**Live site:** https://tvprod.vercel.app  
**Packages page:** https://tvprod.vercel.app/packages.html  
**Client contact:** WhatsApp +972533012123  
**Instagram:** instagram.com/tv_prod

---

## Deploy
```
vercel "C:/Users/User/Desktop/SITE-MAKING-SYSTEM/clients/tvprod" --prod --yes
```
- Vercel only (Netlify CLI broken on this machine)
- Never kill node mid-deploy
- Never deploy unless explicitly asked

---

## Files
```
index.html       — main site (single page)
packages.html    — pricing/packages page (self-contained, no shared CSS)
assets/          — hero-bg.mp4, logo PNGs, thumb-*.jpg, accessibility-icon.png
nl-files/        — NagishLi accessibility widget support files
nagishli.js      — NagishLi v2.3 accessibility widget
.vercelignore    — excludes original 725MB video + docx files
```

---

## Design system

| Token | Value |
|---|---|
| `--bg` | `#0b0a09` |
| `--bg2` | `#131211` |
| `--bg3` | `#1e1c1a` |
| `--text` | `#F5F2EA` |
| `--muted` | `rgba(245,242,234,0.52)` |
| `--accent` | `#3b7ef5` (electric blue) |
| `--border` | `rgba(255,255,255,0.08)` |
| `--ease` | `cubic-bezier(0.16,1,0.3,1)` |

**Font:** Heebo, weight 900 for headings  
**Direction:** RTL (`dir="rtl"`, `lang="he"`)  
**Grain overlay:** `body::after`, opacity 0.06  

---

## index.html — section order
`hero → clients → about → services → testimonials → work → pain → CTA band → process → stats-band → press → contact → footer`

**Hero:** fullscreen video (`assets/hero-bg.mp4`), single CTA "צרו קשר"  
**Preloader:** `#tvp-loader` — black screen with TV logo animation, fades out 0.65s  

---

## packages.html — section order
`nav → header → belief section → 3 package cards → FAQ accordion → clients marquee → testimonials carousel → contact form → footer`

**Package names:**
1. מסלול המראה
2. שוברים שתיקה ← POPULAR (blue border + shimmer button)
3. מהעדשה לרכישה

**Package card buttons** → scroll to `#pkg-contact` form (NOT WhatsApp directly).  
**שוברים שתיקה button** → shows discount popup first (code: **TVTV15**, 15% off), then form.

---

## Work section — BunnyCDN library IDs
| Category | Library |
|---|---|
| אירועי חברה | 653650 |
| בעלי עסקים | 653653 |
| הייטק | 653654 |
| מסיבות | 653655 |
| מסעדנות | 653657 |
| נדל"ן | 653658 |
| עיצוב פנים ואדריכלות | 653660 |
| צילומי מוצר | 653661 |
| קוסמטיקה וטיפוח | 653663 |

---

## Featured grid (above work tabs)
- 5 visible cards (card 6 always hidden — no thumbnail)
- Layout: `2fr 1fr`, card 1 spans 2 rows
- Thumbnails: `assets/fw-thumb-*.png` (new — replaced old thumb-*.jpg)
- Hover preview: `assets/fw-clip-*.mp4` plays on mouseenter (desktop only), `preload="none"`
- Card order: Independence → CBC → Caesarea → KATA → Zota
- VFX on hover: diagonal shimmer + 3 pulse rings (no play button, no logo)

## Work category covers
- Desktop cards: `CAT_THUMBS` maps keys → `assets/cat-*.png` (9 categories)
- Mobile bento: same `CAT_THUMBS` applied as `backgroundImage` inline style on `mob-cat-btn`
- CSS: `background-size:cover`, 3-stop dark gradient overlay `::before`, icon stroke white, name text-shadow

---

## Accessibility widget (NagishLi)
- **Files:** `nagishli.js` + `nl-files/` in project root
- **Config:** `nl_lang = "he"; nl_pos = "bl"; nl_compact = "1";`
- **Custom icon:** `assets/accessibility-icon.png` (wheelchair symbol)
- **Overrides:** injected via `DOMContentLoaded` — removes black background, forces bottom-left position
- **On index.html:** widget hidden during preloader, fades in after loader exits
- Standard: Israeli IS 5568 / WCAG 2.1 AA

---

## Stats band
200+ לקוחות מרוצים / 4.9★ דירוג ממוצע / 6+ שנות ניסיון / 24h זמן מענה

---

## Discount popup (index.html)
- Timer: `setTimeout(showPopup, 50000)` — 50 seconds, once per session via `sessionStorage`
- Design: voucher layout, 15% headline, packages.html CTA

---

## Social links
- Instagram: https://www.instagram.com/tv_prod/
- Facebook: https://www.facebook.com/TVproductn
- LinkedIn: https://www.linkedin.com/company/t-v
- WhatsApp: +972533012123

---

## Key rules — never break these
- **Hero is clean** — no heading, no subtitle. Only "צרו קשר" CTA button.
- **Preloader bg = #000** — any other color shows seam with video
- **Accent (#3b7ef5)** — CTA buttons ONLY. Not borders, glows, or bg-tints.
- **Canvas animations disabled on mobile (≤900px)**
- **Work section = tabbed filter** — do not change to carousels
- **Logos marquee** has `direction: ltr` on `.mq-outer` — do not remove
- **`srModal` still in HTML** — re-enable showreel by adding `id="srBtn"` to any button
- **packages.html is self-contained** — no shared stylesheet with index.html
- **BOTH PAGES RULE** — keep in sync: logo marquee, contact form, social icons, footer
- **About video always muted on autoplay** — user unmutes via toggle button
- **Never add filter:blur to orbs** — radial-gradient falloff only
- **Balloon pop animation** uses `getBoundingClientRect()` — NOT IntersectionObserver
- **Section backgrounds** — `#clients`, `#services`, `#work`, `#testimonials` have `background: var(--bg2)`

---

## Pending items
- [ ] Accessibility widget — UserWay or custom accessibility statement page
- [ ] Desktop navbar redesign (vertical sidebar direction — floating pill was rejected)
- [ ] Restaurant canvas animation (מסעדות) — current attempt looks bad, needs full redesign
- [ ] Questions section — 3 questions (content TBD from Gal/Tal)
- [ ] Packages discount popup on button click (beyond שוברים שתיקה)
- [ ] Phone number alongside social icons in contact section
- [ ] Pain section (long text) — pending client decision: keep or remove

---

## Vimeo
- About section video: vimeo.com/1124586444 (loop=1, always muted on autoplay)
- Testimonials: 14 portrait videos in carousel
- **Vimeo embeds don't work on file:// protocol** — test with `python -m http.server 8080`
