document.querySelectorAll('.gallery-image-sm img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.gallery-image-sm img').classList.add('active')
    document.querySelector('.popup-image').style.display = 'block'
    document.querySelector('.popup-image img').src = image.getAttribute('src')
  }
})

document.querySelector('.popup-image').onclick = (event) => {
  if (event.target === document.querySelector('.popup-image')) {
    document.querySelector('.popup-image').style.display = 'none'
  }
}

const galleryLength = document.querySelectorAll('.col-4-md')
const images = document.querySelectorAll('.gallery-image-sm img')
const gallery = document.querySelector('#gallery-bg')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

let currentIndex = 0
console.log(currentIndex)
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
  const img = gallery.querySelector('#current-image')
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