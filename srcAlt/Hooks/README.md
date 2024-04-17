# Hooks




## useReducer

useReducer()
State Hook을 사용하기 위한 useState()나 Effect Hook을 사용하기 위한 useEffect() 외에도 다른 내장 Hook들이 많습니다.
이번에는 그중 하나인 useReducer()에 대해 알아보겠습니다.
useReducer()는 앞선 예제에서 살펴본 useState()의 대체 함수로 많이 사용되며, 아래와 같은 형태로 사용됩니다.
const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
reducer 함수는 현재 상태 객체와 수행할 행동 객체를 인자로 받아서 새로운 상태 객체를 반환하는 함수입니다.
dispatch 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용되는데 인자로 reducer 함수에 넘길 행동 객체를 받습니다.
행동 객체는 일반적으로 어떤 부류의 행동인지를 나타내는 type이나 해당 행동과 관련된 데이터를 담고 있습니다.
다시 말해, 컴포넌트에서 dispatch 함수에서 넘겨준 행동을 하면 reducer 함수가 이 행동에 따라서 상태를 변경해줍니다.
컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리할 수 있다.
즉, 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있습니다.



## useCallback

```js
  import React, { useCallback, useState, useMemo } from "react";
import "./App.css";

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

export default useToggle;
```

## APP
```js
import React from 'react';
import useToggle from './hooks/useToggle'

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

```js
const useClick = (callback) => {
  const element = useRef();
  useEffect(() => {  
    if (element.current) {
      element.current.addEventListener('click', callback);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', callback);
      }
    };
  }, [callback]);
};
```




## Custom Hook

- UI 요소의 재사용성을 올리기 위해 컴포넌트를 만드는 것처럼, 컴포넌트 로직을 함수로 뽑아내어 **로직의 재사용성**을 높일 수 있다.
- 이를 **커스텀 훅**이라고 부른다.
- 훅의 이름은 `use`로 시작하며, 한 Hook 내의 `state`는 공유되지 않는다.



