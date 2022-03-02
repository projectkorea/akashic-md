# Tips

## 1. JSX 이벤트 핸들러

- 바닐라와는 다르게, 이벤트 핸들러는 `event` 객체를 인자로 받아와야한다.
- 리액트에서는 이벤트 핸들러 함수에 **매개변수로 받지 않고** `event`로 dom element `event`를 접근하는 것은 `deprecated` 됐다.

```jsx
<input onChange ={
  (event)=>{
    setInputValue(event.target.value)
  }}>
</input>
```

## 2. `State`로 참조형 데이터가 올 경우

- `object` 혹은 `array` 내의 일부 값만 바꿀 경우, 실제 object나 array의 변경이 일어나는 것이 아니기 때문에 React에서 `State` 값의 변경으로 인식하지 않아 리렌더링 명령이 호출되지 않는다.

```js
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: 'junha',
    school: 'S.UNIV',
    prefix: 'handsome',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newObj = { ...person, [name]: value };
    setPerson(newObj);
  };
  return (
    <div className='App'>
      <input name='name' value={person.name} onChange={handleChange} />
      <input name='school' value={person.school} onChange={handleChange} />
      <button
        onClick={() =>
          alert(
            `${person.prefix}한 ${person.name}님은 ${person.school}에 재학중입니다.`
          )
        }
      ></button>
    </div>
  );
}
export default App;
```
- `const newObj = { ...person, [name]: value };` 이 부분을 `const newObj = { [name]: value };` 이렇게 바꾸면, `[name]: value` 이 부분만 업데이트 되는 것이 아니라 `person`이라는 `State` 값 자체가 `{ [name]: value };`로 바뀌어버린다.


## 3. Props가 변경되면 컴포넌트가 다시 렌더링된다 ?? 🙅‍♂️

- 테스트한바에 따르면, `State` 값으로 넘긴 props만 리랜더링 된다.
- `APP`내에 선언한 `a` 변수를 `SubComponent`의 `props`로 전달했지만, 리랜더링이 되지 않았다.

```jsx
import { useState } from 'react';

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
  return <strog>{value}</strog>;
};

export default App;
```

## 6. DOM Elements의 Attribute가 다르다.

- 기본적인 DOM Element(div, span 등)들의 **Attribute는 camel case로** 작성한다.
  - 예: tabIndex, className 등
- 그러나 **‘data-’ 또는 ‘aria-’** 로 시작하는 Attribute는 예외다.
  - 예: data-type, aria-label 등
- HTML의 Attribute와 다른 이름을 가지는 Attribute가 있다.
  - 예 class → **className**, for → **htmlFor** 등
-  React에서만 쓰이는 새로운 Attribute가 있다.
   - 예: **key**, `dangerouslySetInnerHTML` 등

```js
<div>
  {names.map((item) => (
    <li key={item.key}>{item.value}</li>
  ))}
</div>
```
- HTML의 Attribute와 다른 동작 방식을 가진 Attribute가 있다.
  - 예 **checked**(defaultChecked), **value**(defaultValue), `style={{}}` 등

```js
input type="checkbox" checked={false} />
```

- HTML에서 checked 또는 value는 해당 값이 ‘초기값’으로 쓰이지만
React 내에서는 현재 값을 의미한다.
-  이 말은 즉, 위 예시처럼 checked 값이 false로 고정돼있는 경우에 사용자가 checkbox를 클릭하여도 값의 변화가 일어나지 않는다.
- 만약 ‘초기값’의 의미로 checked 또는 value를 사용하고 싶다면, defaultChecked, defaultValue Attribute를 설정해야 한다.


## 8. Object를 갖는 State를 만들 때 주의사항

```js
const [user, setUser] = useState({name: "junha", grade: 2})

setUser((current) => {
  current.grade = 1;
  return current;
})
```

- `object` 안의 grade가 변경되었지만, user 자체는 변경되지 않았기 때문에 리액트는 State의 변경을 감지하지 못한다.

```js
const [user, setUser] = useState({name: 'junha', grade: 2 })

setUser((current) => {
  const newUser = { ...current }
  newUser.grade = 1
return newUser
})
```
- 기존 user의 내용을 **새로운 object**에 담고 grade를 변경해야한다.

