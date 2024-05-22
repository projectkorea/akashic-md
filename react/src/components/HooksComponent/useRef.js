import { useEffect, useRef } from 'react';

const useClick = (callback) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', callback);
    }
  }, [callback]);

  return element;
};

const App = () => {
  const clickElemRef = useClick(() => window.confirm('저를 누르셨죠?'));

  return (
    <>
      <button ref={clickElemRef}>버튼</button>
    </>
  );
};

export default App;
