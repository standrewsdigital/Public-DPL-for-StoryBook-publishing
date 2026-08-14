/*
----------------------------------------
Gallery Component

Version: 1.0

Purpose:

Open lightbox and display selected image.

----------------------------------------
*/

/* Variables */

const galleryImages = Array.from(document.querySelectorAll(".gallery__image"));

const lightbox = document.querySelector(".gallery__lightbox");

const lightboxImage = document.querySelector(".gallery__lightbox-image");

const lightboxCaption = document.querySelector(".gallery__lightbox-caption");

const lightboxPanel = document.querySelector(".gallery__panel");

const lightboxCount = document.querySelector(".gallery__lightbox-count");

/*----------------------------------------------------------------*/

/**
 * Functions
 */

let currentIndex = 0;

let previousFocusElement = null;

function showImage(index) {
  const image = galleryImages[index];

  lightboxImage.src = image.src;

  lightboxImage.alt = image.alt;

  lightboxCaption.textContent = image.dataset.caption;

  currentIndex = index;

  lightboxCount.textContent = `${index + 1} of ${galleryImages.length}`;
}

function openLightbox(index) {
  previousFocusElement = galleryImages[index].closest(".gallery__item");

  showImage(index);

  lightbox.classList.add("is-active");

  document.body.classList.add("no-scroll");

  closeButton.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-active");

  document.body.classList.remove("no-scroll");

  if (previousFocusElement) {
    previousFocusElement.focus();
  }
}

function nextImage() {
  currentIndex++;

  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
}

function previousImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }

  showImage(currentIndex);
}

/**
 * loop images */

galleryImages.forEach(function (image, index) {
  const galleryItem = image.closest(".gallery__item");

  galleryItem.addEventListener("click", function () {
    openLightbox(index);
  });
});

/* Close button */
const closeButton = document.querySelector(".gallery__close");
closeButton.addEventListener("click", closeLightbox);

/* Next button*/
const nextButton = document.querySelector(".gallery__next");
nextButton.addEventListener("click", nextImage);

/* Previous button */
const previousButton = document.querySelector(".gallery__previous");
previousButton.addEventListener("click", previousImage);

const focusableElements = [closeButton, previousButton, nextButton];

/* keyboard functionality */
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("is-active")) {
    return;
  }

  if (event.key === "Tab") {
    const firstElement = focusableElements[0];

    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();

      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();

      firstElement.focus();
    }
  }

  switch (event.key) {
    case "Escape":
      closeLightbox();
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

/**
 * Close-on-background-click
 */
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/*
  No scroll 
*/
