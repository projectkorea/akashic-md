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
        className='card-wrapper'
        onClick={function () {
          this.props.onChangeName();
          this.props.onCalc();
        }.bind(this)}
      >
        <span className='card-title'>{this.props.cardName}</span>
        <button
          className='btn-active'
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          ON
        </button>
        <ul>
          {props.map((prop, index) => (
            <li key={index}>
              {prop[0]} : {prop[1]}
            </li>
          ))}
        </ul>
        <button
          className='btn-delete'
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          DEL
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCards: 3,
      currentCard: '',
      canBuy: '',
      cards: [
        { id: 1, cardName: 'Garen', price: 10000 },
        { id: 2, cardName: 'Xreath', price: 680000 },
        { id: 3, cardName: 'Viego', price: 30000 },
      ],
    };
  }
  render() {
    let cards = [];

    const onChangeName = function (name) {
      return function () {
        this.setState({ currentCard: { name } });
      }.bind(this);
    }.bind(this);

    const onCalc = function (answer) {
      return function () {
        this.setState({ canBuy: { answer } });
      }.bind(this);
    }.bind(this);

    for (let elem of this.state.cards) {
      cards.push(
        <Card
          key={elem.id}
          cardName={elem.cardName}
          price={elem.price}
          onChangeName={onChangeName(elem.cardName)}
          onCalc={onCalc(elem.price)}
        ></Card>
      );
    }
    return (
      <div className='App'>
        <div className='header'>
          <h1>{`Your Choice is ${this.state.currentCard}`}</h1>
          <h1>{`able to buy? ${this.state.canBuy}`}</h1>
        </div>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            let _cards = this.state.cards.concat({
              id: this.state.totalCards + 1,
              cardName: e.target.name.value,
              price: Number(e.target.price.value),
            });
            this.setState({
              cards: _cards,
              totalCards: this.state.totalCards + 1,
            });
          }.bind(this)}
        >
          <label>이름: </label>
          <input name='name'></input>
          <label>가격: </label>
          <input name='price'></input>
          <input type='submit' value='생성'></input>
        </form>
        <div className='wrapper'>{cards}</div>
      </div>
    );
  }
}

export default App;
