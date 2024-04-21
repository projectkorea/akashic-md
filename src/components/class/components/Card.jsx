import { Component } from 'react';
import UpdateForm from './UpdateForm';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    return (
      <div
        className='card-wrapper'
        onClick={function () {
          this.props.onChangeName();
          this.props.onCalcMoney();
        }.bind(this)}
      >
        <span className='card-title'>{this.props.cardName}</span>
        <UpdateForm
          data={{ id: this.props.id, price: this.props.price }}
          onCreate={this.props.onCreate}
          onUpdate={this.props.onUpdate}
        ></UpdateForm>
        <button
          className='btn-delete'
          onClick={function () {
            this.props.onDelete(this.props.id);
          }.bind(this)}
        >
          DEL
        </button>
      </div>
    );
  }
}

export default Card;
