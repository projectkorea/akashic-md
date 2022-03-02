import { Component } from 'react';

class App extends Component {
  state = { isLoading: true, count: 0 };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }
  add = () => {
    if (!this.state.isLoading) {
      this.setState((current) => ({ count: current.count + 1 }));
    }
  };
  minus = () => {
    if (!this.state.isLoading) {
      this.setState((current) => ({ count: current.count - 1 }));
    }
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {' '}
        <h1>{isLoading ? 'Loading...' : 'we are ready'}</h1>{' '}
        <h1>The number is: {this.state.count}</h1>{' '}
        <button onClick={this.add}>Add</button>{' '}
        <button onClick={this.minus}>Minus</button>{' '}
      </div>
    );
  }
}

export default App;
