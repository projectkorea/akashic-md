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