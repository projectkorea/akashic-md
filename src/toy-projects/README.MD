# 코드 시행착오 모음집

- [2장. State & Prop](#2장-state)
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
# 2장 State

## 1. `State`가 **객체**, **배열** (참조형 데이터) 인 경우

### 예제 1

- **참조형 데이터**의 특성상 `state` 안의 요소만 바꿀 경우, `state` 값은 변하지 않기 때문에 **리랜더링**이 되지 않는다.

```jsx
const [person, setPerson] = useState({
  name: "junha",
  school: "S.UNIV"
});

// ❌
const handleChange = (event) => {
    const { name, value } = event.target;
    const newPerson = person // ❌ 원래의 state 값을 복사하면 state 갱신이 되지 않는다.

    newPerson.name = name
    newPerson.school = value
    setPerson(newPerson);
};

// ✅
const handleChange = (event) => {
    const { name, value } = event.target;
    const newPerson = { ...person, [name]: value };
    setPerson(newPerson);
};
```

```jsx
<input name='name' value={person.name} onChange={handleChange} />
<input name='school' value={person.school} onChange={handleChange} />
<button
  onClick={() =>
    alert(
      `${person.name}님은 ${person.school}에 재학중입니다.`
    )
  }
></button>
```

### 예제 2

- `State` 객체를 **새로운** 객체에 담고, 새로운 객체의 **프로퍼티**를 변경한다.
- `Object.assign`, `Array.from`, `[...arr]`, `{...obj}`

```js
// ❌
setUser((current) => {
  current.id = 1;
  return current;
})
```

```js
// ✅
setUser((current) => {
  const newUser = { ...current } // 1. 담고
  newUser.id = 1                 // 2. 바꾸기
return newUser
})
```

### 주의! `count++`는 값이 아니라 **표현**이다!

```jsx
<button onClick={() => {setCount(count++)}}></button> //❌
<button onClick={() => {setCount(count+1)}}></button> //✅
```


## 2. `useState`함수는 비동기로 처리된다.

- `setPrice`는 비동기적으로 `state`를 처리하기 때문에, `setMoney` 함수가 `price`값을 불러들일 때는 처리 전의 `state`를 받게된다.


```js
// ❌
const [price, usePrice] = useState(0)
const [money, useMoney] = useState(0)

const onCalc =() => {
    setPrice(data.reduce((acc,cur)=>acc+cur.price*cur.num,0))
    setMoney(price-price)
}
```

```js
// ✅
const onCalc =() => {
    const newPrice = data.reduce((acc,cur)=>acc+cur.price*cur.num,0)
    setPrice(newPrice)
    setMoney(money-newPrice)
}
```



## 3. 간단한 랜더링 최적화

```jsx
// ❌ 
const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)
 
useEffect(()=>{
  setCount1(a)
  setCount2(b) // 두 번의 랜더링 발생
})
```
```jsx
// ✅ 
const [counts, setCounts] = useState({count1:0, count2:0})
 
useEffect(()=>{
  setCounts({
    count1: a,
    count2: b
  })            // 데이터를 모아 한 번의 랜더링만 
})
```



## 4. `setInterval` 이슈

### `setState(callback)`을 쓰자
- `setState(value)` 방식은 구조가 복잡해지고, 여러 사람이 동시에 사용해야 하는 상황에서 동시성 문제가 생긴다.
- 이전 값을 참조하는 `setState(callback)`을 사용해야 한다.

```js
const [counter, setCounter] = useState(0)
// ❌
useEffect(()=> {
  setInterval(()=>{
    setCounter(counter-1)
    },1000)
},[])
```

- `setCounter`안에 있는 `counter`는 **`useEffect`의 콜백함수**가 실행될 때 저장된다.
- `useEffect`는 최초 **한 번만** 실행되므로, `counter`는 초기값인 0으로 변하지 않는다.
- `state`를 사용하면 그 값이 계속 유동적으로 변할 거라는 매직을 기대하는 휴먼 에러에서 발생한 오류다.
- `state`는 그저 값이며, `setState`를 이용해 값을 바꾸면, 해당 컴포넌트가 **리랜더링** 된다는 **규칙**만 갖고 있을 뿐이다.
- 추가로 `setCounter(counter-1)`는 1초마다 실행되지만, `state`가 `counter-1`로 변경된 후로는, `counter-1`는 값이 **변하지 않기 때문에** 더이상 랜더링 되지 않는다.

```js
// ✅
useEffect(()=> {
  setInterval(()=>{
    setCounter((current)=>current-1)
    },1000)
},[])
```
- 이는 `setState`의 매개변수로 `콜백함수`를 넣어 해결한다.
- 콜백함수의 첫 번째 인자는 **새롭게 갱신된 `state`**를 가져오기 때문에 이를 이용해, 값을 계속해서 바꿔준다.
- 이때 `callback`으로 처리한 `setState`는 `denpenency`에 **state값을** 넣지 않더라도 **`ESlinst` 오류**가 나지 않는다.
- **결론**: 리액트의 기본 공리를 항상 명심하되, test case를 진행하며 코드로 적용해야한다.



## 5. `useEffect` 내의 무한루프

```js
useEffect(()=>{
  setToggle(!toggle)
  // setToggle((toggle)=>!toggle)
  console.log('🤪');
},[toggle])
```
- `callback`이 실행되면, `toggle` 값을 바꾸고, `toggle` 값이 바뀌면 `callback`이 실행된다.



## 6. 컴포넌트는 언제 리랜더링 될까?(미해결)

1. `State`가 변경되었을 때
2. 부모 컴포넌트가 re-render 되었을 때
3. **`Props`가 변경되었을 때**  ....??

#### 나의 예전 사고의 흐름
- '`props`가 변경돼도 컴포넌트가 리랜더링 된다고?'
- '부모 컴포넌트의 `state`가 변경되어 리랜더링 되는 과정 중에 리랜더링 되는거 아닌가?'
- '`props`를 전달한 것은 `state`이기 때문에, `state`가 변경되면 `props`를 전달한 하위 컴포넌트도 diff 알고리즘에 의해 리랜더링되는거지!'

#### 확인해본 잘못된 예제

```js
const App = () => {
  let a = 1;
  return (
    <>
      <button
        onClick={() => {
           a++;
          console.log(a);
        }}
      >
        버튼
      </button>
      <SubComponent value={a}></SubComponent>
    </>
  );
};

const SubComponent = ({ value }) => {
  return <strong>{value}</strong>;
};
```

#### 예전 결론
- 테스트한 바에 따르면, `State` 값으로 넘긴 `props`만 리랜더링 된다.
- `APP`내에 선언한 `a` 변수를 `SubComponent`의 `props`로 전달했지만, 리랜더링이 되지 않았다.

#### 잘못 설계된 테스트 코드
- 컴포넌트 안에 선언되어있으면, 랜더링될때마다 다시 선언된다.
- return 이후에 랜더링 한 JSX 코드는 a가 0인 상태에서 랜더링 됐다.
- 부모 컴포넌트는 랜더링되지 않으니, 변수a는 값이 바뀔지라도 props로 전달한 값은 바뀐 값이 들어가지 않게 된다.
- 이후에도 `setState`를 이용해서 부모 컴포넌트만 랜더링 해보려고 했지만, 부모 컴포넌트 안에 선언한 `let a = 0` 까지 다시 선언되어, 바뀐 a 값이 자식 컴포넌트에 반영되지 않았다.

#### 다시 설계된 테스트 코드

```js
let a = 1;

const App = () => {
  const [update, setUpdate] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          a++;
          setUpdate(!update);
          console.log(a);
        }}
      >
        버튼
      </button>
      <SubComponent value={a}></SubComponent>
    </>
  );
};

const SubComponent = ({ value }) => {
  return <strong>{value}</strong>;
};
```
- a는 APP에 독립적인 전역위치에 선언하여, 컴포넌트가 리랜더링 되더라도 다시 선언되지 않게하였다.
- 버튼 클릭 시, 컴포넌트가 리랜더링하게 만들어, 전역변수 a 값을 증가시킨다.
- 그 결과, 컴포넌트가 리랜더링 될 때 a 값은 증가하며 `state`로 `props`를 넘겨주지 않더라도 자식 컴포넌트가 리랜더링되는 것을 확인할 수 있었다.
- 하지만 궁금한건 `props`만 변경되도 컴포넌트가 리랜더링 되는 가? 이다.
- 위의 경우는 `2. 부모 컴포넌트가 re-render 되었을 때` 경우에 해당되니 정확한 테스트 코드가 아니다.

#### 추후에 다시 생각해봐야겠다. 
- 지금 단계에서는 `props`만 변경되는 일을 찾기 힘들다. **상위 컴포넌트가 리랜더링**하면서 바뀐 `props`을 전달하는 예외 말고는 생각이 안난다.
- 이와 관련하여 인터넷 자료가 많이 없는 거 보니, 내가 이상한 포인트에 꽂힌 것 같다.


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

## 2. `map`으로 랜더링 하려면 `key`를 사용해야한다.

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