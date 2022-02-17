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
    const props = Object.entries(this.props);
    const onSubmit = function () {};
    const _cards = 1;
    return (
      <div
        className='card-wrapper'
        onClick={function () {
          this.props.onChangeName();
          this.props.onCalc();
        }.bind(this)}
      >
        <span className='card-title'>{this.props.cardName}</span>
        <button
          className='btn-active'
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          ON
        </button>
        <ul>
          {props.map((prop, index) => (
            <li key={index}>
              {prop[0]} : {prop[1]}
            </li>
          ))}
        </ul>
        <UpdateForm data={_cards} onSubmit={onSubmit}></UpdateForm>
        <button className='btn-delete'>DEL</button>
      </div>
    );
  }
}

export default Card;
