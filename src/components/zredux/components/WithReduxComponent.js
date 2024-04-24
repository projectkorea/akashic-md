import { useState } from 'react';
import store from '../store';

const WithReduxComponent = () => {
  const [storeData, setStoreData] = useState(store.getState());
  store.subscribe(() => setStoreData(store.getState()));
  return (
    <div style={{ border: '2px solid red' }}>
      <h1>Redux 스토어에 있는 값 입니다.</h1>
      <h2>{JSON.stringify(storeData)}</h2>
    </div>
  );
};

export default WithReduxComponent;
