# 햇갈리는 JSX문법 정리

1. `JSX` vs `HTML` 
2. `{}`를 활용한 다양한 형태의 랜더링
3. `map` 메서드의 `key`

---
## 1. `JSX` VS `HTML`

#### 1. `HTML Element Attribute`는 **camelCase로** 작성한다.
- **그러나** `data-type`, `aria-label`는 예외다.

```jsx
<div className="header" data-id = "3" />
e.target.dataset.id === "3"
```

#### 2. React 에서만 쓰는 Attribute
   - `class` → `className`
   - `for` → `htmlFor`
   - `checked` → `checked`, `defaultChecked`
   - `value` → `value`, `defaultValue`
   - `<h1 style="color:blue;">` → `<h1 style={{camelCase:"string"}}>`
   - **`key`**

```js
<input type="checkbox" defaultChecked="false" checked={isChecked} />
```

- `value`, `checked`는 **현재값**, `default~`는 **초기값**이다. 
- `checked` 값을 `false`같이 고정된 값을 주면, checkbox를 클릭해도 값이 변하지 않는다.


#### 3. 자주하는 실수

```js
<button onUpdate={onUpdate}/>  // ❌
<button onClick={onUpdate}/>   // ✅
```

```js
<element className= ="work" />            // ✅
<Component className ="doesn't work" />   // ❌
```

---


## 2. 다양한 형태의 랜더링

#### 1. 최상위 컴포넌트로 감싸야 한다.

```js
return { listView }            // ❌
return { <div>안녕</div> }     // ❌
return <div>{listView}</div>   // ✅
```  

#### 2. 중괄호로 감싸서 랜더링해도 된다.

```js
<>
  {<li></li>}
  {[<textarea></textarea>, <h1></h1>, <button></button>]}
</>
```
- 최상위 컴포넌트로 감싸져 있으면 `{htmlTag}`, `{[htmlTag1, htmlTag2]}`도  가능하다.


#### 3. 숫자를 전달할 때는 {}로 감싸야 한다.

```js
<Component num=2/>     // ❌
<Component num="2"/>   // ❌ "2" is string
<Component num={2}/>   // ✅
```


#### 4. `{}`로 감싸면 `Javascript` 언어다.

- 공백은 `&nbsp` 뿐만아니라 **템플릿 리터럴** 방법으로도 구현할 수 있다.

```jsx
<div>{&nbsp `${money}`}</div> // ❌
<div>{` ${money}`}</div>      // ✅
```

---


## 3. `map`으로 랜더링 하려면 `key`를 사용해야한다.

- `key`: 배열을 랜더링할 때, 각각을 유니크하게 식별하기 위한 값이다. 
- `key`는 `DOM` 요소들을 변경, 추가, 삭제할 때 효율적으로 `diffing`하기 위해서 반드시 필요하다.

#### 1) 간단한 예시

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


#### 2) key의 조건
- `key`는 **형제 사이**에서 고유하기만 하면 된다.
-  **전체 범위**에서 고유할 필요는 없으니, 두 개의 **다른 배열**을 만들 때 **동일**한 key를 사용할 수 있다.


#### 3) 그렇다면 `key`에는 무슨 값을 줘야 하나요?

- `map`의 `index`를 `key`로 사용할 수 있지만, 배열의 요소가 CRUD되는 상황에서 혼란의 여지가 많으니 **권장하지 않는다.**
-  **따라서** 배열의 요소에 `id` 값이 있는 경우 id 값으로 `key`로 주는 방법이 가장 좋다.

```js
const tart = [{id:1, name:"딸기"}, {id:2, name:"포도"}, {id:3, name:"무화과"}] 

const tart_array = tart.map((item)=>{
  return <div key={item.id}>{`${item.name} 타르트`}</div>
})
```

#### 4) `id`값이 없으면 어떡하죠?

- 각 배열의 요소가 **중복 없이** 고유한 값을 가진다는 조건이 있다면, 그 값을 `key`로 줄 수 있다.

```js
const tart = ["딸기", "무화과", "치즈"]

const tart_array = tart.map((item)=>{
  return <div key={item}>{`${item} 타르트`}</div>
})
```

#### 5) 다소 멍청한 방법이지만..

- 배열의 요소가 바뀔 때 마다, 다시 전체 요소를 맵핑하여 고유한 `key`를 줄 수 있지만, 연산엔 불리하다.
```JS
const newTart = tart.map((item) => {
    const newItem = { id: index, name: item };
    return newItem;
});

const tart_array = newTart.map((item)=>{
  return <div key={item.id}>{`${item.name} 타르트`}</div>
})
```

#### 6) nanoid 패키지를 통한 id값 전달

- id 값이 없는 배열의 형태라면, `nanoid` 패키지를 통해 `key`값을 고유하게 생성할 수 있다.
- 하지만 매번 `nanoid()`를 실행해야 하기 때문에 연산적인 측면에서 역시 불리하다.
```js
const createNewTodo = (text) => ({
  completed: false,
  id: nanoid(),
  text
}
```