# 11. DOM 이벤트

- `이벤트`: 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생을 말한다. 브라우저는 이벤트를 감지하여 사용자와 웹페이지 간의 상호 작용을 가능하게 한다.
- `이벤트 핸들러`: 이벤트가 발생했을 때 그 처리를 담당하는 함수, 지정된 이벤트가 발생하면, 웹 브라우저는 그 요소에 등록된 이벤트핸들러를 실행시킨다. 


## 1. DOM 이벤트 개요

- `DOM 이벤트`는 `DOM` 내의 `element`, `document` 객체, `window` 객체와 관련되어 발생하는 <U>사전에 정의된 시점</U> 또는 <U>사용자 정의 시점</U>을 말한다.
- 이 시점(=`이벤트`)는 사전에 결정되어 있으며, `이벤트`가 발생할 때 실행될 기능을(핸들러/콜백) 연관시킨다. 
- `이벤트`는 UI의 상태(focus), Javascript 실행 환경 상태(페이지가 로드되거나 XHR 요청이 완료되었을 때), 프로그램 자체의 상태(페이지 로드된 후 30초 동안 모든 마우스 클릭을 모니터링)에 의해 발생한다.

### 이벤트를 설정하는 세 가지 방법

1. **인라인 `attribute event handler`, (`= HTML 이벤트 핸들러`)**
```html
<body onclick="console.log('trigger attribute event handler')">
```
2. **`property event handler`**

```js
divElem.onclick = function() {console.log('trigger property event handler')}
```

3. **`addEventListener()`**

```js
divElem.addEventListener('click', function() {
  console.log('trigger property event handler')
  })  
```

- `<div>`를 클릭할 때 `<body>`도 클릭하고 있다는 것을 명심하자.
- 인라인 `attribute event handler`은 `HTML`과 `Javascript`를 혼합하게 사용하기 때문에 이 둘을 분리해서 사용하는것이 바람직하다.
- 이 세가지 방법 모두 이벤트를 예약할 수 있지만 `addEventListener()`만이 견고하고 조직화된 솔루션을 제공한다. 

#### (1) `adddEventListener` vs `onclick`
- `property event handler`는 한 번에 한 개의 값만 이벤트 속성에 할당할 수 있다. 이벤트를 속성 값으로 할당할 때 하나 이상의 속성 이벤트 핸드러를 DOM에 추가할 수 없다.


```js
divElem.onclick = function() {console.log('i get overridden')}
divElem.onclick = function() {console.log('i win')}
```
- `onclick`속성에 값을 두 번 할당한다면, 마지막에 할당한 값으로 오버라이딩 된다.
- 뿐만 아니라 이벤트가 호출하는 `함수의 영역 체인`을 활용하려는 시도는 영역문제를 겪을 수 있다. 

#### (2) `addEventListener`는 객체를 이벤트 핸들러로도 할당할 수 있다.

- `addEventListener`가 인수로 객체 형태의 핸들러를 받으면 이벤트 발생 시 **obj.handleEvent(event)가 호출된다.**

```js
class Menu {
  handleEvent(e) {
    // mousedown -> onMousedown
    let method = 'on' + e.type[0].toUpperCase() + e.type.slice(1);
    this[method](e);
  }

  onMousedown(e) {
    elem.innerHTML = "마우스 버튼을 눌렀습니다.";
  }

  onMouseup(e) {
    elem.innerHTML += " 그리고 버튼을 뗐습니다.";
  }
}

let menu = new Menu();

elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);
```


#### (3) `Element` 노드, `Document` 노드, `Window` 객체

- 셋 다 `프로퍼티 이벤트 핸들러`와 `addEventListener`을 지원하며, `Documnet`노드만 `인라인 이벤트`를 지원하지 않는다. 
- `Document` 노드
  - `document.onclick = function(){}`
  - `documet.addEventListener()`
