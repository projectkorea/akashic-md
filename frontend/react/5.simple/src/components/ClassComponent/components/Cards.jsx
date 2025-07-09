import { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const onChangeName = function (name) {
      return function () {
        this.setState({ currentCard: name });
      }.bind(this);
    }.bind(this);

    const onCalcMoney = function (price) {
      return function () {
        if (this.state.money >= price) {
          this.setState({ money: this.state.money - price });
        } else {
          alert("You Can't buy it");
        }
      }.bind(this);
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

    const cards = this.props.cards.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        cardName={item.cardName}
        price={item.price}
        onChangeName={onChangeName(item.cardName)}
        onCalcMoney={onCalcMoney(item.price)}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onClick={function () {
          this.state({ currentCard: item.cardName });
        }.bind(this)}
      ></Card>
    ));

    return <main className='wrapper'>{cards}</main>;
  }
}

export default Cards;
