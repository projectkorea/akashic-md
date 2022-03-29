# 코드 시행착오 모음집

- [3장. JSX 문법](#3장-jsx문법)

---


# 1장 이벤트

## 1. JSX 이벤트 핸들러

- **이벤트 핸들러**는 `event` 객체를 **매개변수**로 받아서 사용해야한다.

```jsx
// ❌
<input onChange ={
  ()=>{
    setInputValue(event.target.value)
  }}>
</input>
```

```jsx
// ✅
onChange ={
  (event)=>{
    setInputValue(event.target.value)
  }}
```


## 2. `prop`으로 전달한 함수와 햇갈리지 말자

```jsx
// ❌
<InsertForm onInsert={(event) => console.log(event.target.value)}/>
```
- 이벤트 핸들러와 혼동하지 말자.
- `onInsert`는 함수를 전달하는 `prop`이다.


## 3. 많이 쓰는 이벤트 핸들러

- `onClick`: 클릭했을 때
- `onChange`: input의 텍스트를 변경, 파일 선택 등의 변화가 생길 때
- `onKeyDown`, `onKeyUp`, `onKeyPress`: 키보드 입력이 일어났을 때
- `onDoubleClick`: 더블 클릭했을 때
- `onFocus`: Element에 `Focus` 되었을 때
- `onBlur`: Element가 `Focus`를 잃었을 때
- `onSubmit`: `Form` Element에서 `Submit` 했을 때

### 커스텀 이벤트 명명법

- `on + 동사`,  `on + 명사 + 동사` 형태로 작성한다.
- `onClick`, `onButtonClick`, `onInputChange`
- 핸들링 함수의 경우, `handle + 동사`, `“handle” + 명사 + 동사` 의 형태로 작성하며, “handle” 대신 이벤트명과 동일한 `on`을 앞에 붙여도 무방하다.


---

# 3장 JSX문법

## 1. JSX의 Attribute VS DOM의 Attribute

- `DOM Element`들의 **Attribute는 camelCase로** 작성한다.
  - 예: `tabIndex`, `className`
- 그러나 **‘data-’ 또는 ‘aria-’** 로 시작하는 Attribute는 예외다.
  - 예: `data-type`, `aria-label`

```jsx
<element data-id = "3" />
e.target.dataset.id === "3"
```

- HTML의 `Attribute`와 다른 이름을 가지는 `Attribute`가 있다.
  - 예 class → `className`, for → `htmlFor`
- React에서만 쓰이는 새로운 `Attribute`가 있다.
  - 예: **`key`**, `dangerouslySetInnerHTML`
- HTML의 Attribute와 다른 동작 방식을 가진 Attribute가 있다.
  - 예 `checked`(`defaultChecked`), `value`(`defaultValue`), `style={{}}`

```js
<input type="checkbox" checked={false} />
```

- HTML에서 checked 또는 value는 **초기값**으로 쓰이지만, React 내에서는 **현재 값**을 의미한다.
- 예시처럼 `checked` 값이 `false`로 주면 `checked` 값이 고정되기 때문에, 사용자가 checkbox를 클릭하여도 값의 변화가 일어나지 않는다.
- 따라서 **초기값**의 의미로 `checked` 또는 `value`를 사용하고 싶다면, `defaultChecked`, `defaultValue` `Attribute`를 사용해야 한다.
<br/>


2. **최상위 컴포넌트**로 감싸야 한다.

```js
return { listView }            // ❌
return { <div>안녕</div> }     // ❌
return <div>{listView}</div>   // ✅
```  


3. 중괄호로 감싸서 랜더링할 때

```js
<>
  {<li></li>}
  {[<textarea></textarea>, <h1></h1>, <button></button>]}
</>
```
- `{}`로 감싸진 html태그도 DOM요소로 변환된다.
- 배열 형태로 반환해도, 배열의 모든 요소가 DOM요소로 변환된다.
  - `array.map`메서드로 반환한 배열을 `{array}`로 적으면 랜더링 되는것과 같다.



4. `Dom element` vs `JSX Component`

```js
<button onUpdate={onUpdate}/>  // ❌
<button onClick={onUpdate}/>   // ✅
```

```js
<element className= ="work" />            // ✅
<Component className ="doesn't work" />   // ❌
```



## 5. `map`으로 랜더링 하려면 `key`를 사용해야한다.

- `key`: React가 어떤 항목을 변경, 추가, 삭제 식별을 도움
-  랜더링하는 `element`에 안정적인 **고유성**을 부여하기 위해, 배열 내부의 **엘리먼트**에 지정해야한다.
-  `<div>`, `<li>` 상관없이 `map`을 통해 **배열**로, 랜더링하는 **모든** 엘리먼트에 해당한다.

```js
function App() {
    const tart = ["딸기", "무화과", "치즈"]
    const tart_array = tart.map((item,index)=>{
        return <div key={index}>{`${item} 타르트`}</div>
    })
    
  return (
    <div className="App">
        {tart_array}
    </div>
  );
}

export default App;
```
- `key`는 배열 안에서 **형제 사이**에서 고유해야 한다.
-  **전체 범위**에서 고유할 필요는 없으니, 두 개의 **다른 배열**을 만들 때 **동일**한 key를 사용할 수 있다.

### `key`에는 무슨 값을 줘야하나요?


- `map`의 `index`를 `key`로 사용할 수 있지만, 배열의 요소가 CRUD되는 상황에서 혼란의 여지가 많으니 **권장하지 않는다.**
- **따라서**, 배열의 요소에 `id` 값을 추가로 만들어, 이를 `key`로 준다.


```jsx

const tart = ["딸기", "무화과", "치즈"] 
const newTart = tart.map((item, index) => {
    const newItem = { id: index, name: item };
    return newItem;
  });

const tart_array = newTart.map((item)=>{
  return <div key={item.id}>{`${item.name} 타르트`}</div>
})
```

### nanoid 패키지를 통한 id값 전달

```js
const createNewTodo = (text) => ({
  completed: false,
  id: nanoid(),
  text
}
```


## 3. 숫자를 전달할 때는 {}로 감싸야 한다.

```js
<Component num=2></Component> //error
```
```js
<Component num="2"></Component> // typeof props.num => string
```
```js
<Component num={2}></Component> // typeof props.num => num
```


## 4. `{}`로 감싸면 `Javascript` 언어다.

- 템플릿 리터럴 방법으로 **공백**을 구현한다.

```jsx
<div>{&nbsp `${money}`}</div> // ❌
<div>{` ${money}`}</div>      // ✅
```