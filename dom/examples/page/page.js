/*지시사항을 따라 작성해주세요*/
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var pageCount = document.getElementsByClassName('page-count')[0];
var count = 1;

function prevBtnOnclick() {
  if (pageCount.textContent === '1') {
    alert('시작 페이지입니다.');
  } else {
    count--;
    pageCount.textContent = count;
  }
}

function nextBtnOnclick() {
  if (pageCount.textContent === '7') {
    alert('마지막 페이지입니다.');
  } else {
    count++;
    pageCount.textContent = count;
  }
}

prev.addEventListener('click', prevBtnOnclick);
next.addEventListener('click', nextBtnOnclick);
