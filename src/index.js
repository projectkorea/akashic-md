import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './react-redux/store';
// import App from './CRUD system/App';
// import App from './Life Cycle/FuncCycle';
// import App from './styled-components/App';
// import App from './App';
// import App from './Hooks/useClick';
// import App from './CRUD system/setTimeout/App';
// import App from './React-Ajax/AppLoading';
// import App from './Todo_functional/App';
// import App from './toy-project/App';
// import App from './React-Ajax/AppApis';
import App from './react-redux/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
