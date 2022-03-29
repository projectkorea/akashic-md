import { StateContext } from './basicContext';
import { useContext } from 'react';

export function Header() {
  const { state } = useContext(StateContext);
  return (
    <div>
      <h1>헤더</h1>
      {state}
    </div>
  );
}

export function A() {
  return (
    <div>
      <h1>A</h1>
      <B />
    </div>
  );
}

export function B() {
  const { setState } = useContext(StateContext);
  return (
    <div>
      <h1>B</h1>
      <input onChange={(e) => setState(e.target.value)} />
    </div>
  );
}
