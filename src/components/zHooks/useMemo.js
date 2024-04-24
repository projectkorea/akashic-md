import { useMemo, useState } from 'react';

function App() {

  const [isOn, setIsOn] = useState(false);
  const [users, setUsers] = useState([
    { active: true },
    { active: true },
    { active: false },
  ]);

  const countActiveUser = () => {
    console.log('사용자 수 세는중...');
    return users.filter((user) => user.active).length;
  };

  const count = useMemo(() => countActiveUser(), [users]);

  return (
    <div>
      <h1>{`활성 사용자 수: ${count}`}</h1>
      <button onClick={() => setIsOn((isOn) => !isOn)}>리랜더링 하기</button>
      <button
        onClick={() => {
          setUsers(Array.from(users).concat({ active: true }));
        }}
      >
        사용자 추가하기
      </button>
    </div>
  );
}

export default App;
