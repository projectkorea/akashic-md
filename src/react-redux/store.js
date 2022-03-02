import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 };
  }
  if ((action.type = 'INCREMENT')) {
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window._REDUX_DEVTOOLS__ && window.REDUX_DEVTOOLS_EXTENSION__());
