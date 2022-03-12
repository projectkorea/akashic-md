import React, { createContext } from 'react';
import Checklist from './Checklist';

export const TodoContext = createContext();

const App = () => {
  const myTodo = {
    done: '완료',
    todo: '코딩 공부하기',
  };

  return (
    <>
      <TodoContext.Provider value={myTodo}>
        <Checklist />
      </TodoContext.Provider>
    </>
  );
};

export default App;
