import React from 'react';
import './ListView.css';

const ListView = ({ todoList, onComplete, onRemove }) => {
  return (
    <div className='listview'>
      <ol>
        {todoList.map((item, index) => {
          return (
            <li key={item.key} className={item.isCompleted ? 'completed' : ''}>
              <span>{item.value}</span>
              <button
                type='button'
                onClick={() => {
                  if (typeof onComplete === 'function') {
                    onComplete(index);
                  }
                }}
              >
                완료
              </button>
              <button
                className='remove'
                type='button'
                onClick={() => {
                  if (typeof onRemove === 'function') {
                    onRemove(index);
                  }
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ListView;
