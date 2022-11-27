const body = document.querySelector('body');
const IMG_NUMBER = 8;

function loadBG() {
    const imgNumber = Math.ceil(Math.random() * IMG_NUMBER);
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    console.log(imgNumber);
}

function init() {
    loadBG();
    setInterval(loadBG, 20000);
}

init();
