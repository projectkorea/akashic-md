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
  background-color: ${(props) => props.theme.colors['--blue-sky-light']};
  div {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors['--blue-sky-basic']};
    div {
      width: 50px;
      height: 50px;
      background-color: ${(props) => props.theme.colors['--blue-sky-dark']};
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FancyContainer>
        <FancyButton>그냥 버튼</FancyButton>
        <FancyButton active>활성화 버튼</FancyButton>
        <FancyDiv>
          FancyDIV
          <div>
            바깥쪽 DIV
            <div>안쪽 DIV</div>
          </div>
        </FancyDiv>
      </FancyContainer>
    </ThemeProvider>
  );
}

export default App;
