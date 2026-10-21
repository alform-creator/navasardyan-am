# NAVASARDYAN.AM — Arman Navasardyan personal website

**Version:** Final verified static release, 21 October 2026.

## Նկարագրություն

Արման Նավասարդյանի անձնական կայքը՝ հայերեն, ռուսերեն և անգլերեն, կախվածությունների բուժման վերաբերյալ խորհրդատվության թեմաներով։

- 30 նախապես պատրաստված HTML էջ + 404 սխալի էջ։
- 5 տեղեկատվական բլոգային հոդված՝ յուրաքանչյուրը առանձին նկարով, բոլոր երեք լեզուներով։
- Հարմարեցված հեռախոսների և համակարգիչների համար, նուրբ անիմացիաներով։
- SEO՝ էջերի առանձին title/description, canonical, hreflang, sitemap, robots.txt, JSON-LD։
- Հեռախոս և WhatsApp՝ **+374 98 098 774**։
- Խորհրդատվություն՝ **25 000 դրամ / 60 րոպե**։
- Կայքում չկա Արմեն Նավասարդյանի կամ ընտանեկան աջակցության առանձին բաժին։

## Տեղադրում / Deployment

The ZIP has the website files **at its root** (such as `index.html`, `assets/`, `ru/`, `en/`, `blog/`). Extract the archive and upload these items into your static hosting's public web root. Do **not** upload the ZIP as an unopened file or place the contents one directory deeper.

**Recommended:** Cloudflare Pages or another static hosting service with `navasardyan.am` configured as its custom domain.

1. Upload the extracted site files to the host's public web root.
2. Connect `navasardyan.am` and enable HTTPS.
3. Confirm the domain opens the Armenian homepage, and `/ru/` and `/en/` work.
4. Verify `tel:` and WhatsApp links on an actual phone.
5. Submit `https://navasardyan.am/sitemap.xml` to Google Search Console.
6. If replacing another website on this domain, back it up and create 301 redirects for any old URLs before switching.

**GitHub Pages preview:** This release uses root-relative links (`/assets/...`) for the final `navasardyan.am` domain. A GitHub Pages *project* address of the form `username.github.io/repository/` has a different base path; the website must be adapted to that prefix for such a preview. Simply uploading files to a repository is not equivalent to publishing a correctly working GitHub Pages project site.

## Functions and limits

- This is a static website. No backend or admin panel is required.
- The contact form **opens WhatsApp with a composed message**; it does not store submissions and cannot confirm live consultation availability.
- No appointment calendar, online payments or separate message database are provided.
- The educational content does not replace medical assessment, detoxification, emergency treatment, or individualized medical care.
- Credentials, work history and professional information were supplied by the client; no independent credential verification was performed.
- SEO tags and structured data were checked locally; live indexing, Core Web Vitals, and rankings can only be measured after deployment and are not guaranteed.
- Confirm that the supplied portrait may be published on the intended site.
- All site images and scripts are stored locally, with no CDN/library runtime requirement.

## QA

See `QA_REPORT.md` for the verified scope and remaining deployment checks.
