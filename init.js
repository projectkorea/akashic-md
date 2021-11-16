// 1. html이 파싱되기 전에 script기 실행되어 querySelect에 오류가 났음
// 2. addEventListener에 콜백함수의 첫번째 인자는 이벤트객체가 들어간다.
// 3-1. addEventListener 콜백함수로 인자를 전달하고 싶으면 return형태로 함수(인자)로 전달한다.
// 3-2. 콜백함수로 들어가는 것은 실행형태가 아니라 함수형태가 들어가야 하기 때문이다.

const addScript = (fileName) => {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', `${fileName}.js`);
    document.querySelector('head').appendChild(scriptElement);
};

document
    .querySelector('.classBtn')
    .addEventListener('click', () => addScript('class'));
