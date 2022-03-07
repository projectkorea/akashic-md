import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
