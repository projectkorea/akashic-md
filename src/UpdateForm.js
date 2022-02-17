import { Component } from 'react';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.data.price,
    };
  }
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
        <input
          className='input-mod'
          placeholder='price'
          value={this.state.price}
          name='price'
        ></input>
        <input className='btn-modify' type='submit' value='MOD'></input>
      </form>
    );
  }
}

export default UpdateForm;
