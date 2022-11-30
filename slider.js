// 변수 선언
const Slider = function (element, config) {
  this.length =
    element.childElementCount - 1 > 0
      ? element.childElementCount + 2
      : config.length + 2
  this.curIdx = 0
  this.curSlide = null
  this.element = element
  this.slideWidth = 300
  this.slideSpeed = 300
  if (config.isMobile) {
    this.startX = 0
    this.endX = 0
  }
}

Slider.prototype.init = function () {
  var self = this;

  element.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
  element.style.left = -(slideWidth + slideMargin) + 'px';
  element.style.width = this.slideWidth * (this.length + 2) + 'px'
  let firstNode = slideList.firstElementChild.cloneNode(true)
  let lastNode = slideList.lastElementChild.cloneNode(true)
  slideList.appendChild(firstNode)
  slideList.insertBefore(lastNode, slideList.firstElementChild)
  
  // addEventListener
  if (config.isMobile) {
    function touch_start(e) {
      startX = e.touches[0].pageX
    }
    function touch_end(e) {
      endX = e.changedTouches[0].pageX
      startX > endX ? self.next() : self.prev()
    }
    this.element.addEventListener('touchstart', touch_start)
    this.element.addEventListener('touchend', touch_end)
  }

  const slideBtnNext = document.querySelector('.slide-btn-next')
  const slideBtnPrev = document.querySelector('.slide-btn-prev')
  const pagination = document.querySelector('.slide-pagination')
  // start slide
  setInterval(moveSlide, 2000)
  slideBtnNext.addEventListener('click', moveSlide)
}

Slider.prototype.next = function () {
    if (curIndex <= this.length - 1) {
      slideList.style.transition = slideSpeed + 'ms'
      slideList.style.transform =
        'translate3d(-' + slideWidth * (curIndex + 2) + 'px, 0px, 0px)'
    }
    if (curIndex === this.length - 1) {
      setTimeout(function () {
        slideList.style.transition = '0ms'
        slideList.style.transform =
          'translate3d(-' + slideWidth + 'px, 0px, 0px)'
      }, slideSpeed)
      curIndex = -1
    }
  curSlide = slides[++curIndex]
  
}

Slider.prototype.prev = function () {
  prev.addEventListener('click', function () {
    if (currentIdx >= 0) {
      slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0.5}s ease-out`;
    }
    if (currentIdx === 0) {
      setTimeout(function () {
        slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
        slides.style.transition = `${0}s ease-out`;
      }, 500);
      currentIdx = slideCount;
    }
    currentIdx -= 1;
  });
}

export default Slider

// 왼쪽 오른쪽 다른 로직
next.addEventListener('click', function () {
  if (currentIdx <= slideCount - 1) {
    slides.style.left = -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
    slides.style.transition = `${0.5}s ease-out`;
  }
  if (currentIdx === slideCount - 1) {
    setTimeout(function () {
      slides.style.left = -(slideWidth + slideMargin) + 'px';
      slides.style.transition = `${0}s ease-out`;
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
});

