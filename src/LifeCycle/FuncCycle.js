import { useState, useEffect } from 'react';

function SubComponent({ count }) {
  useEffect(() => {
    console.log(
      `2. SubComponent is (re)rendered by props which is App's State`
    );
    return () => {
      console.log(`5. SubEffect clean-up: ${count}`);
    };
  }, [count]);

  return <h1>{count}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`3. effect: ${count}`);
    return () => {
      console.log(`4. clean-up: ${count}`);
    };
  }, [count]);

  return (
    <div className='App'>
      {console.log('1. APP render')}
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count % 4 === 0 && <SubComponent count={count}></SubComponent>}
    </div>
  );
}

export default App;
