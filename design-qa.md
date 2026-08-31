# Design QA

- Source visual truth: `C:\Users\mizar\Downloads\download - 2026-08-25T122210.037.jfif`
- Implementation screenshot: `C:\Users\mizar\Documents\Codex\2026-08-02\new-chat-2\outputs\balance-with-maksym-site\qa-home-desktop-v2.png`
- Combined comparison: `C:\Users\mizar\Documents\Codex\2026-08-02\new-chat-2\outputs\balance-with-maksym-site\qa-comparison-v2.png`
- Desktop viewport: browser default, 1265 CSS px wide, density 1
- Mobile viewport: 390 × 844 CSS px, density 1
- Additional responsive viewports: 768 × 1024, 1024 × 768, 1200 × 630 and 1440 × 900 CSS px, density 1
- State: home page, default state

## Full-view comparison evidence

The implementation follows the source hierarchy: dark photographic hero, compact four-part trust strip, light anatomical-card section, process split, private-care composition, dark personal introduction, reviews, pricing, and a dark final conversion area. In the second pass the desktop sections were shortened to match the source's editorial density more closely. The remaining extra length is intentional because the client asked to retain the full appointment-request form.

## Focused region comparison evidence

The treatment-card region was inspected at desktop and mobile sizes. Six purpose-made anatomical raster images now replace unrelated massage photography. Their warm ivory, bone, muscle-pink and restrained gold palette matches the source card art direction. Images use consistent 4:3 crops and remain legible in the single-column mobile stack.

## Required fidelity surfaces

- Typography: high-contrast editorial serif hierarchy and restrained utility sans-serif follow the source; wrapping is stable at both checked viewports.
- Spacing/layout: major section order and light/dark rhythm match; the implementation intentionally keeps more vertical space for verified business content and the request form.
- Colors/tokens: near-black, warm ivory and muted bronze align with the source without becoming overly gold.
- Image quality: all six card visuals are real generated raster assets, correctly cropped and consistent; no placeholders or CSS drawings remain.
- Hero image: a dedicated wide raster photograph now matches the source's dark walnut treatment room, active hands-on pose, right-weighted subject and left-side copy space. Desktop and 390 px mobile crops were browser-checked.
- Responsive hero: desktop uses `hero-dark-treatment-wide-v5.png`; mobile uses the independently composed `hero-dark-treatment-mobile-v1.png`, shown with contain/bottom positioning so the treatment table and practitioner remain visible rather than being cropped from the wide master.
- Social preview: the browser-rendered first viewport was captured as a clean 1200 × 630 OG asset at `public/images/og/balance-with-maksym-og.jpg`.
- Copy/content: preserves the approved Sydney offer, treatments, pricing and manual-confirmation booking model. No static review count or Sports Massage claim is used.

## Interaction and runtime checks

- Navigation anchors and appointment CTAs are rendered and target existing sections.
- Appointment form controls are present and responsive.
- Desktop and mobile browser console checks returned no errors.
- No horizontal overflow was found at 390, 768, 1024 or 1440 px widths.
- Document title, meta description, canonical, Open Graph title/image and Twitter large-image card were verified in the rendered head.
- Production build completed successfully.

## Comparison history

1. Earlier P1: the card grid used generic service photography and did not reproduce the anatomical visual language of the source.
2. Fix: generated and installed six coherent anatomy/therapy assets; changed the grid from a generic featured-service list to concerns and treatment methods that visually support the positioning.
3. Second P2: supporting sections were materially taller than the source and made the page feel like a different long-form layout.
4. Fix: reduced desktop hero, trust strip, process, private-care, about, reviews and pricing heights while preserving legibility and the conversion form.
5. Post-fix evidence: `qa-comparison-v2.png` shows the closer section order, proportions, density and light/dark rhythm.
6. Third P1: the previous bright real-photo hero did not match the source's dark, private, treatment-focused atmosphere.
7. Fix: generated and installed `public/images/maksym/hero-dark-treatment-v4.png`, using the reference layout and Maksym's supplied portrait as identity grounding; tuned object position for desktop and mobile.
8. Post-fix evidence: browser captures show readable copy, visible hands-on treatment and stable responsive cropping with no console errors.
9. Fourth P1: the first dark hero master still cropped parts of the table at some viewport ratios.
10. Fix: generated a farther 2:1 desktop master plus a separate portrait mobile master; added device-specific rendering and breakpoint-specific hero treatment.
11. Post-fix evidence: 390, 768, 1024 and 1440 px browser checks show contained focal subjects, readable copy, functional navigation and zero horizontal overflow.

## Follow-up polish

- P3: replace remaining supporting photography if Maksym supplies better source-matched real photos.
- P3: replace review-theme summaries with real approved Google review excerpts when supplied.

final result: passed
