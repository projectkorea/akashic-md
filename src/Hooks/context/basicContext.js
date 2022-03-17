// 안녕하세요 useContext을 이용한 전역 state 관리입니다.

import { useState, createContext } from 'react';
import { A, Header } from './basicContextComp';

export const StateContext = createContext();

function App() {
  const [state, setState] = useState('');

  return (
    <StateContext.Provider value={{ state, setState }}>
      <Header />
      <A />
    </StateContext.Provider>
  );
}

export default App;
