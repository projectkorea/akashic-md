import { useState, useEffect, useRef } from 'react';

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
  const clickElem = useClick(() => window.confirm('저를 누르샸습니까?'));

  return (
    <>
      <button ref={clickElem}>버튼</button>
    </>
  );
};

export default App;
