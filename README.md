# X STORE — HORUSX ENTERTAINMENT

Official gaming store website. Pure HTML, CSS and JavaScript — **no backend, no paid services**. Works on GitHub Pages.

The store contains exactly one game: **Escape: out of game / الهروب: من اللعبة** (Horror, 12+, releasing 10 November 2026).

## Files

```
index.html        Home page
game.html         Game details page
404.html          Custom "page not found" page
css/style.css     All styling
js/language.js    English / Arabic system (all translations live here)
js/countdown.js   Release countdown + Download button logic
js/main.js        Menu, search, preloader, toast, animations
images/           Game cover, HORUSX logo, icons
```

## Publish on GitHub Pages (free)

1. Create a new repository on github.com (for example `xstore`).
2. Upload **all the files and folders inside this project** (keep the folder structure).
3. Go to **Settings → Pages**.
4. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After a minute your site is live at `https://YOUR-NAME.github.io/xstore/`.

## Run on your computer

Just double-click `index.html`. (Fonts need internet; everything else works offline.)

## Things you may want to change

- **Release date:** `js/countdown.js` → `RELEASE` (currently `2026-11-10T00:00:00+02:00`, midnight Cairo time).
- **Download link:** `js/countdown.js` → `XSTORE_DOWNLOAD_URL`. Leave it empty until you have a real link. After the release date the button becomes active; with an empty link it tells the visitor that download details have not been announced yet. Paste your link there when ready.
- **Texts / translations:** `js/language.js`.
- **Colors:** top of `css/style.css` (`:root`).

## Notes

- The language choice is saved in `localStorage` (key `xstore-lang`). Arabic switches the page to RTL automatically.
- The Download button is disabled until the release date, checked in the visitor's browser using the real clock.
- No fake login, payment or accounts. Support uses `mailto:horusx.official@gmail.com`.
