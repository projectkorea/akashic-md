function aaa() {
  var a = 1;
}
aaa();
console.log(a);
// 블럭스코프는 되는데, 함수는 var도 안되구나 함수안에서 컨텍스트가 생성되어 종료될 때 해당 변수도 GC되는 듯

// 실행 순서는? first => prompt => validate => end

document.write('안녕하세요'); // document는 DOM API로 비동기로 콜백큐로 넘어감
console.log(`first`);
const value = prompt('올해 책을 몇 권 읽으셨습니까?'); // prompt는 window의 내장 메서드, 값을 바기 전까지 멈춰있음

function validate(value) {
  switch (value) {
    case '1':
      alert('빡대가리');
      break;
    case '2':
      alert('굿');
      break;
  }
}

validate(value);
console.log(`end`);

// Q. window.prompt()는 웹api인가?
// => 브라우저에서 기본적으로 제공하는 브라우저api이다. 따로 스택에 넘어가지는 않는다.
