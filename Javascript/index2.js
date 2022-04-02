function setup() {
  const rating = document.querySelector('#rating');
  function getNumber(e) {
    const children = document.getElementsByTagName('span');
    for (i in children) {
      if (children[i] == e.target) {
        return i;
      }
    }
  }

  function paintStar(num) {
    for (let i = 0; i < num + 1; i++) {
      document.getElementsByTagName('span')[i].setAttribute('class', 'active');
    }
  }

  function handleClick(e) {
    const num = getNumber(e);
    paintStar(num);
  }

  rating.addEventListener('click', handleClick);
}

// Example case.
document.body.innerHTML = `
<div id='rating'>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
  <span>*</span>
</div>`;

setup();

document.getElementsByTagName('span')[2].click();
console.log(document.body.innerHTML);
