# Redux 도입

## 1. Redux를 쓰는 이유

- 프로젝트 규모가 커지면, 컴포넌트 간 `state`, `props`전달이 까다로워진다.
- `Redux`를 도입하면 `State`를 중앙에서 효율적으로 관리할 수 있게된다.
- `Redux`는 `React`뿐만아니라, `Angular`, `Vue.js`, `Vanilla JS` 등 JS 언어내의 여러곳에서 사용한다.


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
   2. `action`: `state` 값을 바꾸는 기준



### 2. `store` 메서드 이용하기

#### 1) `store.dispatch(action)`: `action`을 전달해, state를 수정

```js
import store from "./store"

<input onClick={() => {
    store.dispatch({type:"INCREMENT", size:size})
  }}>
```

#### 2) `store.getState()`: state 값 얻기

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

- `store.subscribe(callback)`: 스토어의 값이 변경됐을 때 호출된다. 
- 스토어의 `state`가 변경됐다는 사실을 통보받을 수 있게 구독해야 한다.



## 3. 리덕스 종속성 제거 

- 컴포넌트의 독립성 보장하여 **재사용성**을 높이기 위해

#### 컴포넌트 나누기
- **컨테이너** 컴포넌트
  - 리덕스 스토어 연관 작업 처리
- **프레젠테이셔널** 컴포넌트
  - 컨테이너에서 주는 값만 처리(이벤트) & 표시(state값 전달)
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
import AddNumber from "./components/Addnumber"
import store from "./store"
export default class extends Component {
  render(){
    return <AddNumber onClick={()=> store.dispatch({...})}></AddNumber>
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
        <input onClick={()=> this.props.onClick()}/>
      </div>
    )
  }
}
```

- 리덕스와 관련된 작업은 `AddNumber`를 래핑하는 `컨테이너 컴포넌트`가 수행하게 바꿨다.
- 이를 통해, `AddNumber` 컴포넌트는 리덕스의 기능이 필요하지 않은 곳에서도 재사용할 수 있게 됐다!!



## 3. react-redux 사용하기

### 1) 도입 배경

- `props`을 전달할 때 비효율 발생
- `DisplayNumber` 컨테이너 상위에서 `unit`, `isActive` 전달할 때, `DisplayNumber 컨테이너`와 `DisplayNumber 컴포넌트` 두 곳 모두에서 코드를 수정해야 한다.

```js
import DisplayNumber from './containers/DisplayNumber'
<DisplayNumber unit="kg" isActive={true}/>
```

```js
import DisplayNumber from './components/DisplayNumber'
<DisplayNumber unit="kg" isActive={true}/>
```

```js
// components/DisplayNumber
<div>
  {isActive && <div>
        <h1>{num}<h1>
        <h1>{unit}<h1>
  </div>
  }  
</div>
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

- `connect(mapStateToProps, mapDispatchToProps)(wrappedComponent)` : ? 반환

```js
import {connect} from "react-redux'
import DisplayNumber from "./components/DisplayNumber"

export default connect()(DisplayNumber)
```

- `connect`함수를 호출한 다음, 래핑할 컴포넌트를 인자로 넘겨 실행한 후 반환한다.


### 3. connect함수에 리덕스 관련 코드 넣기

#### 1) `mapStateToProps` 사용

- 리덕스의 `state`를 리액트의 `props`로 연결하는 역할을 한다.


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



### 4. react-redux `connect` 함수 내부 살펴보기

```js
function connect(mapStateToProps, mapDispatchToProps){
  return function(WrappedComponent){
    return class extends React.Component{
      render(){
        
        return(<WrappedComponent     // 1️⃣
          {...this.props}
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

- 1️⃣: `WrapperComponent`에 전달한다.
  1. 컨테이너 컴포넌트로 주입된 `props`
  2. `state`
  3. 이벤트

- `mapStateToProps(, this.props)`, `{mapDispatchToProps(, this.props)}`
  - option: 두번째 인자를 통해 전달된 props를 이용할 수 있다.

### react-redux의 connect API의 기특한 점

1. 등록한 `props`에 한해서만 구독하기 때문에, 불필요한 `render` 함수 호출이 줄어듦
2. `shouldComponentUpdate`를 통해 수동으로 해야할 일을 자동으로 처리해줌.