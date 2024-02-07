const app = document.getElementById('app');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
let isETarget = 1;

const eTarget = (e) => {
  // if (e.target.id !== 'ul') {
  h1.textContent = e.target.id;
  // }
};

const eCurrentTarget = (e) => {
  h1.textContent = e.currentTarget.id;
};

button.addEventListener('click', function () {
  if (isETarget) {
    app.removeEventListener('click', eTarget);
    app.addEventListener('click', eCurrentTarget);
    isETarget = 0;
    button.textContent = 'e.currentTarget';
  } else {
    app.removeEventListener('click', eCurrentTarget);
    app.addEventListener('click', eTarget);
    isETarget = 1;
    button.textContent = 'e.target';
  }
});

app.addEventListener('click', eTarget);

document.body.addEventListener('click', function () {
  console.this();
  (() => console.log(this))();
});
