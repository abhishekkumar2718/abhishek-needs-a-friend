# Abhishek Needs a Friend: Survey Responses

A tiny, dark-themed speech slide deck. Plain HTML, CSS, and JavaScript; no dependencies or build step.

## Screenshots

All four supplied screenshots are included: `assets/form.png`, `assets/embarassment.png`, `assets/glee.png`, and `assets/glee-2.png`. Embarrassment and glee have their own slides, using large centered images. Both glee screenshots reveal together, stacked vertically. Filename frames appear only if an image is missing. See [assets/README.md](assets/README.md).

## Present

Open `index.html` or the GitHub Pages URL. Use browser fullscreen for the speech.

- Right Arrow, Down Arrow, Space, or Page Down: next reveal or slide.
- Left Arrow, Up Arrow, or Page Up: previous reveal or slide.
- Home / End: first / last slide.
- Previous / Next buttons also work on touch devices.

The deck contains five slides: title, form, embarrassment response, glee responses, and key findings. Each response slide starts with its title, then reveals its emotion and screenshots on the next advance. Both glee screenshots reveal together. Going backward reverses the reveals. URL fragments retain the current slide and reveal on refresh.

The 85% / 15% chart is fictional data for the joke, not an analysis of actual survey responses.

## Publish

GitHub Pages serves the `main` branch from the repository root. Committed changes to the page or screenshots are deployed automatically.

After adding screenshots:

```sh
git add assets/form.png assets/embarassment.png assets/glee.png assets/glee-2.png
git commit -m "Add WhatsApp screenshots"
git push
```
