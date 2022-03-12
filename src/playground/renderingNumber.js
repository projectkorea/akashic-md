import { useState, useEffect } from 'react';

const App = () => {
  const [state, setState] = useState(0);

  // useEffect(() => setTimeout(() => setState(1), 0), []); // double render 0, 1

  // setTimeout(() => setState(1), 0); // triple render 0, 1, 1

  setTimeout(() => {
    console.log('setTimeout', state);
    setState(1);
  }, 0);

  console.log('render', state);
  return <div>1</div>;
};

export default App;

// setState로 같은 값을 업데이트 하면 리랜더링이 될까? 안될까?
// state값을 값을 주로 주면, state값이 두 번 이상 변하지 않으면 setState함수를 이용하더라도 리랜더링 하지 않는다.!!😱
