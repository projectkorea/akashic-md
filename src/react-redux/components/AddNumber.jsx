import { useState } from 'react';

const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1);
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h1>Add Number</h1>
      <input type='text' readOnly value={size} />
      <input type='button' value='+' onClick={() => onClick(size)} />
      <input
        type='button'
        value='size up'
        onClick={() => {
          const newSize = size + 1;
          setSize(newSize);
        }}
      />
    </div>
  );
};

export default AddNumber;
