var blockOne = document.getElementById('red');
var blockTwo = document.getElementById('yellow');
var blockThree = document.getElementById('green');

document.body.addEventListener('mouseover', function (e) {
  e.target.classList.add(e.target.id);
});

const Clock = {
  getCurrentTime: function (date) {
    if (date instanceof Date) {
      const yy = date.getFullYear();
      const mm = date.getMonth();
      const dd = date.getDate();
      const hh = date.getHours();
      const mmm = date.getMinutes() + 1;
      const ss = date.getSeconds();
      const time = `"현재 시간은 ${yy}년 ${mm}월 ${dd}일 ${hh}시 ${mmm}분 ${ss}초 입니다."`;
      return time;
    } else {
      return '현재 시간을 구할 수 없습니다.';
    }
  },
};
