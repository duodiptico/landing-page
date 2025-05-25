let currentIndex = 0;
let autoSlide = true;
let slideInterval;
const intervalTime = 15000;

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function initSlider() {
  showSlide(currentIndex);
  slideInterval = setInterval(() => {
    if (autoSlide) nextSlide();
  }, intervalTime);

  nextBtn.addEventListener('click', () => {
    autoSlide = false;
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    autoSlide = false;
    prevSlide();
  });
}

function onYouTubeIframeAPIReady() {
  const players = document.querySelectorAll('.yt-player');
  players.forEach((iframe) => {
    new YT.Player(iframe, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) autoSlide = false;
          if (event.data === YT.PlayerState.ENDED) autoSlide = true;
        },
      },
    });
  });
}

const photoSlides = document.querySelectorAll('.photo-slide');
const prevPhotoBtn = document.querySelector('.prev-photo');
const nextPhotoBtn = document.querySelector('.next-photo');
let photoIndex = 0;
let autoPhotoSlide = true;

function showPhoto(index) {
  photoSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevPhotoBtn?.addEventListener('click', () => {
  autoPhotoSlide = false;
  photoIndex = (photoIndex - 1 + photoSlides.length) % photoSlides.length;
  showPhoto(photoIndex);
});

nextPhotoBtn?.addEventListener('click', () => {
  autoPhotoSlide = false;
  photoIndex = (photoIndex + 1) % photoSlides.length;
  showPhoto(photoIndex);
});

function startPhotoSlider() {
    showPhoto(photoIndex);
    setInterval(function () {
  photoIndex = (photoIndex + 1) % photoSlides.length;
  showPhoto(photoIndex);
}, 7000);
  }

  startPhotoSlider();

// Cargar API de YouTube y lanzar el slider
window.onload = initSlider;
