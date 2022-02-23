import React, { useState, useCallback } from 'react';

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault(); // 기본적인 HTML 동작으로 인해 페이지가 새로고침 되는 것을 방지
      if (typeof onInsert === 'function' && inputValue) {
        // onInsert가 정상적인 함수인 지 확인하여 에러 방지
        onInsert(inputValue);
      }
      setInputValue('');
    },
    [onInsert, inputValue]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button type='submit'>등록</button>
    </form>
  );
};

export default InsertForm;
