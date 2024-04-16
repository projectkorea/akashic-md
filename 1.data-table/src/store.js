import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/config';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
