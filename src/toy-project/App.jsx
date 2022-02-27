import { useState, useEffect, useMemo } from 'react';
import useToggle from './hooks/useToggle';
import ListView from './components/ListView';
import UserInput from './components/UserInput';

const App = () => {
  const [list, setList] = useState([]);
  const [isOn, toggle] = useToggle();

  const onCreate = (inputValue) => {
    const newList = [...list, inputValue];
    setList(newList);
  };

  const onUpdate = (index, updatedValue) => () => {
    const newList = [
      ...list.slice(0, index),
      updatedValue,
      ...list.slice(index + 1),
    ];
    setList(newList);
  };

  const onDelete = (index) => () => {
    list.splice(index, 1);
    const newList = Array.from(list);
    setList(newList);
  };

  return (
    <>
      <button onClick={toggle}> {isOn ? '앱 끄기' : '앱 시작하기'}</button>
      {isOn && (
        <div>
          <UserInput onCreate={onCreate}></UserInput>
          <ListView
            list={list}
            onDelete={onDelete}
            onUpdate={onUpdate}
          ></ListView>
        </div>
      )}
    </>
  );
};

export default App;
