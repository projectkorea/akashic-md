import DetailsContainer from './containers/DetailsContainer';
import DisplayContainer from './containers/DisplayContainer';
import DummyComponent from './components/DummyComponent';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <DetailsContainer />
      <DisplayContainer />
      <DummyComponent />
    </Provider>
  );
};

export default App;
