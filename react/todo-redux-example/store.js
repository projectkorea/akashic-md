import { createStore } from 'redux';

export default createStore((state, action) => {
  if (state === undefined) {
    return { name: 'HAHAHA HUSBAND', money: 10000 };
  }
  if (action.type === 'MONEY_INCREASE') {
    return { ...state, money: state.money + action.money };
  }
  if (action.type === 'MONEY_DECREASE') {
    return { ...state, money: state.money - action.money };
  }
  return state;
});
