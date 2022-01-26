var blockOne = document.getElementById('red');
var blockTwo = document.getElementById('yellow');
var blockThree = document.getElementById('green');

document.body.addEventListener('mouseover', function (e) {
  e.target.classList.add(e.target.id);
});
