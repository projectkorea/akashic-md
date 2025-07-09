# `map`으로 랜더링 하려면 `key`를 사용해야한다

## 0. key란?

- 배열을 랜더링할 때 각각을 유니크하게 식별하기 위한 값이다.
- `DOM` 요소들을 변경, 추가, 삭제할 때 효율적으로 `diffing`하기 위해서 반드시 필요하다.

## 1. 예시

```jsx
function App() {
  const tart = ['딸기', '무화과', '치즈']

  return (
    <div className="App">
      {tart.map((item, index) => (
        <div key={index}>{`${item} 타르트`}</div>
      ))}
    </div>
  )
}

export default App;
```

### 2. key의 조건

- `key`는 **형제 사이**에서 고유하기만 하면 된다.
-  **전체 범위**에서 고유할 필요는 없으니, 두 개의 **다른 배열**을 만들 때 **동일**한 key를 사용할 수 있다.


### 3. 그렇다면 `key`에는 무슨 값을 줘야 하나요?

- `map`의 `index`를 `key`로 사용할 수 있지만, 배열의 요소가 CRUD되는 상황에서 혼란의 여지가 많으니 **권장하지 않는다.**
-  **따라서** 배열의 요소에 `id` 값이 있는 경우 id 값으로 `key`로 주는 방법이 가장 좋다.

```js
const tart = [{id:1, name:"딸기"}, {id:2, name:"포도"}, {id:3, name:"무화과"}] 

const tart_array = tart.map((item)=>{
  return <div key={item.id}>{`${item.name} 타르트`}</div>
})
```

### 4. `id`값이 없으면 어떡하죠?

- 각 배열의 요소가 **중복 없이** 고유한 값을 가진다는 조건이 있다면, 그 값을 `key`로 줄 수 있다.

```js
const tart = ["딸기", "무화과", "치즈"]

const tart_array = tart.map((item)=>{
  return <div key={item}>{`${item} 타르트`}</div>
})
```

### 5. 다소 멍청한 방법이지만

- 배열의 요소가 바뀔 때 마다 다시 전체 요소를 맵핑하여 고유한 `key`를 줄 수 있다. 하지만 연산엔 불리하다.

```jsx
const newTart = tart.map((item) => {
    const newItem = { id: index, name: item };
    return newItem;
});

const tart_array = newTart.map((item)=>{
  return <div key={item.id}>{`${item.name} 타르트`}</div>
})
```

## 6. `nanoid` 패키지를 통한 id값 전달

- id 값이 없는 배열의 형태라면, `nanoid` 패키지를 통해 `key`값을 고유하게 생성할 수 있다.
- 하지만 매번 `nanoid()`를 실행해야 하기 때문에 연산적인 측면에서 역시 불리하다.

```jsx
const createNewTodo = (text) => ({
  completed: false,
  id: nanoid(),
  text
}
```
