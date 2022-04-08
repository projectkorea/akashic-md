function setup() {
  const rating = document.querySelector('#rating');
  function getNumber(e) {
    const children = document.getElementsByTagName('span');
    for (i in children) {
      // i는 문자열로 이루어진 숫자가 들어가기 때문에 숫자로 변환해야한다.
      if (children[i] == e.target) {
        return parseInt(i);
      }
    }
  }

  function paintStar(num) {
    for (let i = 4; i > num - 1; i--) {
      document.getElementsByTagName('span')[i].classList.remove('active');
    }

    for (let i = 0; i < num + 1; i++) {
      document.getElementsByTagName('span')[i].classList.add('active');
    }
  }

  function handleClick(e) {
    const num = getNumber(e);
    paintStar(num);
  }

  rating.addEventListener('click', handleClick);
}

setup();
