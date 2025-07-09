import { useState } from 'react';

const ListView = ({ list, onUpdate, onDelete }) => {
  const [updatedValue, setUpdatedValue] = useState('');

  const listView = list.map((item, index) => (
    <li key={index}>
      {item}
      <input onChange={(e) => setUpdatedValue(e.target.value)}></input>
      <button onClick={onUpdate(index, updatedValue)}>수정</button>
      <button onClick={onDelete(index)}>삭제</button>
    </li>
  ));

  return <div>{listView}</div>;
};

export default ListView;
