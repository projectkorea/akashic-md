# Hooks

- 컴포넌트 로직을 함수로 뽑아내어 **로직의 재사용성**을 높이기 위해 사용된다.
- UI 요소의 재사용성을 올리기 위해 컴포넌트를 만드는 것과 비슷하다.
- 훅의 이름은 `use..`. 한 Hook 내의 `state`는 다른 훅에서 공유되지 않는다.

## useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, initFn?)
```

- 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리하거나, 컴포넌트 바깥에 작성 할 수 있음.

```js
import, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // 버튼 클릭 시 디스패치 함수를 통해 액션을 전달하여 상태를 업데이트합니다.
  const handleClick = () => {
    dispatch({ type: 'increment' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
```

- `reducer`
  - 현재 상태 객체와 수행할 행동 객체를 인자로 받아서 새로운 상태 객체를 반환하는 함수
- `dispatch`
  - 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용되는데 인자로 reducer 함수에 넘길 행동 객체를 받음
- `actoin`
  - `dispatch` 함수에서 넘겨준 행동을 하면 `reducer` 함수가 이 행동에 따라서 상태를 변경




## useCallback

```js
import { useCallback, useState, useMemo } from "react";

const App = () => {
  const [string, setString] = useState("");
  const [stringList, setStringList] = useState([]);

  const change = useCallback((e) => {
    setString(e.target.value);
  }, []);

  const insert = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }, [string, stringList]);

  // useCallback()을 이용해 리스트 내 문자열을 이어 붙인 sum 함수를 완성하세요.
  const sum = useCallback((li)=>{
    return li.join(" ")
  },[insert])

  const result = useMemo(() => sum(stringList), [stringList, sum]);

  return (
    <div>
      <input type="text" onChange={change} />
      <button onClick={insert}>문자열 붙이기</button>
      <br />
      {result}
    </div>
  );
};

export default App;
```

### useToggle

```js
import React, {useState} from "react"

const useToggle =(arg = false) => {
    const [isOn, setIsOn] = useState(arg)
    const toggle =() => {
        isOn? setIsOn(false) : setIsOn(true)
    }
    return {isOn, toggle}
}

function App() {
const {isOn, toggle} = useToggle(false)

  return (
    <div className="App">
      <button onClick={toggle}>{isOn? "켜짐" : "꺼져"}</button>    
    </div>
  );
}

export default App;
```

### useClick


```js
const useClick = (callback) => {
  const ref = useRef();
  useEffect(() => {  
    if (ref.current) {
      ref.current.addEventListener('click', callback);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', callback);
      }
    };
  }, [callback]);
  return ref;
};

function App() {
const ref = useClick(callback)

  return (
    <div className="App">
      <button ref={elemRef}></button>
    </div>
  );
```
