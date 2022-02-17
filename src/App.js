import { Component } from 'react';
import Card from './Card';
import CreateForm from './CreateForm';
import './App.css';

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

    const onCreate = function (cardsParam, totalCardsParam) {
      this.setState({ cards: cardsParam, totalCards: totalCardsParam });
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
        <CreateForm
          cards={this.state.cards}
          totalCards={this.state.totalCards}
          onCreate={onCreate}
        ></CreateForm>
        <div className='wrapper'>{cards}</div>
      </div>
    );
  }
}

export default App;
