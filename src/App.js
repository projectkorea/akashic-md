import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-styles';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import store from './store';

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
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
