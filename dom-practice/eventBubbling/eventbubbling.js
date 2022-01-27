const billboard = document.querySelector('billboard');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
let isETarget = 1;

const eTarget = (e) => {
  if (e.target.id !== 'ul') {
    h1.textContent = e.target.id;
  }
};

const eCurrentTarget = (e) => {
  h1.textContent = e.currentTarget.id;
};

button.addEventListener('click', function () {
  if (isETarget) {
    ul.removeEventListener('click', eTarget);
    ul.addEventListener('click', eCurrentTarget);
    isETarget = 0;
    button.textContent = 'e.currentTarget';
  } else {
    ul.removeEventListener('click', eCurrentTarget);
    ul.addEventListener('click', eTarget);
    isETarget = 1;
    button.textContent = 'e.target';
  }
});

ul.addEventListener('click', eTarget);
