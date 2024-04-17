import React, { useState, useMemo } from 'react';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [string, setString] = useState('hi');
  const [todoList, setTodoList] = useState([]);
  const isLimitReached = useMemo(() => todoList.length >= 10, [todoList]);

  const handleInsert = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    });
  };

  const handleComplete = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };

  const handleRemove = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div className='App'>
      <button
        data-id={'abc'}
        data-junha={'my name is junha'}
        onClick={(e) =>
          console.log(e.target.dataset.id, e.target.dataset.junha, string)
        }
      >
        abc버튼
      </button>
      <input value={string} onChange={(e) => setString(e.target.value)}></input>
      <InsertForm onInsert={handleInsert} disabled={isLimitReached} />
      <ListView
        todoList={todoList}
        onComplete={handleComplete}
        onRemove={handleRemove}
      />
      {isLimitReached && (
        <div
          style={{
            padding: '8px 16px',
            border: '1px solid #FA466A',
            backgroundColor: '#0066ff',
            color: '#0066ff',
            marginBottom: 16,
          }}
        >
          ※ 할일 목록이 너무 많습니다.
        </div>
      )}
    </div>
  );
}

export default App;
