# Redux 도입

## 1. Redux를 쓰는 이유

- 프로젝트 규모가 커지면, 컴포넌트 간 `state`, `props`전달이 복잡해진다.
- `Redux`를 도입하면 `State`를 중앙에서 효율적으로 관리할 수 있다.
- `Redux`는 `React` 뿐만아니라, `Angular`, `Vue.js`, `Vanilla JS` 등 JS 언어내의 여러곳에서 사용한다.


## 2. Redux 사용하기

1. 스토어 객체 생성
2. 스토어 메서드 사용
3. 스토어 구독

### 1) 스토어 (`store`) 객체 생성하기

```js
// store.js

import {createStore} from 'redux'

function reducer(state, action) {
  if(state === undefined){
    return {number : 0}
  }
  if(action.type === "INCREMENT"){
    return {...state, number:state.number + action.size}
  }
  return state
}

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(reducer, devtool)
```

#### 코드설명

- `createStore(reducer, devtool)`: `store` 객체 반환
- `reducer(state, action)`: `state` 반환
   1. `state`: `redux`가 관리하는 `state`
   2. `action`: `state`를 처리하는 방법


### 2. `store` 메서드 이용하기

#### 1) `store.dispatch(action)`: `action`을 통한 `state` 수정

```js
import store from "./store"

class AddNumber extends Component {
  state = {size:1}
  render(){
    return(<input onClick={() => {
    store.dispatch({type:"INCREMENT", size:this.state.size})
  }>)
  }
}
```

#### 2) `store.getState()`: `state` 값 얻기

```js
import store from "./store"

const DisplayNumber =() => {
  const[number, setNumber] = useState(store.getState().number)
  store.subscribe(()=> setNumber(store.getState().number))

  return(<div>
    {number}
  </div>)
}
```

#### 3) `store.subscribe()`: store 구독하기

- `store.subscribe(callback)`: 스토어의 값이 변경됐을 때 `callback` 호출
- 스토어의 `state`가 바뀐 사실을 알 수 있게 구독해야 한다.

```js
constructor(props){
  super(props);
  store.subscribe(function(){
    this.setState({number:store.getState().number})
  }.bind(this))
}
```



## 3. 리덕스 종속성 제거 

- 컴포넌트의 독립성 보장하여 **재사용성**을 높이기 위해


#### 컴포넌트 나누기

- **컨테이너** 컴포넌트
  - 리덕스 스토어 연관 작업 처리
- **프레젠테이셔널** 컴포넌트
  - `props`로 전달받은 데이터를 출력, 함수를 호출하는 일 담당
- 컨테이너 디렉토리 따로 생성, 파일명은 동일하게 생성


### Examples

#### Before) AddNumber

```js
import store from "./store

class AddNumber extends Component {
  state = {size:1}
  render() {
    return (
      <div>
        <input onClick={()=> store.dispatch({...})}/>
      </div>
    )
  }
}
```

#### After) ./containers/AddNumber
```js
import AddNumber from "./components/AddNumber"
import store from "./store"
export default class extends Component {
  render(){
    return <AddNumber onClick={(size)=> store.dispatch({...})}></AddNumber>
  }
}
```

#### After ./components/AddNumber

```js
class AddNumber extends Component {
  state = {size:1}
  render() {
    return (
      <div>
        <input onClick={()=> this.props.onClick(size)}/>
      </div>
    )
  }
}
```

- 리덕스와 관련된 작업은 `AddNumber`를 래핑하는 `컨테이너 컴포넌트`가 수행한다.
- 이를 통해, `AddNumber` 컴포넌트는 리덕스의 기능이 필요하지 않은 곳에서도 재사용할 수 있다.



## 3. `react-redux` 사용하기

### 1) 도입 배경

- 상위에서 `props`를 전달할 때 중간에 익명 컨테이너가 끼었기 때문에, 컨테이너에서도 `props`을 전달해야하는 비효율 발생
- `DisplayNumber` 컨테이너 상위 ➡ `DisplayNumber 컨테이너` ➡ `DisplayNumber 컴포넌트`

```js
import DisplayNumber from './containers/DisplayNumber'
<DisplayNumber unit="kg" isActive={true}/>
```

