### 클래스 메서드

```jsx
div.classList.add('className')
div.classList.remove('className1', 'className2')
div.classList.toggle('className', forceBollean)

// 덮어 쓰기
div.className = "className"

// 새로운 클래스로 변경
div.classList.replace('old', 'new');

// 클래스 포함 여부 체크
div.classList.contain('good');// true
```

### DOM **선택자**

```jsx
elem.firstChild
elem.childNodes[0]
elem.firstElementChild

elem.lastChild
elem.childNodes[elem.childNodes.length - 1]
lastElementChild

elem.childElementCount // 자식 엘리먼트 개수, 손자x
elem.children          // element만 ,htmlCollection
elem.childNodes        // Nodelist
```

### HTML 속성 값 추가/제거

```jsx
e.target.removeAttribute('readonly');
e.target.setAttribute('readonly', true);
```

### 현재 태그 찾기

```jsx
event.target.tagName
// "A", "UL", "LI"
```

### 이벤트

```jsx
elem.addEventListener('animationend', () => {
  console.log('Animation ended');
});
```

```jsx
inputElem.addEventListener('change', (event) => {
  console.log(`Input value changed: ${event.target.value}`);
});
```

- **`<input>`**, **`<select>`**, **`<textarea>`**에서 발생하는 이벤트
- **`change`** 이벤트 발생 조건
    - 요소의 값(value)이 변경
    - 포커스를 잃었을 때 (blur)
    - **`<input type="radio">`** 체크된 상태에서 다른 라디오 버튼을 선택할 때도 **`change`** 이벤트 발생

### 프로그래밍적으로 클릭/포커스/블러 하기

```jsx
element.onclick(callback);
element.onfocus(callback);
element.onblur(callback);
element.click() 
element.focus() 
element.blur()

// onfocus : 포커스를 받은 경우
// onblur : 포커스가 해지될 때
```

- 이벤트리스너는 콜백 형태를 지켜야 하기 때문에 표현식만 오면 안된다.
    - ❌ `onClick={ checkMobile ? connectStore : props.signIn }`
    - ✅ `onClick={ ()=> checkMobile() ? connectStore() : props.signIn() }`

### 스타일

```jsx
hTopAppBar.style.backgroundColor = ''
// 스타일 제거

hProfile.style.height = calcHeight
hProfile.style.setProperty('height', calcHeight)

var calcBtnHeight = "calc(1rem + " + statusHeight + "px)";
// Requires a space between all operators (`+ \ * -`) Parser쪽 로직임
```

### DOM 스타일링

```jsx
// 특정 css 프로퍼티 추출하기
const element = document.getElementById("myElement");
const style = window.getComputedStyle(element);
const color = style.getPropertyValue("color");
```

![1.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/878a9f65-c6ce-4809-a815-0ab51a08ec1c/2ba845db-0c32-415d-8402-af1b4ee20b33/1.jpeg)

- **`element.offsetWidth`**
    - `padding` + `border` 포함,`margin` 제외
- **`element.clientWidth`**
    - `padding` 포함 , `margin`, `border` 제외
- **`element.scrollWidth`**
    - 스크롤로 감싸여진 내용의 전체 크기
- **`element.getBoundingClientRect()`**
    - return **`DOMRect`** 객체
        - **`x`**, **`y`**, **`width`**, **`height`**, **`top`**, **`right`**, **`bottom`**, **`left`** 등의 속성