import { Component } from 'react';
import './App.css';
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    const props = Object.entries(this.props);
    return (
      <div
        className={this.props.cardName}
        onClick={function () {
          this.props.onChangeName();
          this.props.onCalc();
        }.bind(this)}
      >
        <h4>state 상태: {String(this.state.isActive)}</h4>
        <h4>전달받은 Props 목록</h4>
        <button
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          활성화 버튼
        </button>
        <ul>
          {props.map((prop, index) => (
            <li key={index}>
              {prop[0]} : {prop[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: '',
      canBuy: '',
    };
  }
  render() {
    return (
      <div className='App'>
        <h1>{`Your Choice is ${this.state.currentCard}`}</h1>
        <h1>{`able to buy? ${this.state.canBuy}`}</h1>
        <div className='wrapper'>
          <Card
            type='black'
            lv='32'
            str='100'
            cardName='a'
            data-money={20000}
            onChangeName={function () {
              this.setState({ currentCard: 'a' });
            }.bind(this)}
            onCalc={function () {
              this.setState({ canBuy: 'yes' });
            }.bind(this)}
          ></Card>
          <Card
            type='red'
            lv='68'
            str='310'
            cardName='b'
            data-money={910000}
            onChangeName={function () {
              this.setState({ currentCard: 'b' });
            }.bind(this)}
            onCalc={function () {
              this.setState({ canBuy: 'yes' });
            }.bind(this)}
          ></Card>
          <Card
            type='blue'
            lv='17'
            str='20'
            cardName='c'
            data-money={30000}
            onChangeName={function () {
              this.setState({ currentCard: 'c' });
            }.bind(this)}
            onCalc={function () {
              this.setState({ canBuy: 'no' });
            }.bind(this)}
          ></Card>
        </div>
      </div>
    );
  }
}

export default App;
