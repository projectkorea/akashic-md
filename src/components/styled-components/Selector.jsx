import styled from 'styled-components';

// &(a single ampersand) refers to all instances of the component;
// it is used for applying broad overrides:

const Thing = styled.div`
  color: blue;

  :hover {
    color: purple; // <Thing> when hovered, this is overridden by &:hover
  }

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as  a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 5px solid; // <Thing> inside another element labeled ".something-else"
  }
`;
function App() {
  return (
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className='something'>The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className='something-else'>
        <Thing>Splendid.</Thing>
      </div>
    </>
  );
}
export default App;
