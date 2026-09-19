# Abhishek Needs a Friend: Survey Responses

A tiny, dark-themed speech slide deck. Plain HTML, CSS, and JavaScript; no dependencies or build step.

## Screenshots

All four supplied screenshots are included: `assets/form.png`, `assets/embarassment.png`, `assets/glee.png`, and `assets/glee-2.png`. Embarrassment and glee have their own slides, using large centered images. Both glee screenshots appear together, stacked vertically. Filename frames appear only if an image is missing. See [assets/README.md](assets/README.md).

## Present

Open `index.html` or the GitHub Pages URL. Use browser fullscreen for the speech.

- Right Arrow, Down Arrow, Space, or Page Down: next slide.
- Left Arrow, Up Arrow, or Page Up: previous slide.
- Home / End: first / last slide.
- Previous / Next buttons also work on touch devices.

The deck contains eight slides: title, Friendship Survey, Acquisition Funnel, Embarrassment response, Glee responses, Feedback Sentiment, Key Feedback, and Net Promoter Score. The funnel uses percentages rather than disclosing the sample size. The embarrassment title appears first; the next advance reveals its screenshot and caption. All other slide content appears immediately. Response screenshots are vertically centered in their available body. Both glee screenshots appear together, with the interest/roast message first. URL fragments retain the current slide and reveal step on refresh.

Feedback Sentiment centers the pie and category-only legend. Key Feedback uses conventional left-aligned bullet lists: "Friendship", "Reading the room", and "Sense of humor" on the left; "Available" under Strengths on the right. Net Promoter Score centers the user-supplied "1 in 5 respondents recommend Abhishek as a friend" stat.

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
