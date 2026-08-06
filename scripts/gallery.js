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

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    lightboxImage.src = this.src;

    lightboxImage.alt = this.alt;

    lightboxTitle.textContent = this.dataset.title;

    lightboxDescription.textContent = this.dataset.description;

    lightbox.classList.add("is-active");
  });
});

/* Close button */
const closeButton = document.querySelector(".gallery__close");

closeButton.addEventListener("click", function () {
  lightbox.classList.remove("is-active");
});
