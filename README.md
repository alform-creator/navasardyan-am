# NAVASARDYAN.AM — GitHub Pages preview

This repository publishes the final **navasardyan.am** static website for review.

## iPhone: one-file upload
1. Download **navasardyan-am-FINAL-verified.zip** from the ChatGPT conversation to Files on your iPhone.
2. Open this GitHub repository → **Add file** → **Upload files** (in Safari, use Request Desktop Website if the upload control is hidden).
3. Upload **the ZIP as a single file** in the repository root; keep the exact filename `navasardyan-am-FINAL-verified.zip`.
4. Select **Commit changes**. GitHub Actions will extract the site and publish its files to the `gh-pages` branch.
5. Open **Settings → Pages → Build and deployment** → **Deploy from a branch**, branch **gh-pages**, directory **/(root)** → **Save**.

Preview URL: https://alform-creator.github.io/navasardyan-am/

The workflow changes only the preview copies of the internal root-relative links to the GitHub Pages project path. It adds noindex to the preview to avoid competing with the final official domain. The original ZIP remains unchanged.

The professional website's official destination is https://navasardyan.am/ — **do not** set that custom domain here until its DNS is configured and the site is ready for production.