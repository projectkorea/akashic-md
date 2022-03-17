import { RecoilRoot, atom, selector } from 'recoil';
import CharacterCounter from './CharacterCounter';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const textCountState = selector({
  key: 'textCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
