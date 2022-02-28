import { useState, useEffect } from 'react';
import Dog from './Apis/Dog';

const App = () => {
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(
    (search) => {
      const timeout = setTimeout(() => {
        setIsActive(false);
      }, 500);
      return () => clearTimeout(timeout);
    },
    [search]
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsActive(true);
        }}
      ></input>
      <Dog search={search} isActive={isActive}></Dog>
    </>
  );
};

export default App;
