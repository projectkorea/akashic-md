import { RecoilRoot, atom, selector } from 'recoil';
import CharacterCounter from './CharacterCounter';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter></CharacterCounter>
    </RecoilRoot>
  );
}

export default App;
