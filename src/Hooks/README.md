# Hooks

## Custom Hook

- 자신만의 Hook을 만들면 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있습니다.
- UI 요소의 재사용성을 올리기 위해 컴포넌트를 만드는 것 처럼, 로직의 재사용성을 높이기 위해서는 Custom  Hook을 제작합니다
- 한 로직이 여러 번 사용될 경우 함수를 분리하는 것 처럼 Hook을 만드는 것일 뿐, 새로운 개념은 아닙니다.
- Hook의 이름은 ‘use’로 시작해야합니다.
- 한 Hook 내의 state는 공유되지 않습니다

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

## 시행착오

1. React Hook useEffect has a missing dependency

```js
const useClick = (callback) => {
  const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener('click', callback);
      }
    }, [callback]);
  return element;
};
```
- `[]`는 `useEffect` 함수 내에서 외부 데이터를 일절 사용하지 않을 때만 경고표시를 하지 않는다.
- 지금과 같이 `callback`을 외부에서 사용하면, dep에 적어둠으로써 버그를 방지해야한다.
- 훅 함수를 리액트 이벤트 사이클로써 이용하지 말고, state값이 변할 때 부수적으로 작동하는 sideEffect 용도로 사용하라는 말이 신선했다.


2. React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render.

```js
const useClick = (callback) => {
  const element = useRef();
  if(typeof callback !== "function"){
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener('click', callback);
      }
    }, [callback]);
  }
  return element;
};
```

- 훅은 `for문`, `if문`, `중첩함수` 내에서 호출 될 수 없다.
- `callback` 타입 체크를 원할 경우, 아래와 같이 얼리 리턴을 통해 해결한다.

```js
const useClick = (callback) => {
  
  const element = useRef();
  
  useEffect(() => {  
    if (typeof callback !== 'function') {
      return;
    }  /// 수정 코드: useEffect함수를 나감

    if (element.current) {
      element.current.addEventListener('click', callback);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', callback);
      }
    };
  }, [callback]);

  return typeof callback !== 'function' ? element : undefined;
};
```