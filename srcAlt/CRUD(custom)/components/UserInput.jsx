import { useState } from 'react';

const UserInput = ({ onCreate }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(inputValue);
        }}
      >
        <input onChange={(e) => setInputValue(e.target.value)}></input>
        <input type='submit'></input>
      </form>
    </>
  );
};

export default UserInput;
