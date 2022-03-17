import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, textCountState } from './App';

function CharacterCounter() {
  const [state, setState] = useRecoilState(textState);
  const countState_readonly = useRecoilValue(textCountState);
  return (
    <>
      <input onChange={(e) => setState(e.target.value)} />
      <p>Echo:{state}</p>
      <p>Character Count: {countState_readonly}</p>
    </>
  );
}

export default CharacterCounter;
