import { useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const focusHandler = () => {
    inputRef.current.focus();
  };
  const clickHandler = () => {
    inputRef.current.value += '값이 바꼈어용';
  };
  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={clickHandler}>값 바꾸기</button>
      <button onClick={focusHandler}>input으로 포커스</button>
    </div>
  );
};
export default App;
