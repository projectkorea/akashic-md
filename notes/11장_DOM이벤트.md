# 11. DOM 이벤트

## 1. DOM 이벤트 개요

## 2. 

## 3. 이벤트 흐름

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

## 6. 

## 7. 

## 8. 

## 9. 

## 10. 

## 11. 

## 12. 사용자 정의 이벤트

#### 1) deprecated way

```js
// Create the event.
const event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', function (e) {
  // e.target matches elem
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

- 이벤트 객체를 생성한 다음엔 `elem.dispatchEvent(event)`를 호출해 요소에 있는 이벤트를 반드시 '실행’시켜줘야 한다. (dispatch는 일을 '처리하다’라는 뜻을 가진 영어단어)
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