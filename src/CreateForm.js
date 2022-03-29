import { Component } from 'react';

class CreateForm extends Component {
  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          let _cards = this.props.cards.concat({
            id: this.props.totalCards + 1,
            cardName: e.target.name.value,
            price: Number(e.target.price.value),
          });
          this.props.onCreate(_cards);
        }.bind(this)}
      >
        <label htmlFor='name'>이름: </label>
        <input name='name' />
        <label htmlFor='price'>가격: </label>
        <input name='price' />
        <input type='submit' value='생성'></input>
      </form>
    );
  }
}

export default CreateForm;
