import { useState, useEffect } from 'react';

function SubComponent({ count }) {
  useEffect(() => {
    console.log(`SubComponent is re-rendered by props`);
  }, [count]);

  return <h1>{count}</h1>;
}

function App(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`effect: ${count}`);
    return () => {
      console.log(`clean-up: ${count}`);
    };
  }, [count]);

  return (
    <div className='App'>
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={setCount(count + 1)}>+</button>
      <SubComponent count={count}></SubComponent>
    </div>
  );
}

export default App;
