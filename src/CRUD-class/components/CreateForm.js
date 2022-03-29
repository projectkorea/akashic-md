import { Component } from 'react';

class CreateForm extends Component {
  render() {
    return (
      <form class='form'>
        <div>
          <label htmlFor='name'>이름: </label>
          <input name='name' />
          <br />
          <label htmlFor='price'>가격: </label>
          <input name='price' />
        </div>
        <input type='submit' value='생성'></input>
      </form>
    );
  }
}

export default CreateForm;

// {function (e) {
//   e.preventDefault();
//   let _cards = this.props.cards.concat({
//     id: this.props.totalCards + 1,
//     cardName: e.target.name.value,
//     price: Number(e.target.price.value),
//   });
//   this.props.onCreate(_cards);
// }.bind(this)}
