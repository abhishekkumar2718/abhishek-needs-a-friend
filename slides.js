"use strict";

const slides = [...document.querySelectorAll(".slide")];
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const position = document.querySelector("#position");
let slideIndex = 0;
let revealStep = 0;

function lastReveal(index = slideIndex) {
  return Math.max(0, ...[...slides[index].querySelectorAll("[data-reveal]")].map((response) => Number(response.dataset.reveal)));
}

function render(animate = false) {
  slides.forEach((slide, index) => {
    slide.hidden = index !== slideIndex;
  });
  document.querySelectorAll("[data-reveal]").forEach((response) => {
    const step = Number(response.dataset.reveal);
    const visible = slides[slideIndex].contains(response) && step <= revealStep;
    response.hidden = !visible;
    response.classList.toggle("is-entering", animate && visible && step === revealStep);
  });
  previousButton.disabled = slideIndex === 0;
  nextButton.disabled = slideIndex === slides.length - 1;
  position.textContent = `${slideIndex + 1} / ${slides.length}`;
  const hash = `#${slideIndex + 1}${lastReveal() > 0 ? `/${revealStep}` : ""}`;
  history.replaceState(null, "", hash);
}

function next() {
  if (revealStep < lastReveal()) {
    revealStep += 1;
    render(true);
  } else if (slideIndex < slides.length - 1) {
    slideIndex += 1;
    revealStep = 0;
    render();
  }
}

function previous() {
  if (revealStep > 0) {
    revealStep -= 1;
  } else if (slideIndex > 0) {
    slideIndex -= 1;
    revealStep = lastReveal();
  }
  render();
}

function readHash() {
  const match = location.hash.match(/^#(\d+)(?:\/(\d+))?$/);
  const requestedSlide = match ? Number(match[1]) - 1 : 0;
  slideIndex = requestedSlide >= 0 && requestedSlide < slides.length ? requestedSlide : 0;
  revealStep = match ? Math.min(Number(match[2] || 0), lastReveal()) : 0;
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
    revealStep = 0;
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
