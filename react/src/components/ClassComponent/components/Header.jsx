import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='row'>
          <h1>총 카드 수: </h1>
          <h1>{this.props.totalCards}</h1>
        </div>
        <div className='row'>
          <h1>총 자산: </h1>
          <h1>{this.props.money.toLocaleString()}</h1>
        </div>
        <div className='row'>
          <h1>현재 선택한 카드 이름: </h1>
          <h1>{this.props.currentCard}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
