document.querySelectorAll('.gallery').forEach((gallery) => {
  Gallery(gallery);
})

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No gallery found');
  }

  console.log(gallery);

  const images = gallery.querySelectorAll('.gallery-image-sm img');
  const galleryModal = gallery.querySelector('.popup-image')
  const prevButton = gallery.querySelector('.prev-button')
  const nextButton = gallery.querySelector('.next-button')
  let currentIndex = 0

  images.forEach(image => {
    image.onclick = () => {
      const popupImage = document.querySelector('.popup-image img');

      document.querySelector('.gallery-image-sm img').classList.add('active')
      galleryModal.showModal();
      // document.querySelector('.popup-image').style.display = 'block'
      popupImage.src = image.getAttribute('src')
      popupImage.alt = image.getAttribute('alt');
    }
  })

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 + images.length) % images.length
    updateImage()
  })

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length
    console.log(currentIndex)
    updateImage()
  })

  function updateImage () {
    const img = gallery.querySelector('.current-image')
    img.classList.add('fade-out')
    img.classList.add('active')
    if (img.classList.contains('active')) {
      setTimeout(() => {
        img.src = images[currentIndex].src
        img.alt = images[currentIndex].alt
        img.classList.remove('fade-out')
      }, 50)
    }
  }
}