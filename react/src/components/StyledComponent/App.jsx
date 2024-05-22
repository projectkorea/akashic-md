import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    '--blue-sky-light': ' rgb(80, 185, 255)',
    '--blue-sky-basic': '#0066ff',
    '--blue-sky-dark': '#003a92',
  },
};

const FancyContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const FancyButton = styled.button`
  width: 100px;
  height: 50px;
  border: 0px none;
  background-color: ${(props) =>
    props.active ? 'rgb(232, 255, 100)' : 'rgb(145, 49, 255)'};
`;

const FancyDiv = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  position: relative;
  padding: 50px 0 0 0;
  font-size: 20px;
  background-color: darkblue;
  flex-direction: ${(props) => (props.toggle ? "row-reverse" : "column")};
  :hover {
    background-color: yellow;
  }
  ::after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-color: tomato;
  }
  div {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: blue;
    div {
      width: 50px;
      height: 50px;
      background-color: skyblue;
    }
  }
`;

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <FancyContainer>
        <FancyButton>그냥 버튼</FancyButton>
        <FancyButton active>활성화 버튼</FancyButton>
        <FancyDiv toggle={toggle}>
          FancyDIV
          <div>
            바깥쪽 DIV1
            <div>안쪽 DIV</div>
            <button onClick={() => setToggle(!toggle)}>버튼</button>
          </div>
        </FancyDiv>
      </FancyContainer>
    </ThemeProvider>
  );
}

export default App;
