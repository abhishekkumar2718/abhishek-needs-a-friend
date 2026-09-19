"use strict";

document.documentElement.classList.add("js");

const slides = [...document.querySelectorAll(".slide")];
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const position = document.querySelector("#position");
let slideIndex = 0;
let revealStep = 0;

function revealStepsFor(index) {
  return Number(slides[index]?.dataset.revealSteps || 0);
}

function render() {
  slides.forEach((slide, index) => {
    slide.hidden = index !== slideIndex;
    const revealItem = slide.querySelector("[data-reveal-item]");
    const isRevealed = index !== slideIndex || revealStep > 0;
    slide.classList.toggle("is-revealed", isRevealed);
    if (revealItem) revealItem.setAttribute("aria-hidden", String(!isRevealed));
  });
  previousButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slides.length - 1 && revealStep >= revealStepsFor(slideIndex);
  position.textContent = `${slideIndex + 1} / ${slides.length}`;
  const hash = `#${slideIndex + 1}${revealStep ? `/${revealStep}` : ""}`;
  history.replaceState(null, "", hash);
}

function next() {
  if (revealStep < revealStepsFor(slideIndex)) {
    revealStep += 1;
    render();
    return;
  }
  if (slideIndex < slides.length - 1) {
    slideIndex += 1;
    revealStep = 0;
    render();
  }
}

function previous() {
  if (revealStep > 0) {
    revealStep -= 1;
    render();
    return;
  }
  if (slideIndex > 0) {
    slideIndex -= 1;
    revealStep = revealStepsFor(slideIndex);
  }
  render();
}

function readHash() {
  const match = location.hash.match(/^#(\d+)(?:\/(\d+))?$/);
  const requestedSlide = match ? Number(match[1]) - 1 : 0;
  slideIndex = requestedSlide >= 0 && requestedSlide < slides.length ? requestedSlide : 0;
  const requestedStep = match?.[2] ? Number(match[2]) : 0;
  revealStep = Math.min(Math.max(requestedStep, 0), revealStepsFor(slideIndex));
  render();
}

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);
window.addEventListener("hashchange", readHash);
window.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  // Space and Enter on focused buttons retain their native activation behavior.
  if (event.target.closest("button") && [" ", "Enter"].includes(event.key)) return;
  if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(event.key)) {
    event.preventDefault();
    next();
  } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
    event.preventDefault();
    previous();
  } else if (event.key === "Home") {
    event.preventDefault();
    slideIndex = 0;
    revealStep = 0;
    render();
  } else if (event.key === "End") {
    event.preventDefault();
    slideIndex = slides.length - 1;
    revealStep = revealStepsFor(slideIndex);
    render();
  }
});

document.querySelectorAll(".screenshot img").forEach((image) => {
  const showMissing = () => {
    image.hidden = true;
    image.nextElementSibling.hidden = false;
  };
  image.addEventListener("error", showMissing);
  if (image.complete && image.naturalWidth === 0) showMissing();
});

readHash();
