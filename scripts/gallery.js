/*
----------------------------------------
Gallery Component

Version: 1.0

Purpose:

Open lightbox and display selected image.

----------------------------------------
*/

const galleryImages = Array.from(document.querySelectorAll(".gallery__image"));

const lightbox = document.querySelector(".gallery__lightbox");

const lightboxImage = document.querySelector(".gallery__lightbox-image");

const lightboxTitle = document.querySelector(".gallery__lightbox-title");

const lightboxDescription = document.querySelector(
  ".gallery__lightbox-description",
);

let currentIndex = 0;

function showImage(index) {
  const image = galleryImages[index];

  lightboxImage.src = image.src;

  lightboxImage.alt = image.alt;

  lightboxTitle.textContent = image.dataset.title;

  lightboxDescription.textContent = image.dataset.description;

  currentIndex = index;
}

galleryImages.forEach(function (image, index) {
  image.addEventListener("click", function () {
    showImage(index);

    lightbox.classList.add("is-active");
  });
});

/* Close button */
const closeButton = document.querySelector(".gallery__close");

closeButton.addEventListener("click", function () {
  lightbox.classList.remove("is-active");
});

/* Next button*/
const nextButton = document.querySelector(".gallery__next");

nextButton.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
});

/* Previous button */
const previousButton = document.querySelector(".gallery__previous");

previousButton.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }

  showImage(currentIndex);
});

/* keyboard functionality */
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("is-active")) {
    return;
  }

  switch (event.key) {
    case "Escape":
      lightbox.classList.remove("is-active");

      break;

    case "ArrowRight":
      // acts like someone has clicked the button.
      nextButton.click();

      break;

    case "ArrowLeft":
      // acts like someone has clicked the button.
      previousButton.click();

      break;
  }
});
