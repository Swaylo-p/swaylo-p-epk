SWAYLO P — GITHUB PAGES EPK

AIEVEA BRANDING + FUNKY WAY ARTWORK UPDATE - 27 OCTOBER 2026
The recorded-set selector switches between all six YouTube sessions inside the page.
Selected discography and Aievea releases include official Bandcamp players;
Funky Way includes the official Beatport preview player.

Upload index.html, styles/, scripts/, images/ and the updated text documents.
Aievea uses its official Bandcamp banner, paper texture and ink artwork.
Funky Way now shows its official deeperdub cover.
Bandcamp EP players use their native Standard layout with a small cover,
track list and section-matched purple or teal link colours.
The full package also contains the existing images/, press/ and other site files.
Keep the single supplied portrait and the existing lavender theme.

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
Shared page CSS and the navigation/clipboard JavaScript are in index.html.
styles/ and scripts/ contain the recorded-set selector and release-player components.
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
The selected recording loads a YouTube privacy-enhanced player after a visitor presses play or chooses a set.
Switching recordings replaces the earlier player.
Bandcamp and Beatport players load when a listener opens a release panel.
Only one release panel stays open; closing it removes its player and stops its audio.
Native EP track lists let listeners choose songs; Beatport provides store previews.
With JavaScript disabled, native details panels and direct provider links remain available;
Bandcamp and Beatport interactive controls themselves require JavaScript.
Direct YouTube links remain available, including when JavaScript is disabled or embedding is restricted.

This package prepares the site for GitHub Pages; it does not publish a commit to GitHub.
