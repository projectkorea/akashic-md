import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 1, b: 1 };
  }
  render() {
    return (
      <button
        onClick={() => {
          for (let i in this) {
            console.log(i);
          }
          console.log(this.setState);
          this.setState({ a: 2 });
          console.log(this.state);
        }}
      >
        버튼
      </button>
    );
  }
}

export default App;
