---
name: Abhishek Needs a Friend
description: A minimal dark speech-slide system.
colors:
  stage: "#141414"
  text: "#f2f2f2"
  muted: "#b0b0b0"
  negative: "#c76565"
  positive: "#7ea897"
  control-hover: "#fff"
typography:
  display:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(36px, 5.6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.18
  title:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(27px, 3.4vw, 48px)"
    fontWeight: 600
    lineHeight: 1.18
  response-label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(22px, 2.4vw, 34px)"
    fontWeight: 400
    lineHeight: 1.18
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(18px, 2vw, 28px)"
    fontWeight: 400
  label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 400
rounded:
  pie: "50%"
spacing:
  compact: "12px"
  medium: "16px"
  open: "24px"
components:
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "{spacing.compact}"
  button-quiet-hover:
    textColor: "{colors.control-hover}"
  pie:
    rounded: "{rounded.pie}"
    width: "min(48vh, 60vw, 450px)"
---

# Design System: Abhishek Needs a Friend

## Overview

**Creative North Star: "The Quiet Speech Stage"**

The deck is a quiet, full-screen stage for a spoken presentation. Near-black surfaces, light system type, and open space keep attention on the supplied words and message screenshots.

Its visual language is deliberately flat and unobstructive. Screenshots remain complete rather than becoming decorative crops; presenter controls stay secondary at the bottom. This document records the built HTML/CSS system, not an expanded brand.

**Key Characteristics:**

- Dark, text-led slides.
- Uncropped evidence screenshots.
- Flat shapes and restrained semantic color.
- Presenter-controlled reveals.

## Colors

A neutral dark field carries the content; muted red and green communicate the chart's negative and positive categories without becoming a general accent scheme.

### Primary

- **Muted Negative Red:** negative chart segment and matching legend swatch.
- **Muted Positive Green:** positive chart segment and matching legend swatch.

### Neutral

- **Near-Black Stage:** every slide's background.
- **Soft Light Text:** slide headings, content, selection background, and keyboard-focus outline.
- **Muted Gray:** navigation and missing-image filename.
- **Bright Control Hover:** hovered navigation text only.

**The Content-First Rule.** Color supports readable content and chart meaning; it does not decorate slide surfaces.

## Typography

All text uses the system sans-serif stack in the frontmatter. There are no downloaded fonts or separate display family. Headings use balanced wrapping.

- **Display:** centered title slide, capped at an 18-character measure.
- **Title:** top-centered headings on subsequent slides.
- **Response label:** regular-weight emotion labels, centered above each screenshot group. At widths of 600px or less, size is 24px.
- **Body:** chart legend, with text labels rather than color alone.
- **Label:** small presenter controls and missing-image filename. Slide position uses tabular numerals.

## Layout

Each slide occupies the viewport (100vh with 100dvh override), using a vertical flex layout and overflow scrolling when necessary. Padding is fluid: clamp(24px, 5vw, 72px) at the top, clamp(20px, 6vw, 90px) horizontally, and 70px at the bottom to leave room for controls. The opening title is centered both ways; subsequent headings stay at the top center.

The body grows into the remaining space with a fluid top gap (clamp(24px, 4vh, 48px)). Form evidence is centered with a maximum image width of 760px. Images use contain sizing and are not cropped.

Embarrassment and glee occupy separate slides. Each uses a centered emotion label and screenshot group up to 1100px wide, replacing the old half-width spectrum layout for projector readability. Glee holds two screenshots stacked vertically with a 24px gap. Response spacing reduces from 28px to 16px at widths of 600px or less.

The "Key findings" title is followed by a centered sentiment-analysis point in clamp(20px, 2.1vw, 30px) type. The chart is centered above a wrapping horizontal legend with category names only. Its diameter is min(48vh, 60vw, 450px). At viewport heights of 500px or less, top padding and body spacing shrink, and the chart uses min(40vh, 40vw).

## Elevation & Depth

The system is flat: no shadows, gradients for material, floating cards, or layered panels. Whitespace separates content. The chart's conic gradient encodes data only, not depth.

## Shapes

Screenshots retain their original rectangular bounds without added rounding or borders. Chart swatches are square (16px); the pie is circular. Controls are plain text on transparent backgrounds. Missing evidence uses a dashed rectangular border, not a decorative card.

## Components

### Quiet navigation

Previous and Next flank a small slide count, fixed at the bottom center (12px from the edge). Buttons have no border, transparent backgrounds, and 12px padding. Hover brightens text; disabled controls use 0.35 opacity. Keyboard focus has a light 2px outline with 2px offset. Native button activation remains intact.

### Screenshot evidence

Figures have no margins or decoration. Images are block-level, constrained to their available width and height, and use object-fit: contain. All four user-supplied screenshots are present. If an image cannot load, its filename appears in a dashed fallback slot.

### Spectrum reveal

Each response slide's title appears first; its emotion and screenshots appear on the next presenter action. Both glee screenshots reveal together. Newly revealed content fades in with a small upward settling motion (240ms ease-out, 8px travel). Reduced-motion preference disables that animation. Previous reverses the reveal before changing slides.

### Pie and legend

The circular chart uses an 85% negative segment and a 15% positive segment. The legend uses square color swatches and the labels "negative" and "positive", without numbers. Its fictional values are presentation content, not reusable visual-system defaults.

## Do's and Don'ts

### Do:

- Do preserve the supplied copy exactly.
- Do keep screenshot bodies uncropped with contain sizing.
- Do retain quiet bottom controls and a visible keyboard-focus outline.
- Do preserve the separate response slides, large centered images, and presenter-controlled reveal order.

### Don't:

- Don't add decorative imagery, extra jokes, marketing copy, or ornamental chrome.
- Don't turn navigation into a dominant call to action.
- Don't introduce custom fonts, shadows, or card treatments absent from the deck.
- Don't fabricate or replace user-supplied screenshots.
