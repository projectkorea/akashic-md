import { Component } from 'react';

class ClassCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  // UNSAFE_componentWillMount(){
  //   componentDidMount, constructor (state 초기화)를 대신 사용할 것, 랜더링 되기 전에 호출
  //}

  componentDidMount() {
    console.log('componentDidMount'); // render 호출 후 실행, 네트워크에서 뭔가 내려받아 어떤일을 처리해야하는ㄹ 때
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
    // render 호출할 필요 여부 결정
  }

  // UNSAFE_componentWillUpdate(){
  //  componentDidUpdate를 사용할 것 (데이터 조회)
  //}

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // 컴포넌트 소멸될 때 호출
  }

  render() {
    return;
  }
}

export default ClassCycle;
