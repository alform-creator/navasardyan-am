# navasardyan.am — final pre-deployment QA

Date: 2026-10-21

## Verified
- 31 local HTML files, including 30 index pages and the 404 page
- One H1 per index page
- 30 structured-data pages with parseable JSON-LD
- 120 localized alternate-language links; canonical URLs and meta descriptions
- 757 local link references checked for targets
- 105 image references checked for existence and alt attributes
- 75 telephone link references and 102 WhatsApp references checked against +374 98 098 774
- Armenian, Russian and English homepages rendered at 320, 390, 768, and 1440 px (12 cases)
- Representative inner pages rendered at 390 px (15 cases)
- No browser JavaScript errors or broken images in these 27 cases
- Working responsive mobile menu, blog search, WhatsApp contact-message generation
- No horizontal overflow in tested viewports
- No separate Armen Navasardyan or family-support section
- Reduced-motion preference recognized

## Outside the scope of local validation
- No deployment to navasardyan.am performed
- No real user messages sent; WhatsApp links and message generation were tested only
- Production DNS, HTTPS, CDN, Core Web Vitals and live Google indexing not yet verified
- Professional claims supplied by the client were not independently credential-verified
- SEO visibility/rankings cannot be promised

## Deployment notes
Upload every item in the ZIP root as a static website (e.g. Cloudflare Pages). After launch, verify DNS, HTTPS, sitemap.xml in Search Console, contact links on actual devices and the live page experience.

## Final packaging review (2026-10-21)
- Confirmed 30 canonical URLs match the 30 `sitemap.xml` locations.
- Verified the language alternatives are reciprocal for Armenian, Russian, and English.
- Verified that 5 separate WebP blog illustrations exist and are unique files.
- Removed outdated `_preview.html` from production package.
- Added accurate root-directory upload and GitHub Pages base-path guidance to README.
