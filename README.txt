SWAYLO P — GITHUB PAGES EPK

LAVENDER THEME + LATEST SET UPDATE - 27 OCTOBER 2026
This update uses only IMG_2229.HEIC, converted to browser-compatible formats.
The featured set is Tactik Podcast Series #11, Sunset DJ Set by the Lake.
Earlier recordings remain available in the set list.
The lavender, indigo and warm off-white palette follows the supplied photograph.
Upload the updated index.html, images/swaylo-p-portrait.webp,
images/swaylo-p-portrait.jpg, images/favicon.svg and press/swaylo-p-press-kit.zip.
The full package includes the other existing site assets as well.
Remove images/01.webp, images/02.webp and images/03.webp from the GitHub repository
if those older photographs should no longer be hosted there.

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
The artist photograph appears once in the hero, without cropping.
images/swaylo-p-portrait.webp is the lightweight browser version;
images/swaylo-p-portrait.jpg is the full-resolution press download.
The source IMG_2229.HEIC remains outside this package.
Release artwork is stored in images/releases/.
Artist biography and technical summary are in press/.
If you change the bio, technical summary or the artist photograph, rebuild press/swaylo-p-press-kit.zip to match.

BOOKING CONTACT
Cristina Croitoru is the main PR/booking contact.
Patrik's original direct contact remains available as artist contact.
The page publishes no fixed fee or unconfirmed bookings.

EXTERNAL SERVICES
The typeface loads from Google Fonts with a system-font fallback.
The featured video loads a YouTube privacy-enhanced player only after the visitor presses play.
Direct YouTube links remain available, including when JavaScript is disabled or embedding is restricted.

This package prepares the site for GitHub Pages; it does not publish a commit to GitHub.
