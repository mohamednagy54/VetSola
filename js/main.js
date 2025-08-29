function openFullscreen() {
  const mainImage = document.getElementById('mainImage')
  const fullscreenModal = document.getElementById('fullscreenModal')
  const fullscreenImage = document.getElementById('fullscreenImage')

  fullscreenImage.src = mainImage.src
  fullscreenModal.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function closeFullscreen() {
  const fullscreenModal = document.getElementById('fullscreenModal')
  fullscreenModal.classList.remove('show')
  document.body.style.overflow = 'auto'
}

// Close fullscreen on Escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeFullscreen()
  }
})

function changeMainImage(imageSrc, thumbnailElement) {
  document.getElementById('mainImage').src = imageSrc
  document
    .querySelectorAll('.thumbnail')
    .forEach((thumb) => thumb.classList.remove('active'))
  thumbnailElement.classList.add('active')
}

function selectSize(element) {
  document
    .querySelectorAll('.size-option')
    .forEach((el) => el.classList.remove('selected'))
  element.classList.add('selected')
}

function showOrderForm() {
  const form = document.getElementById('orderForm')
  if (form.style.display === 'none') {
    form.style.display = 'block'
    form.scrollIntoView({ behavior: 'smooth' })
  } else {
    form.style.display = 'none'
  }
}

function showTab(tabElement, contentId) {
  // Remove active class from all tabs and content
  document
    .querySelectorAll('.tab')
    .forEach((tab) => tab.classList.remove('active'))
  document
    .querySelectorAll('.tab-content')
    .forEach((content) => content.classList.remove('active'))

  // Add active class to clicked tab and corresponding content
  tabElement.classList.add('active')
  document.getElementById(contentId).classList.add('active')
}

// Initialize thumbnails with click functionality
document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
  thumb.addEventListener('click', function () {
    document
      .querySelectorAll('.thumbnail')
      .forEach((t) => t.classList.remove('active'))
    this.classList.add('active')
  })
})

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.')
  document.getElementById('orderForm').style.display = 'none'
})
