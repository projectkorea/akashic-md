// 변수 선언
const Slider = function (element, config) {
  this.length =
    element.childElementCount - 1 > 0
      ? element.childElementCount
      : config.length
  this.curIdx = 0
  this.curSlide = null

  // config
  this.slideWidth = 300
  this.slideSpeed = 300

  // Mobile
  if (config.isMobile) {
    this.startX = 0
    this.endX = 0
  }

  // init
  element.style.width = this.slideWidth * (this.length + 2) + 'px'
  let firstNode = slideList.firstElementChild.cloneNode(true)
  let lastNode = slideList.lastElementChild.cloneNode(true)
  slideList.appendChild(firstNode)
  slideList.insertBefore(lastNode, slideList.firstElementChild)

  const slideBtnNext = document.querySelector('.slide-btn-next')
  const slideBtnPrev = document.querySelector('.slide-btn-prev')
  const pagination = document.querySelector('.slide-pagination')
}

Slider.prototype.init = function () {
  const moveSlide = () => {
    if (curIndex <= slideLen - 1) {
      slideList.style.transition = slideSpeed + 'ms'
      slideList.style.transform =
        'translate3d(-' + slideWidth * (curIndex + 2) + 'px, 0px, 0px)'
    }
    if (curIndex === slideLen - 1) {
      setTimeout(function () {
        slideList.style.transition = '0ms'
        slideList.style.transform =
          'translate3d(-' + slideWidth + 'px, 0px, 0px)'
      }, slideSpeed)
      curIndex = -1
    }
    curSlide = slides[++curIndex]
  }
  // startSlide
  setInterval(moveSlide, 2000)
  slideBtnNext.addEventListener('click', moveSlide)
  loadSlides(slides)
}

export default Slider

/*******************************************
 *
 * 모바일
 *
 *******************************************/

function prev() {
  if (curIdx <= 0) {
    // 슬라이드 끝 보여주기
    curIdx = lenSlides
  } else {
    // 현재 인데스 -1 슬라이드 보여주기
  }
}
function next() {
  if (curIdx >= lenSlides) {
    // 슬라이드 처음 보여주기
    curIdx = 0
  } else {
    // 현재 인데스 +1 슬라이드 보여주기
  }
}

function touch_start(event) {
  startX = event.touches[0].pageX
}

function touch_end(event) {
  endX = event.changedTouches[0].pageX
  startX > endX ? next() : prev()
}

images.addEventListener('touchstart', touch_start)
images.addEventListener('touchend', touch_end)
images.style.backgroundImage = `url("${slides[0]}"`
