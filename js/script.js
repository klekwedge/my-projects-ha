"use strict";

const sliderWrapper = document.querySelector(".slider__wrapper");
const sliderList = document.querySelector(".slider__list");

const sliderButtonPrev = document.querySelector(".slider__button--prev");
const sliderButtonNext = document.querySelector(".slider__button--next");

const sliderItem = document.querySelectorAll(".slider__item");
let numberElementsInWrapper = sliderItem.length / 5 - 1;

let currentSlide = 0;

console.log(
  window.getComputedStyle(sliderWrapper).paddingLeft.match(/\d/g).join("")
);

sliderButtonPrev.addEventListener("click", () => {
  const bias =
    window.getComputedStyle(sliderWrapper).width.match(/\d/g).join("") -
    window.getComputedStyle(sliderWrapper).paddingLeft.match(/\d/g).join("");

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = numberElementsInWrapper;

    sliderList.style.transform = `translate(-${bias * currentSlide}px,0%)`;
  } else {
    sliderList.style.transform = `translate(-${bias * currentSlide}px,0%)`;
    console.log(sliderList.style.transform);
  }
});

sliderButtonNext.addEventListener("click", () => {
  const bias =
    window.getComputedStyle(sliderWrapper).width.match(/\d/g).join("") -
    window.getComputedStyle(sliderWrapper).paddingLeft.match(/\d/g).join("");

  currentSlide++;

  if (currentSlide > numberElementsInWrapper) {
    currentSlide = 0;
    sliderList.style.transform = `translate(${bias * currentSlide}px,0%)`;
  } else {
    sliderList.style.transform = `translate(-${bias * currentSlide}px,0%)`;
  }
});
