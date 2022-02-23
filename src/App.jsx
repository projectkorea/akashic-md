import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            console.log(this);
          }}
        ></button>
        {}
      </>
    );
  }
}

// const SubComponent = ({ value }) => {
//   return <strog>{value}</strog>;
// };

export default App;