```js
import DisplayNumber from './components/DisplayNumber'
<DisplayNumber unit="kg" isActive={true}/>
// 컨테이너 컴포넌트도 굳이 props를 전달하는 코드를 작성해야함😥
```

- `react-redux`를 사용하면 익명 래퍼 컨테이너가 `props`를 전달하는 번거로움과 리덕스 관련 중복 코드 해결할 수 있다.



### 1. `Provider`로 App 감싸기

```js
import {Provider} from "react-redux"

<Provider store = {store}>
  <App />
</Provider>
```

- `Provider`를 통해 스토어를 공급받아, 하위 컴포넌트에서 따로 `store`에 접근할 필요가 없어진다.


### 2. `connect()()` 사용하기

- `connect())(wrappedComponent)` : 컨테이너 컴포넌트 반환
- `connect` 함수 호출 후, 래핑할 컴포넌트를 인자로 넘겨 다시 호출
- 반환된 컨테이너 컴포넌트는 `wrappedComponent`를 반환한다.

```js
// containers/DisplayNumber

import DisplayNumber from "./components/DisplayUser"
import {connect} from "react-redux"
export default connect()(DisplayNumber);
```

- `connect` 함수를 통해 `props`을 전달하는 코드를 중복해서 작성하지 않고, 자동으로 넘겨줄 수 있다.




### 3. `connect` 함수에 리덕스 관련 코드 넣기

- `connect(mapStateToProps, mapDispatchToProps)(wrappedComponent)`
- `connect`의 첫번째 함수에 들어가는 인자들은, `wrappedComponent`에 `props`이 된다.


#### 1) `mapStateToProps` 사용

- `mapStateToProps(state, props)`
- 리덕스의 `state`를 리액트의 `props`로 연결하는 역할을 한다.
- option: 두번째 인자 `props`를 이용할 수도 있다.

```js
import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

const mapReduxStateToReactProps = (state) => {
  return { number: state.number };
};

const mapReduxDispatchToReactProps = () => {
  return {};
};

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps
)(DisplayNumber);
```


```js
const DisplayNumber = ({ number }) => {
  return (
    <>
      <h1>Display Number</h1>
      <input type='text' value={number} readOnly />
      <h5>{test}</h5>
    </div>
  );
};
```



#### 2) `mapDispatchToProps` 사용

- `mapDispatchToProps(dispatch)`
- 리덕스의 `dispatch`를 리액트 컴포넌트의 `props`로 연결하는 함수다.

```js
import { connect } from 'react-redux';
import AddNumber from '../components/AddNumber';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNumber);
```

```js
import { useState } from 'react';

const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1);
  return (
    <div>
      <h1>Add Number</h1>
      <input type='text' readOnly value={size} />
      <input type='button' value='+' onClick={() => onClick(size)} />
    </div>
  );
};
```



### 4. `connect` 함수 내부 동작 살펴보기

```js
function connect(mapStateToProps, mapDispatchToProps){
  return function(WrappedComponent){
    return class extends React.Component{
      render(){
        return(<WrappedComponent  // 1️⃣
          {...this.props} 
          // ✅ connect 함수 반환 값인 컴포넌트에 props을 전달했을 때
          // ✅ wrappedComponent에 props을 주입하는 코드
          {...mapStateToProps(store.getState(), this.props)}
          {...mapDispatchToProps(store.dispatch, this.props)}
        />)
      }
      componentDidMount(){
        store.subscribe(this.handleChange.bind(this))
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      handleChange() {
        this.forceUpdate()
        // 리덕스 스토어 값이 변경되면 강제로 render호출
      }
    }
  }
}
```

- 1️⃣ `WrappedComponent`에 전달되는 `props`는 다음과 같다.
  1. 컨테이너 컴포넌트 상위에서 주입된 `props`
  2. `redux`의 `state`
  3. `redux`의 이벤트 (`dispatch`)


### `connect` 함수의 장점

1. 등록한 `props`에 한해서만 구독하기 때문에, 불필요한 `render` 함수 호출이 줄어듦
2. `shouldComponentUpdate`를 통해 수동으로 해야할 일을 자동으로 처리해줌.