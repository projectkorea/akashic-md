// 변수 선언

const slides = ['flower', 'fox', 'space', 'lightning', 'moon', 'nature'];
const slider = document.querySelector('.slider');
const slideList = document.querySelector('.slider ul');

const slideBtnNext = document.querySelector('.slide-btn-next');
const slideBtnPrev = document.querySelector('.slide-btn-prev');
const pagination = document.querySelector('.slide-pagination');

const slideLen = slides.length;
const slideWidth = 300;
const slideSpeed = 300;
slideList.style.width = slideWidth * (slideLen + 2) + 'px';

let curIndex = 0;
let curSlide = slides[curIndex];

// 함수 선언

const loadSlides = (slides) => {
  slides.forEach((slide) => {
    addSlide(slide);
  });
};

const addSlide = (slide) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', `./assets/slides/${slide}.jpg`);
  li.appendChild(img);
  slideList.appendChild(li);
};

const moveSlide = () => {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform =
      'translate3d(-' + slideWidth * (curIndex + 2) + 'px, 0px, 0px)';
  }
  if (curIndex === slideLen - 1) {
    setTimeout(function () {
      slideList.style.transition = '0ms';
      slideList.style.transform =
        'translate3d(-' + slideWidth + 'px, 0px, 0px)';
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide = slides[++curIndex];
};

// 함수 실행

setInterval(moveSlide, 2000);
slideBtnNext.addEventListener('click', moveSlide);
loadSlides(slides);

let clonedFirst = slideList.firstElementChild.cloneNode(true);
let clonedLast = slideList.lastElementChild.cloneNode(true);
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
