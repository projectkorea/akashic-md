import { useEffect, useState } from 'react';
import Timer from './components/Timer';

const App = () => {
  const [list, setList] = useState(['공부용', '요리용', '게임용']);
  const timerList = list.map((item) => (
    <Timer key={item} content={item}></Timer>
  ));
  return <>{timerList}</>;
};

export default App;
