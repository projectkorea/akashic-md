import React, { useContext } from 'react';
import { TodoContext } from './App';

const Checklist = () => {
  const { todo, done } = useContext(TodoContext);

  return (
    <h3>
      "{todo}"(을)를 "{done}"했습니다.
    </h3>
  );
};

export default Checklist;
