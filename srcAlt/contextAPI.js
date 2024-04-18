import { useState, useContext, createContext } from 'react'
import { A, Header } from './basicContextComp'

function App() {
  const StateContext = createContext();
  const [state, setState] = useState('')

  return (
    <StateContext.Provider value={{ state, setState }}>
      <Header />
      <A />
    </StateContext.Provider>
  )
}

function Header() {
  const { state } = useContext(StateContext);
  return (
    <div>
      <h1>헤더</h1>
      {state}
    </div>
  );
}

function A() {
  return (
    <div>
      <h1>A</h1>
      <B />
    </div>
  );
}

function B() {
  const { setState } = useContext(StateContext);
  return (
    <div>
      <h1>B</h1>
      <input onChange={(e) => setState(e.target.value)} />
    </div>
  );
}
