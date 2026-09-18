# Abhishek Needs a Friend: Survey Responses

A tiny, dark-themed speech slide deck. Plain HTML, CSS, and JavaScript; no dependencies or build step.

## Screenshots

All four supplied screenshots are included: `assets/form.png`, `assets/embarassment.png`, `assets/glee.png`, and `assets/glee-2.png`. Embarrassment and glee have their own slides, using large centered images. Both glee screenshots reveal together, stacked vertically. Filename frames appear only if an image is missing. See [assets/README.md](assets/README.md).

## Present

Open `index.html` or the GitHub Pages URL. Use browser fullscreen for the speech.

- Right Arrow, Down Arrow, Space, or Page Down: next slide.
- Left Arrow, Up Arrow, or Page Up: previous slide.
- Home / End: first / last slide.
- Previous / Next buttons also work on touch devices.

The deck contains five slides: title, Friendship Audit, Second-hand Embarrasment response, Glee responses, and key findings. All content appears immediately; there are no reveal steps. Response screenshots are vertically centered in their available body. Both glee screenshots appear together, with the interest/roast message first. URL fragments retain the current slide on refresh; old reveal fragments remain compatible.

Key findings uses two columns: sentiment text, pie, and category-only legend on the left; the user-supplied "1 in 5 respondents recommend Abhishek as a friend" stat on the right.

The 85% / 15% chart is fictional data for the joke, not an analysis of actual survey responses.

## Publish

Iterate locally first. Do not publish until the user explicitly asks. Local preview: `http://127.0.0.1:8000/` while the preview server is running.

GitHub Pages serves the `main` branch from the repository root. Committed changes to the page or screenshots are deployed automatically.

After adding screenshots:

```sh
git add assets/form.png assets/embarassment.png assets/glee.png assets/glee-2.png
git commit -m "Add WhatsApp screenshots"
git push
```
