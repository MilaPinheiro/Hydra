
function menuShow() {

  let menuMobile = document.querySelector('.mobile-menu');

  if (menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src="./assests/responsivo/hamburguer-button.svg";
  }

  else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src="./assests/responsivo/close.svg";
  }
}


const carouselWrapper = document.querySelector('.sectionThree-container-divTwo');
const carouselCards = document.querySelectorAll('.sectionThree-container-divTwo-card');
const prevBtn = document.querySelector('.sectionOneTwo-prev-btn');
const nextBtn = document.querySelector('.sectionOneTwo-next-btn');

let currentSlide = 0;

function showSlide(slideIndex) {
  carouselWrapper.style.transform = `translateX(-${slideIndex * 332}px)`; // 332 é a largura do slide (300 + 32 de margem)
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
    
  }
}

function nextSlide() {
  if (currentSlide < carouselCards.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
 
}



const carousel = document.querySelector('.sectionFive-container-component-divTwo-ellipse');
const carouselCard = document.querySelectorAll('.sectionFive-container-component-divTwo-ellipse-divOne');
const prevBtn1 = document.querySelector('.sectionOneTwo-prev-btn');
const nextBtn2 = document.querySelector('.sectionOneTwo-next-btn');

let currentCard = 0;

function showCard(slideIndex) {
  carousel.style.transform = `translateX(-${slideIndex * 260}px)`; // é a largura do slide 
}

function prevCard() {
  if (currentCard > 0) {
    currentCard--;
    showCard(currentCard);
    
  }
}

function nextCard() {
  if (currentCard < carouselCard.length - 1) {
    currentCard++;
    showCard(currentCard);
  }
  
}



