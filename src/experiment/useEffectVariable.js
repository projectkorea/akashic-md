import { useEffect } from 'react';

function App() {
  let a = 1;

  useEffect(
    () => console.log(`일반 변수는, useEffect의 감시대상 아닌데요?${a}`),
    [a]
  );
  return (
    <>
      <button
        onClick={() => {
          console.log(a);
          a += 1;
        }}
      >
        일반 변수 증가시키기
      </button>
    </>
  );
}

export default App;
