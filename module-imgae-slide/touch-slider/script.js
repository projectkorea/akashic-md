let curIdx = 0;
let startX, endX;

const images = document.querySelector('.images');
const slides = [
  'https://upload.wikimedia.org/wikipedia/commons/9/98/Number_zero.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/25/MetroDF_Linea_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f7/MetroDF_Linea_2.jpg',
  'https://images.squarespace-cdn.com/content/v1/55a8d6f7e4b054bcba8dfc63/1513098796540-4U9D4OZ9DDP5EXZMBW4S/3.jpg',
];
const lenSlides = slides.length - 1;

function prev() {
  if (curIdx <= 0) {
    images.style.backgroundImage = `url("${slides[lenSlides]}")`;
    curIdx = lenSlides;
  } else {
    images.style.backgroundImage = `url("${slides[curIdx - 1]}")`;
    curIdx -= 1;
  }
}
function next() {
  if (curIdx >= lenSlides) {
    images.style.backgroundImage = `url("${slides[0]}")`;
    curIdx = 0;
  } else {
    images.style.backgroundImage = `url("${slides[curIdx + 1]}")`;
    curIdx += 1;
  }
}

function touch_start(event) {
  startX = event.touches[0].pageX;
}

function touch_end(event) {
  endX = event.changedTouches[0].pageX;
  if (startX > endX) {
    next();
  } else {
    prev();
  }
}

images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);
images.style.backgroundImage = `url("${slides[0]}"`;
