# JSX 문법 정리

1. `JSX` vs `HTML`
2. `map` 메서드의 `key`

---
## 1. `JSX` VS `HTML`

<br>

### 1) 태그에 속성(Attribute) 설정

```jsx
// camelCase로 작성
// data-type, aria-label는 예외
<div  className = "header"        // class=""
      style = {{display:"flex"}} // style="color:blue;"
      key = "1"                  // key 없음 
      data-id = "3">
</div>

<input type="checkbox" value="" defaultValue="" checked="false" defaultChecked="" checked={isChecked} />
// value, checked는 현재값, default~는 초기값이다.
// `checked` 값을 `false`같이 고정된 값을 주면, checkbox를 클릭해도 값이 변하지 않음

<label for="name">Name:</label>
<label htmlFor="name">Name:</label> // JavaScript의 예약어 for와 충돌을 피하기 위함
```

### 2) 자주하는 실수

```js
//Component <-> html 혼동
<button onUpdate={onUpdate}/>           // ❌
<Component className ="doesn't work" /> // ❌ 

// 최상위 컴포넌트로 감싸야 한다.
return { listView }            // ❌
return { <div>안녕</div> }      // ❌
return <div>{listView}</div>   // ✅
return <>                      // ✅
    {<li></li>}
    {[<textarea></textarea>, <h1></h1>, <button></button>]}
  </>

// 숫자를 전달할 때는 {}로 감싸자
<Component num=2/>     // ❌ error
<Component num="2"/>   // ❌ "2" is string
<Component num={2}/>   // ✅

// {} 로 감싸면 Javascript다.
// 공백은 `&nbsp` 뿐만아니라 **템플릿 리터럴** 방법으로도 구현할 수 있다.
<div>{&nbsp `${money}`}</div> // ❌
<div>{` ${money}`}</div>      // ✅
```

## 2. `map`으로 랜더링 하려면 `key`를 사용해야한다.

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