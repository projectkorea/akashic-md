import { Component } from 'react';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      price: this.props.data.price,
    };
  }
  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(this.state.id, this.state.price);
        }.bind(this)}
      >
        <input
          className='input-mod'
          placeholder='price'
          value={this.state.price}
          name='price'
          onChange={function (e) {
            this.setState({ price: e.target.value });
          }.bind(this)}
        ></input>
        <input className='btn-modify' type='submit' value='MOD'></input>
      </form>
    );
  }
}

export default UpdateForm;
