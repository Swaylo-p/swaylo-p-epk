SWAYLO P — GITHUB PAGES EPK

This is a static website: HTML, CSS, JavaScript and local assets.
No npm install, build step, API key or server-side code is required.

UPLOAD TO THE EXISTING GITHUB PAGES REPOSITORY
1. Keep a copy of your current site before replacing it.
2. Upload the CONTENTS of this folder to the root of swaylo-p/swaylo-p-epk.
   The root must contain index.html, images/, press/, robots.txt, sitemap.xml and .nojekyll.
   Do not put an extra epk/ folder around them in the repository.
3. Commit through GitHub. Keep the repository's existing Pages publishing source.
4. After Pages finishes publishing, open https://swaylo-p.github.io/swaylo-p-epk/.

All local paths are relative, including images and press downloads, so the page works beneath the /swaylo-p-epk/ project path.

LOCAL PREVIEW
Open index.html directly, or run this from this folder:
python -m http.server 4173 --bind 127.0.0.1
Then open http://127.0.0.1:4173/.

EDITING
The CSS and JavaScript are contained in index.html.
The existing original photographs are kept as images/01.webp, 02.webp and 03.webp.
The page features 01.webp and 03.webp; all three are included in the press download.
Release artwork is stored in images/releases/.
Artist biography and technical summary are in press/.
If you change the bio, technical summary or press photos, rebuild press/swaylo-p-press-kit.zip to match.

BOOKING CONTACT
Cristina Croitoru is the main PR/booking contact.
Patrik's original direct contact remains available as artist contact.
The page publishes no fixed fee or unconfirmed bookings.

EXTERNAL SERVICES
The typeface loads from Google Fonts with a system-font fallback.
The featured video loads a YouTube privacy-enhanced player only after the visitor presses play.
Direct YouTube links remain available, including when JavaScript is disabled or embedding is restricted.

This package prepares the site for GitHub Pages; it does not publish a commit to GitHub.