- `window` 객체
  -  `<body>`,`<frameset>` element를 통해 인라인 이벤트 핸들러를 지원한다.
  -  `<body onload=""></body> `
  - `window.load = function(){}`
  - `window.addEventListener()`

## 2. DOM 이벤트 유형

- 사용자 인터페이스 이벤트
- Focus 이벤트
- Form 이벤트
- Mouse 이벤트
- Wheel 이벤트
- Keyboard 이벤트
- Touch 이벤트
- Winodw, `<body>`, 프레임 관련 이벤트
- Document 관련 이벤트
- Drag 이벤트
- [이벤트 유형 확인하러가기](http://domenlightenment.com/#11.2)

## 3. 이벤트 흐름

- 이벤트가 발생되면 DOM을 따라 흘러가거나 전파되면서 다른 노드와 Javascropt 객체들에서 **동일한 이벤트**를 발생시킨다. 
- 이벤트 흐름은 `캡처` 단계(Dom 트리 줄기 -> 가지), `target` 단계, `버블링`단계(Dom 트리 가지 -> 줄기), 혹은 양쪽 모두로 발생할 수 있게 할 수 있다.
![event flow](https://user-images.githubusercontent.com/76730867/150773355-1daa477c-69e4-4874-965c-5e8654fa885d.PNG)
- `addEventListener()`의 default 값은 버블링 단계로 세번째 인자에 `false`값이 들어가있으며, 캡처 단계로 바꾸고자 할 경우 `true`를 넣는다.

```js
//1. 캡처 단계, window
window.addEventListener('click', function(){console.log(1)},true)

//2. 캡처 단계, document
document.addEventListener('click', function(){console.log(2)},true)

//3. 캡처 단계, html
document.documentElement.addEventListener('click', function(){console.log(3)},true)

//4. 캡처 단계, body
document.body.addEventListener('click', function(){console.log(4)},true)

//5. 캡처 단계 도중에 타겟 단계가 발생
document.querySelector('div').addEventListener('click', function(){console.log(5)},true)

//6. 버블링 단계 도중에 타겟 단계가 발생
document.querySelector('div').addEventListener('click', function(){console.log(6)},false)

//7. 버블링 단계
document.body.addEventListener('click', function(){console.log(6)},true)

//8. 버블링 단계, html
document.documentElement.addEventListener('click', function(){console.log(7)},true)

//9. 버블링 단계
document.addEventListener('click', function(){console.log(8)},true)

//10. 버블링 단계
window.addEventListener('click', function(){console.log(4)},true)
```
- `<div>`를 클릭하면 위와 같은 순서대로 이벤트가 발생한다.
- `<div>`를 제외한 다른 위치를 클릭하면, `<div>`에 연결된 `click`이벤트는 호출되지 않으며, 버블링 호출은 `<body>`에서 시작된다. 이벤트 타겟이 더 이상 `<div>`가 아니라 `<body>` element이기 때문이다.
- 통상적으로 이벤트는 `버블링 단계` 도중에 호출되는 것으로 가정한다. 
- 이벤트 타겟에서 이벤트가 발생하기 전에 이를 가로채는 것이 가능하다. `이벤트 위임`에서 이를 설명할 것이다.

##### e.eventPhase
- `이벤트 리스너`에 전달되는 `이벤트 객체`는 이벤트가 어느 단계에서 호출되었는지를 가리키는 숫자를 가지고 있는 `eventPhase`라는 속성을 갖고있다.
- `e.eventPhase` = 1 `캡처 단계`
- `e.eventPhase` = 2 `타겟 단계`
- `e.eventPhase` = 3 `버블링 단계`

## 4. `EventTarget.addEventListener()`

- `addEventListener()`메서드는 모든 `element` 노드, `window` 객체, `document` 객체에 존재한다.
- `DOM`과 `BOM`에 관련된 `Javascript 객체` 뿐만 아니라 HTML 문서의 일부에도 `eventListener`를 추가할 수 잇다.

```js
window.addEventListener('mousemove', function(){console.log('moving over window')})

document.addEventListener('mousemove', function(){console.log('moving over document')})

divElem.addEventListener('mousemove', function(){console.log('moving over div')})
```

- 통상적으로 개발자는 DOM으로 이벤트가 버블링되기 전에 객체가 이벤트가 처리하도록 버블링 단계 도중에 이벤트가 발생되길 원한다.
- 이 때문에, `addEventListener()`의 마지막 인수는 대부분 false값을 주게 되고 default값이 false이다.
- XMLHttpRequset 객체에서도 `addEventListener()`를 사용할 수 있다.

## 5. `EventTarget.removeEventListener()`

- `removeEventListener()` 메서드를 사용하여 이벤트 수신기를 제거할 수 있다.
- 하지만 `eventListener`가 익명 함수로 추가되었다면 제거할 수 없다.

```js
var sayHi = function() {console.log("Hi from sayHi Func")}

document.body.addEventListener('click', function() {console.log("Hi from Anonymous")})
divElem.addEventListener('click', sayHi)

divElem.removeEventListener('click', sayHi) // 제거 성공
document.body.removeEventListener('click', function() {console.log("Hi from Anonymous")}) // 제거 실패
```

## 6. 이벤트 객체

- 이벤트에서 호출되는 핸들러나 콜백 함수에는 이벤트와 관련된 모든 정보를 가지고 있는 **매개변수**(event)가 전송된다.

```js
elem.addEventListener("click", function(event){
  console.dir(event)
})
```

## 7. `this` 값: `event.currentTarget`

`this` 값은 **이벤트가 연결된** element를 가리킨다.

```js
<button onclick="this.textContent = '성공입니다!'">클릭하세요!</button>
```
- `인라인 핸들러`에 작성한 내용은 이벤트 핸들러안의 코드와 같으므로 `this`는 **이벤트가 연결된** element를 가리킨다.
  
```js
divElem.addEventListener('click',function(){console.log(this)}) //<div>
```
- `<div>`에 이벤트가 연결됐으므로 `<div>`를 클릭하면 `this`는 `<div>`를 바라본다.

```html
<body>
  <div><div>
  <button></button>
</body>
```

```js
document.body.addEventListener('click', function(){console.log(this)}) //<body>
```
- 위의 코드에서 `<button>`나, `<div>`, `<body>`를 클릭해도 `this` 값은 **이벤트가 연결된 `<body>` element 노드**가 된다.


```js
document.body.addEventListener('click',()=>console.log(this))  // window
```

- 화살표 함수는 `this`바인딩을 하지 않으므로 `window`가 나온다.

## 8. 이벤트의 대상을 참조: `event.target`

1. `Event.target`: **이벤트를 발생시킨 element**, **이벤트의 진원지**를 알아낼 수 있다.
2. `Event.currentTarget`: 이벤트 흐름을 통해 **현재 이벤트를 갖고 있는 element**

```html
<body>
  <div>
    <button>
    </button>
  </div>
</body>
```

```js
document.body.addEventListener("click",function(e){
console.log(e.currentTarget, e.target)
```
- `<body>`를 클릭했을 때: `e.currentTarget` = `<body>`, `e.target` = `<body>`
- `<div>`를 클릭했을 때: `e.currentTarget` = `<body>`, `e.target` = `<div>`
- `<button>`를 클릭했을 때: `e.currentTarget` = `<body>`, `e.target` = `<button>`
-  `e.currentTarget` 값은 이벤트가 연결된 `body`로 동일한 반면, `e.target` 이벤트의 진원지를 출력한다.


## 9. 기본 브라우저 이벤트 취소하기

- 브라우저는 사전에 구성된 여러 이벤트를 제공한다. 예를 들어 링크를 클릭할 때 URL로 이동한다거나, 체크박스를 클릭할 때 박스가 체크된다거나, 텍스트 필드에 텍스트를 입력할 때 텍스트가 입력되어 스크린에 표시되는 것과 같이 말이다. 
- 이런 브라우저 이벤트는 기본 이벤트를 호출하는 노드나 객체에 연결된 이벤트 핸들러 함수 내부에서 `preventDefault()` 메서드를 호출해서 막을 수 있다.

```html
<a href="google.com">google<a>
<input type="checkbox" />
<textarea></textarea>
```

```js
aElem.addEventListener("click",function(e){e.preventDefault()})
inputElem.addEventListener("click",function(e){e.preventDefault()})
textareaElem.addEventListener("keypress",function(e){e.preventDefault()})

document.body.addEventListener("click", function(){console.log(the event flow still flows!)})
// html문서 내의 링크를 클릭하면 기본 이벤트가 중지되어 링크이동은 안되지만,
// 이벤트 버블링은 중지되지 않았으므로, 이벤트가 여전히 전파된다.
```
- `Event.cacelable`: 기본 동작 취소가 가능한지 `boolean` 타입의 값이다.
- `Event.defaultPrevented`: `read-only` property of the Event interface returns a boolean value indicating whether or not the call to Event.preventDefault() canceled the event.


## 10. 이벤트 흐름 중지시키기

- `stopPropagation()`: 캡처/버블링 이벤트 흐름 단계가 중지된다.
- 이벤트 흐름을 차단하는 것이지, 이벤트 자체를 없애는 것은 아니다.
- 하지만 노드나 객체에 **직접 연결된 이벤트**는 여전히 호출된다.
- **기본 이벤트**를 막지 않는다.

```js
document.querySelector('div').addEventListener('click', function(){
  console.log('no.1 from div')
})

document.querySelector('div').addEventListener('click', function(event){
  console.log('no.2 from div')
  event.stopPropagation();
})

document.querySelector('div').addEventListener('click', function(event){
  console.log('no.3 from div')
})

document.body.addEventListener('click', function(event){
  console.log('denied from stopPropagation()')
}) // 버블단계 막힘
```

## 11. 동일한 대상의 이벤트 흐름 & 다른 유사 이벤트 중지 시키기

- `stopImmediatePropagation()`: 이벤트 흐름을 중지시킴과 더불어 **직접 연결된 후속 이벤트를 중지시킨다.**

```js
document.querySelector('div').addEventListener('click', function(){
  console.log('no.1 from div')
})

document.querySelector('div').addEventListener('click', function(event){
  console.log('no.2 from div')
  event.stopImmediatePropagation();
})

document.querySelector('div').addEventListener('click', function(event){
  console.log('denied from stopImmediatePropagation()')
})

document.body.addEventListener('click', function(event){
  console.log('denied from stopImmediatePropagation()')
})
```

- `stopImmediatePropagation()` 메서드 역시 기본 이벤트는 막지 않는다. 
- 브라우저 기본 이벤트는 여전히 호출되며, 이는 `preventDefault()`를 호출해야만 이 이벤트를 막을 수 있다.

## 12. 사용자 정의 이벤트

#### 1) deprecated way

```js
// Create the event.
const event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', function (e) {
  // e.target matches elem.
  
}, false);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

#### 2) 현재 사용되고 있는 MDN 예제
```js
const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

- 이벤트 객체를 생성한 다음엔 `elem.dispatchEvent(event)`를 호출해 요소에 있는 이벤트를 반드시 '실행’시켜줘야 한다. 
- 이벤트를 실행시켜줘야 핸들러가 일반 브라우저 이벤트처럼 이벤트에 반응할 수 있다.


## 13. 마우스 이벤트 시뮬레이션/트리거링

- 이벤트를 시뮬레이션하는 것은 사용자 정의 이벤트와 별반 다를 바 없다. 
- 마우스 이벤트를 시뮬레이션하려면, `document.createEvent()`를 사용하여 `MouseEvent`를 생성한 후 `initMouseEvent()`를 사용하여 발생할 마우스 이벤트를 구성한다. 그 후, 이벤트를 시뮬레이션하고자 하는 `element`에 전달한다.
- `<div>`를 클릭해서 `click` 이벤트를 발생시키는 대신, 마우스 이벤트를 프로그래밍적으로 구성해서 이벤트를 트리거링/시뮬레이션하여 `<div>`에 전달해보자.

```html
<div>no need to click, we programmatically trigget it</div>
```

```js
var divElement = document.querySelector('div')

// 시뮬레이션할 click 이벤트 구성
divElement.addEventListener('click', function(e){
  console.log(Object.keys(e)),false
})

// 시뮬레이션된 'clcik' 마우스 이벤트 생성
var simulateDivClick = document.createEvent('MouseEvents')


// 시뮬레이션된 마우스 click을 구성
simulateDivClick.initMouseEvent('click', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, 0, null, null)
// initMouseEvent(type, bubbles, cancelable, view, detail, screenx, screeny, clientx, clienty, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget)

// 시뮬레이션된 click 이벤트 발생
divElement.dispatchEvent(simulateDivClic)

```

#### `initEvent()`는 deprecated되었다.
- https://developer.mozilla.org/en-US/docs/Web/API/Event/initEvent
- 대신 아래 링크와 같은 방법으로 커스텀 이벤트 혹은 내장 이벤트를 수정할 수 있다.
- https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
- https://ko.javascript.info/dispatch-events

## 14. 이벤트 위임, `Event Delegation`

- `이벤트 위임`: 이벤트 흐름을 활용하여 `단일 이벤트 수신기`가 `여러 개의 이벤트 대상`을 처리할 수 있게 하는 것이다,
- `이벤트 위임의 부수 작용`: **이벤트가 생성될 때 이벤트에 응답하기 위해 이벤트 대상이 DOM 내에 있을 필요가 없다.**
  - 이는 DOM을 업데이트하는 XHR 응답을 처리할 때보다 편리해진다. 
  - `이벤트 위임`을 구현함으로써 자바스크립트가 로드되어 해석된 후에 **새로운 콘텐츠가 DOM에 추가되어도 즉시 이벤트에 응답할 수 있게 된다.**
- 사용 예시: 무한한 개수의 행과 열을 가진 테이블에서 이벤트 위임을 사용하면, 이벤트의 최초 대상인 노드나 개체에 대해 위임으로 동작하는 단일 이벤트 수신기를 `<table>`에 추가할 수 있고 이벤트의 대상인 `<td>` 중 아무것이나 클릭하면 해당 이벤트를 테이블의 클릭수신기로 위임한다. 
- 이것이 가능한 이유는 `**이벤트 흐름**` 때문이며 **그중에서 버블링 단계이다.**

```html
<table>
  <tbody>
        <tr>
          <td>row1 column1</td>
          <td>row1 column2</td>
        </tr>
        <tr>
          <td>row2 column1</td>
          <td>row2 column2</td>
        </tr>
        <tr>
          <td>row3 column1</td>
          <td>row3 column2</td>
        </tr>
  </tbody>
</table>
```

```js
document.querySelector('table').addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() ==='td'){
    console.log(e.target.textContent)
  }
})
```

- 테이블에 새로운 행을 추가하면 화면에 렌더링되자마자 click 이벤트에 반응하게 되는데, click 이벤트가 `<table>` element 노드로 위임된다.
- 여기서 `e.target`은 `table` 하위에 있는 click 이벤트에 반응한 `element`을 뜻한다.
- `이벤트 위임`은 `click`, `mousedown`, ``mouseup``, `keydown`, `keyup`, `keypress` 이벤트 형식을 처리할 때 활용하면 이상적이다.