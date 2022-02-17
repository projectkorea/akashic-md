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
          this.props.onCreate(_cards, this.props.totalCards + 1);
        }.bind(this)}
      >
        <label>이름: </label>
        <input name='name'></input>
        <label>가격: </label>
        <input name='price'></input>
        <input type='submit' value='생성'></input>
      </form>
    );
  }
}

export default CreateForm;
