import { Component } from 'react';
import Header from './components/Header';
import CreateForm from './components/CreateForm';
import Cards from './components/Cards';
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
    const onCreate = function (
      cardsParam,
      totalCardsParam = this.state.totalCards
    ) {
      this.setState({ cards: cardsParam, totalCards: totalCardsParam });
    }.bind(this);

    return (
      <div className='App'>
        {console.log(this.setState)}
        {console.log(this.updater.enqueueSetState)}
        <Header
          totalCards={this.state.totalCards}
          currentCard={this.state.currentCard}
          money={this.state.money}
        />
        <CreateForm
          cards={this.state.cards}
          totalCards={this.state.totalCards}
          onCreate={onCreate}
        />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
