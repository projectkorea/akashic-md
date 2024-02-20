let startX,
    endX,
    curIdx = 0

const banner = document.querySelector('.banner')
const bigTitle = document.querySelector('.big-h1')
const title = document.querySelector('.banner .title')
const sub = document.querySelector('.banner .sub')
let slideBtn = document.querySelector('.slide-button0')
let bg = document.querySelector('.bg-0')

const content = {
    bigTitle: ['목표', '관심 분야', '기대점', '하고싶은 말', '소개'],
    slide: [0, 1, 2, 3, 4],
    title: ['프론트엔드 개발자', 'React.js', '학습 욕구', '든든한 동료 구해요', '개발자 출신 사업가'],
    sub: [
        ' 프론트엔드와 관련되 기술이슈는 한 치에 망설임도 없이 해결하는 능숙한 개발자가 되는 것이 목표입니다.',
        'React 생태계의 수 많은 라이브러리들을 프로젝트 성격에 맞춰 골라서 사용할 수 있다는 점이 참 매력적입니다.',
        '빠르진 않지만, 많은 점들을 연결 강화하며 학습중입니다.',
        '개발 지식을 함께 공유하는 수준에서 한 발짝 더 나아가 든든한 동료가 되고 싶습니다.',
        '개발자로 직무를 정한 이유는 내가 원하는 서비스를 직접 만들 수 있기 때문입니다.\n\n퀄리티 높은 접근성과 편리한 UI를 통해 사람들에게 가치 높은 서비스를 제공하고 싶은 기업을 키우고 싶다는 꿈을 갖고 있습니다.',
    ],
}

const lenSlides = content.slide.length - 1
const slideSpeed = 6000
const transitionTime = 300

// 함수 정의

const changeValue = (idx) => {
    // prev slide
    const prevBg = bg
    prevBg.style.transition = 'opacity 500ms ease'
    prevBg.classList.remove('slide-on')
    prevBg.classList.add('slide-off')
    setTimeout(() => prevBg.classList.remove(`slide-current`), transitionTime)

    // current slide
    bg = document.querySelector(`.bg-${idx}`)
    bg.style.transition = 'opacity 0s'
    bg.classList.remove('slide-off')
    bg.classList.add('slide-on')
    setTimeout(() => bg.classList.add(`slide-current`), transitionTime)

    // slide-button
    const prevBtn = slideBtn
    prevBtn.classList.remove('button-current')
    slideBtn = document.querySelector(`.slide-button${idx}`)
    slideBtn.classList.add('button-current')

    // banner-content
    bigTitle.innerText = content[`bigTitle`][idx]
    title.innerText = content[`title`][idx]
    sub.innerText = content[`sub`][idx]
}

const prevSlide = () => {
    clearInterval(autoSlide)
    if (curIdx <= 0) {
        changeValue(lenSlides)
        curIdx = lenSlides
    } else {
        changeValue(curIdx - 1)
        curIdx -= 1
    }
    autoSlide = setInterval(nextSlide, slideSpeed)
}

const nextSlide = () => {
    clearInterval(autoSlide)
    if (curIdx >= lenSlides) {
        changeValue(0)
        curIdx = 0
    } else {
        changeValue(curIdx + 1)
        curIdx += 1
    }
    autoSlide = setInterval(nextSlide, slideSpeed)
}

const touchStart = (event) => {
    startX = event.touches[0].pageX
}

const touchEnd = (event) => {
    endX = event.changedTouches[0].pageX
    swipe()
}

const swipe = () => {
    if (startX > endX + 20) {
        prevSlide()
    } else if (startX + 20 < endX) {
        nextSlide()
    }
}

const init = () => {
    banner.addEventListener('touchstart', touchStart)
    banner.addEventListener('touchend', touchEnd)
}

// 함수 실행

init()
let autoSlide = setInterval(nextSlide, slideSpeed)

// button

const navBtn = document.querySelector('.nav-btn-mobile')
const navDropdown = document.querySelector('.nav-menu-mobile')

const navBtn1 = document.querySelector('.menu-button-01')
const navBtn2 = document.querySelector('.menu-button-02')
const navBtn3 = document.querySelector('.menu-button-03')
const navBtn4 = document.querySelector('.menu-button-04')
const navBtn5 = document.querySelector('.menu-button-05')

navBtn1.addEventListener('click', () => {
    calcMoveSlide(0)
})

navBtn2.addEventListener('click', () => {
    calcMoveSlide(1)
})

navBtn3.addEventListener('click', () => {
    calcMoveSlide(2)
})

navBtn4.addEventListener('click', () => {
    calcMoveSlide(3)
})

navBtn5.addEventListener('click', () => {
    calcMoveSlide(4)
})

// slide button 작동
const slideBtn1 = document.querySelector('.slide-button0')
const slideBtn2 = document.querySelector('.slide-button1')
const slideBtn3 = document.querySelector('.slide-button2')
const slideBtn4 = document.querySelector('.slide-button3')
const slideBtn5 = document.querySelector('.slide-button4')

slideBtn1.addEventListener('click', () => {
    calcMoveSlide(0)
})

slideBtn2.addEventListener('click', () => {
    calcMoveSlide(1)
})

slideBtn3.addEventListener('click', () => {
    calcMoveSlide(2)
})

slideBtn4.addEventListener('click', () => {
    calcMoveSlide(3)
})

slideBtn5.addEventListener('click', () => {
    calcMoveSlide(4)
})

// slide button 끝
const navButtonInit = () => {
    const navBtn1 = document.querySelector('.mobile-menu-button-01')
    const navBtn2 = document.querySelector('.mobile-menu-button-02')
    const navBtn3 = document.querySelector('.mobile-menu-button-03')
    const navBtn4 = document.querySelector('.mobile-menu-button-04')
    const navBtn5 = document.querySelector('.mobile-menu-button-05')
    navBtn1.addEventListener('click', () => {
        calcMoveSlide(0)
    })

    navBtn2.addEventListener('click', () => {
        calcMoveSlide(1)
    })

    navBtn3.addEventListener('click', () => {
        calcMoveSlide(2)
    })

    navBtn4.addEventListener('click', () => {
        calcMoveSlide(3)
    })

    navBtn5.addEventListener('click', () => {
        calcMoveSlide(4)
    })
}

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('close')
    navDropdown.classList.toggle('act')
    navButtonInit()
})

const calcMoveSlide = (toIdx) => {
    navBtn.classList.remove('close')
    navDropdown.classList.remove('act')
    while (curIdx !== toIdx) {
        if (curIdx > toIdx) {
            prevSlide()
        } else if (curIdx < toIdx) {
            nextSlide()
        }
    }
}

navButtonInit()
