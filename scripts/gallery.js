document.querySelectorAll('.gallery').forEach((gallery) => {
  Gallery(gallery);
})

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }

  const images = Array.from(gallery.querySelectorAll('.gallery-image-sm img'));
  const galleryModal = gallery.querySelector('.popup-image')
  const prevButton = gallery.querySelector('.prev-button')
  const nextButton = gallery.querySelector('.next-button')
  const galleryLength = images.length;
  const closeButton = gallery.querySelector('.close-dialog');
  let currentIndex;

  images.forEach(image => {
    image.onclick = () => {
      updateImage(image);
      galleryModal.showModal();
    }
  })

  prevButton.addEventListener('click', () => {
    showPreviousImage()
  })

  nextButton.addEventListener('click', function () {
    showNextImage()
  })

  closeButton.addEventListener('click', function () {
    galleryModal.close();
  });

  function showPreviousImage() {
    updateImage(currentIndex - 1 >= 0 ? images[currentIndex - 1] : images[galleryLength - 1])
  }

  function showNextImage() {
    updateImage(currentIndex + 1 <= galleryLength - 1 ? images[currentIndex + 1] : images[0])
  }

  function updateImage(imageElement) {
    if (!imageElement) {
      console.info("No image to show");
      return;
    }

    galleryModal.querySelector('img').src = imageElement.src;
    galleryModal.querySelector('img').alt = imageElement.alt;
    currentIndex = images.findIndex((element) => element === imageElement);
  }
}