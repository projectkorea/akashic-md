import { useState, useCallback } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('junha');
  const [lastName, setLastName] = useState('kim');
  // 이름과 성이 바뀔 때마다 풀네임을 메모이제이션

  const getfullName = useCallback(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return (
    <>
      {getfullName()}
      <button onClick={() => setFirstName('준하')}>버튼</button>
    </>
  );
};
export default App;
