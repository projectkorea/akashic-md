const examples = [
  '1.callback',
  '2.callback-to-promise',
  '3.promise',
  '4.async',
  '5.json',
  '6.arrayAPIs',
  '7.class',
  '8.object',
  '9.operator',
  '10.tips',
  '11.type',
  'temp',
];

const addButton = (args) => {
  args.forEach((element) => {
    const button = document.createElement('button');
    button.innerText = element;
    button.addEventListener('click', () => addScript(element));
    document.querySelector('body').appendChild(button);
  });
};

const addScript = (element) => {
  const script = document.createElement('script');
  script.setAttribute('src', `examples/${element}.js`);
  document.querySelector('head').appendChild(script);
};

addButton(examples);

function getFormData() {
  // state의 각 필드에 있는 value를 모아 하나의 객체로 리턴합니다.
  // { name : 'Kim', age: 30 } 의 형식으로 리턴해야 합니다.
  return Object.entries(formState).reduce(
    (formData, [key, { value, validator }]) => ({ ...formData, [key]: value })
  );
}
