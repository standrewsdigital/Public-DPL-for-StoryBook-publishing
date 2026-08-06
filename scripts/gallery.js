/*
----------------------------------------
Gallery Lightbox

Purpose:

1. Open lightbox
2. Display selected image
3. Display title/description
4. Close lightbox

----------------------------------------
*/
console.log("Gallery JS loaded");
const galleryImages = document.querySelectorAll(".gallery__image");

console.log(galleryImages);

const lightbox = document.querySelector(".gallery__lightbox");
console.log(lightbox);

const lightboxImage = document.querySelector(".gallery__lightbox-image");

const lightboxTitle = document.querySelector(".gallery__lightbox-title");

const lightboxDescription = document.querySelector(
  ".gallery__lightbox-description",
);

galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {

    console.log("Image clicked");
    lightboxImage.src = this.src;

    lightboxImage.alt = this.alt;

    lightboxTitle.textContent = this.dataset.title;

    lightboxDescription.textContent = this.dataset.description;

    lightbox.classList.add("is-active");
  });
});





// galleryImages.forEach(function(image){

//     image.addEventListener(
//         "click",
//         function(){

//             console.log("Image clicked");

//         }
//     );

// });

/* close button */

const closeButton = document.querySelector(".gallery__close");

closeButton.addEventListener("click", function () {
  lightbox.classList.remove("is-active");
});
