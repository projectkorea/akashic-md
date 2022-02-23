import { useRef } from 'react';

const App = () => {
  const inputRef = useRef(null);
  const onButtonClick1 = () => {
    inputRef.current.focus();
  };
  const onButtonClick2 = () => {
    inputRef.current.value += '값이 바꼈어용';
  };
  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={onButtonClick1}>input으로 포커스</button>
      <button onClick={onButtonClick2}>input으로 포커스</button>
    </div>
  );
};
export default App;
