import { Component } from 'react';

class Comp extends Component {
  render() {
    console.log(typeof this.props.num);
    return <div>1</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'junha',
      age: 27,
    };
  }
  render() {
    return (
      <div>
        <Comp num={2}></Comp>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button
          onClick={function () {
            this.setState({ name: 'leo' });
            console.log(this.state);
          }.bind(this)}
        >
          setState 호출
        </button>
      </div>
    );
  }
}

export default App;