## 9. 많이 쓰는 이벤트

- `onClick`: Element를 클릭했을 때
- `onChange`: Element의 내용이 변경되었을 때(input의 텍스트를 변경, 파일 선택 등)
- `onKeyDown`, onKeyUp, onKeyPress: 키보드 입력이 일어났을 때
- `onDoubleClick`: Element를 더블 클릭했을 때
- `onFocus`: Element에 Focus되었을 때
- `onBlur`: Element가 Focus를 잃었을 때
- `onSubmit`: Form Element에서 Submit 했을 때

## 10. 이벤트 명명
- 보통은 코드를 읽을 때 쉽고 빠르게 이해할 수 있도록 `“on” + 동사` 또는 `“on” + 명사 + 동사` 형태로 작성한다. (`onClick`, `onButtonClick`, `onInputChange`)
- 핸들링 함수의 경우 마찬가지로 `“handle” + 동사` 또는 `“handle” + 명사 + 동사` 의 형태로 작성하며, “handle” 대신 이벤트명과 동일한 “on”을 앞에 붙여도 무방하다.

## 11. 이벤트 핸들러와 prop 함수 햇갈림 주의

```js
<InsertForm onInsert={(value) => console.log(value)}/>

<input onChange={()=>{...}} onInsert={onInsert}>
```

- `onChange`의 첫 인자는 이벤트객체가 들어가지만, `onInsert`는 커스텀 함수일 뿐이라 이벤트 객체가 들어가지 않는다.

## 12. map 사용시 key props를 부여하는 이유

- key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다. key는 element에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야한다.

```js
const tart_array = tart.map((item)=>{

import React from 'react';
import './App.css';

function App() {
    const tart = ["딸기", "무화과", "치즈"]
    const tart_array = tart.map((item)=>{
        return <div>{`${item} 타르트`}</div>
    })
    
  return (
    <div className="App">
        {tart_array}
    </div>
  );
}

export default App;
```
- key부분 안넣어도 됌? li만 넣는거야?
- 렌더링 한 항목에 부여할 id값이 마땅히 없다면 index를 key로 사용할 수 있습니다.

contentComments.map((list, index) =>
  <li key={index}>
    {list.name}
    {list.text}
  </li>
);
하지만 순서가 바뀔 수 있는 경우에는 key에 인덱스를 사용하는 것은 권장하지 않는다!!
이로인해 성능이 저하되거나 state와 관련된 문제가 발생할 수 있다!

만약 리스트에 key를 지정하지 않으면 React는 기본적으로 index를 key로 사용합니다

key는 형제 사이에서만 고유한 값이어야 한다.
key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다.

https://developer-talk.tistory.com/102

### 
```js
function App() {
  const [check, setCheck] = useState(false);
  const handleChange = (event) => {
    setCheck(event.target.checked);
  }
  
  return (
    <div className="App">
        <input type="checkbox" onChange={handleChange}/>
        <h2>{check? "시럽을 추가해주세요." : "시럽은 빼주세요."}</h2>
    </div>
  );
}
```
- event.target.checked를 통해 체크 여부를 확인할 수 있다.


## 13. JSX에서의 {}내에서는 &nbsp;가 먹지 않으니 템플릿리터럴 방법으로 공백을 구현한다.

```js
<div>{&nbsp `${money}`}</div> ❌
<div>{` ${money}`}</div> ✅
```

## 14. state 값이 바뀌어야 컴포넌트가 랜더링된다.

- li로 태그로 할때 state로 만들어야 업데이트가 된다.

```js
```

## 15. useState의 set함수는 비동기로 처리된다.

- newPrice로 빼줘야 갱신이 된다.
- `setPrice`는 비동기적으로 state를 처리하기 때문에 `setMoney`함수가 `price`값을 불러들일 때는 처리 전의 state를 받게된다.

❌
```js
const onCalc =() => {
    setPrice(data.reduce((acc,cur)=>acc+cur.price*cur.num,0))
    setMoney(price-price)
}
```

✅
```js
const onCalc =() => {
    const newPrice = data.reduce((acc,cur)=>acc+cur.price*cur.num,0)
    setPrice(newPrice)
    setMoney(money-newPrice)
}
```


