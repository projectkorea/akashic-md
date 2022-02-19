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
      money: 7200000,
      cards: [
        { id: 1, cardName: 'Garen', price: 10000 },
        { id: 2, cardName: 'Xreath', price: 680000 },
        { id: 3, cardName: 'Viego', price: 30000 },
      ],
    };
  }
  render() {
    const onChangeName = function (name) {
      return function () {
        this.setState({ currentCard: name });
      }.bind(this);
    }.bind(this);

    const onCalc = function (price) {
      return function () {
        if (this.state.money >= price) {
          this.setState({ money: this.state.money - price });
        } else {
          alert("You Can't buy it");
        }
      }.bind(this);
    }.bind(this);

    const onCreate = function (
      cardsParam,
      totalCardsParam = this.state.totalCards
    ) {
      this.setState({ cards: cardsParam, totalCards: totalCardsParam });
    }.bind(this);

    const onUpdate = function (_id, _price) {
      let _cards = Array.from(this.state.cards);
      // cards에 id를 찾아서 price를 수정
      for (let idx = 0; idx < this.state.totalCards; idx++) {
        if (_id === _cards[idx]['id']) {
          _cards[idx] = {
            id: _id,
            price: _price,
            cardName: _cards[idx]['cardName'],
          };
          break;
        }
      }
      this.setState({
        cards: _cards,
      });
    }.bind(this);

    const onDelete = function (_id) {
      if (window.confirm('Do you want to Delete this Card?')) {
        let _cards = Array.from(this.state.cards);
        for (let idx = 0; idx < this.state.totalCards; idx++) {
          if (_id === _cards[idx]['id']) {
            _cards.splice(idx, 1);
            break;
          }
        }
        this.setState({
          cards: _cards,
        });
      }
    }.bind(this);

    let cards = [];

    for (let elem of this.state.cards) {
      cards.push(
        <Card
          key={elem.id}
          id={elem.id}
          cardName={elem.cardName}
          price={elem.price}
          onChangeName={onChangeName(elem.cardName)}
          onCalc={onCalc(elem.price)}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onClick={function () {
            this.state({ currentCard: elem.cardName });
          }.bind(this)}
        ></Card>
      );
    }
    return (
      <div className='App'>
        <div className='header'>
          <h1>{`Your Choice is ${this.state.currentCard}`}</h1>
          <h1>{`자산:${this.state.money.toLocaleString()}`} &#8361;</h1>
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
