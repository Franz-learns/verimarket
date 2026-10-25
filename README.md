# VeriMarket — original design converted to HTML

This version converts the actual PHP templates in your supplied `verimarket.zip` to static HTML. It keeps the original purple/blue styling, typography, sections, animations, cards and page layouts. This is a separate deliverable from the redesigned marketing site.

## Open locally

Extract the ZIP and open `index.html` in a browser. No PHP, database, build tools or installation is required. Google Fonts loads when online, with system fonts as fallback.

## Upload to GitHub Pages

1. Upload the **contents** of this folder to the root of a GitHub repository. Keep `css/` and `js/` alongside `index.html`.
2. In the repository, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose your branch and **/ (root)**, and save.
4. Open the website URL GitHub provides once the deployment finishes.

## Converted pages

- `index.html`: original landing page.
- `marketplace.html`: original listing grid, with working browser-side search.
- `listing-1.html`, `listing-2.html`, `listing-3.html`: example item details.
- `login.html`, `signup.html`: original account form layouts.
- `verify.html`: original verification form layout.
- `my_listings.html`, `listing_form.html`: original seller dashboard and listing form.
- `messages.html`, `conversation.html`: example inbox and conversation.
- `admin_login.html`, `admin.html`: original admin login and empty queue layouts.
- `backend-required.html`: limitations and links to preview pages.

## What works

Static navigation, responsive layouts, mobile menu, scroll reveal, original counters, marketplace search and listing links.

## What requires a backend

Real accounts, authentication, ID uploads and review, listing creation/editing/deletion, messaging, and administrator actions require the PHP application or another backend. These forms are disabled in the HTML export; this site does not collect passwords, ID documents, uploads or messages, or simulate a real successful submission. Example account states are pre-rendered layout previews, not authenticated sessions.

The static export does not include your database, original admin configuration, uploaded files, private identity documents, PHP source or session data. Example products, prices, names and messages were supplied at build time only. Only `.html`, `.css`, `.js`, this guide, and `.nojekyll` are distributed.

The original landing page includes concept features, sample numbers, competitor comparisons and testimonials that are not supported by verified evidence or the existing implementation. Labels identify these sections as illustrative/planned. Replace them with verified content before using them as factual marketing claims.

If you need fully working accounts and transactions, keep the original PHP project on PHP-capable hosting and link this static site to it, or connect a real backend. GitHub Pages alone cannot execute PHP or SQLite queries.
