import AddNumber from './containers/AddNumber';
import DisplayNumber from './containers/DisplayNumber';

const App = () => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h1>Root</h1>
      <AddNumber></AddNumber>
      <DisplayNumber
        test={`Props from App can be used in presentaional component directly.
        beacuse of 'connect funcntion'`}
      ></DisplayNumber>
    </div>
  );
};

export default App;
