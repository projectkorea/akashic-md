// 각 function마다 getElementById()와 getElementsByTagName()을 사용해서 index.html <body>내 각 div id에 해당하는 <p> 태그의 개수를 출력하세요.
var init = 0;
var num = 0;
var coffee = 0;
var espresso = 0;

function calc() {
  init = 1;
  const body = document.body;
  for (let i = 0; i < body.childNodes.length; i++) {
    if (body.childNodes[i].nodeName.toLowerCase() === 'p') {
      num++;
    } else if (body.childNodes[i].nodeName.toLowerCase() === 'div') {
      const div = body.childNodes[i];
      for (let i = 0; i < div.childNodes.length; i++) {
        if (div.childNodes[i].nodeName.toLowerCase() === 'p') {
          num++;
          if (div.id === 'coldbrew') {
            coffee++;
          }
        } else if (div.childNodes[i].nodeName.toLowerCase() === 'div') {
          const innerDiv = div.childNodes[i];
          for (let i = 0; i < innerDiv.childNodes.length; i++) {
            if (innerDiv.childNodes[i].nodeName.toLowerCase() === 'p') {
              espresso++;
              num++;
            }
          }
        }
      }
    }
  }
}

function getAllParaElems() {
  !init && calc();
  alert('전체 메뉴 종류는 ' + num + ' 개 입니다.');
}

function div1ParaElems() {
  !init && calc();
  alert('커피 음료 종류는 ' + (coffee + espresso) + ' 개 입니다.');
}

function div2ParaElems() {
  !init && calc();
  alert('에스프레소 음료 종류는 ' + espresso + ' 개 입니다. ');
}
