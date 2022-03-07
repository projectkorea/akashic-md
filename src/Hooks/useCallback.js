// 함수 생성 자체가 오래 걸리는 경우, 함수를 자식 컴포넌트에 props로 넘겨줄 때 useCallback()을 사용하는 것이 좋습니다.
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
