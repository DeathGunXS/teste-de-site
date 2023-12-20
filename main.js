const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('header .searching .tag')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showImage(index) {
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  showImage(currentIndex);
}

setInterval(nextImage, 3000);