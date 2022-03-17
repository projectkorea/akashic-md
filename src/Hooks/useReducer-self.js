import { useReducer } from 'react';

function App() {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const initCounterState = { count: 0 };

  const [counter, counterDispatch] = useReducer(
    counterReducer,
    initCounterState
  );
  return (
    <>
      <div>{counter.count}</div>
      <button onClick={() => counterDispatch({ type: 'INCREMENT' })}>
        increment
      </button>
      <button onClick={() => counterDispatch({ type: 'DECREMENT' })}>
        decrement
      </button>
    </>
  );
}

export default App;
