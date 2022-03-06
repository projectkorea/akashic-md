// useReducer()
// State Hook을 사용하기 위한 useState()나 Effect Hook을 사용하기 위한 useEffect() 외에도 다른 내장 Hook들이 많습니다.
// 이번에는 그중 하나인 useReducer()에 대해 알아보겠습니다.
// useReducer()는 앞선 예제에서 살펴본 useState()의 대체 함수로 많이 사용되며, 아래와 같은 형태로 사용됩니다.
// const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)

// 여기서 reducer 함수는 현재 상태 객체와 수행할 행동 객체를 인자로 받아서 새로운 상태 객체를 반환하는 함수입니다.
// 그리고 dispatch 함수는 컴포넌트 내에서 상태 변경을 일으키기 위해서 사용되는데 인자로 reducer 함수에 넘길 행동 객체를 받습니다.
// 행동 객체는 일반적으로 어떤 부류의 행동인지를 나타내는 type이나 해당 행동과 관련된 데이터를 담고 있습니다.
// 다시 말해, 컴포넌트에서 dispatch 함수에서 넘겨준 행동을 하면 reducer 함수가 이 행동에 따라서 상태를 변경해줍니다.
// 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리할 수 있다.
// 즉, 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있습니다.

import React, { useReducer } from 'react';
import './App.css';

// count의 초기 state를 0으로 설정하세요.
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  // useReducer()를 호출하세요.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
export default App;
