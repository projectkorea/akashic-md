# React에서 Redux 도입하기

## Phase1. Redux

### WHY?? 

- 프로젝트 규모가 커지면, 각 컴포넌트 간 `state`, `props`전달이 까다롭다.
- 이에 `Redux`를 도입해 `State`를 중앙에서 관리하여, 효율적으로 `state`, `props`를 주고 받는다.

### Redux 특징

1. `Redux`는 React에 의존하는 라이브러리는 아니며, `Angular`, `Vue.js`, `Vanilla JS` 등 JS 언어내의 여러곳에서 사용한다.
2. `스토어`, `스토어 내부에 state 값 저장`, `각 컴포넌트는 스토어 구독`


### 1. `store.js` 셋팅

```js
import {createStore} from 'redux'
export default createStore(function(state,action){
  if(state === undefined){
    return {number : 0}
  }
  if(action.type === "INCREMENT"){
    return {...state, number:state.number + action.size}
  }
  return state
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

1. `createStore()`함수는 첫번째 인자로 reducer 함수를 받는다.
   1. `state`: redux가 관리하는 `state`
   2. `action`: `action`을 통해 `state` 값을 바꾼다.
   3. reducer 함수는 state를 **반환**한다.
2. 두번째 인자는 크롬 확장 프로그램인 Redux DevTool을 사용하기 위해 지정한 값이다.


### 2. `store.dispatch()`: state 수정하기

```js
import {state} from "./store"

<input onClick={() => {
    store.dispatch({type:"INCREMENT", size:size})
  }}>
```

- `store.dispatch(action)`: 리덕스 스토어로 `action` 객체를 전달한다.


### 3. `store.getState()`: state 얻기

```js
import {state} from "./store"

const DisplayNumber =() => {
  const[number, setNumber] = useState(store.getState().number)
  store.subscribe(()=> setNumber(store.getState().number))

  return(<div>
    {number}
  </div>)
}
```

- `store.getState()`: 리덕스 스토어의 `state` 객체를 반환한다.
- `store.subscribe(callback)`: 리덕스 스토어의 값이 변경됐을 때 호출된다. 컴포넌트 스토어의 state값이 변경됐다는 사실을 통보받을 수 있게 구독해야 한다.



## Phase2. 리액트 컴포넌트에서 리덕스에 종속된 기능 제거 

###  WHY??
- 컴포넌트의 독립성 보장하여 재사용성 증가시키기 위함

### HOW TO??  
1. **컨테이너 컴포넌트**로 분리
   - 컨테이너 컴포넌트: 리덕스 스토어 연관 작업 처리
   - 프레젠테이셔널 컴포넌트: 컨테이너에서 주는 값만 처리(이벤트) & 표시(state값 전달)
2. 컨테이너 디렉토리를 따로 만들고, 이름은 프레젠테이셔널 컴포넌트와 같게 처리한다.


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


### props을 줘야하는 상황에서 비효율 발생!

- `DisplayNumber` 컨테이너 상위에서 `unit`, `isActive` props을 추가로 전달할 때, `DisplayNumber 컨테이너`와 `DisplayNumber 컴포넌트` 두 곳 모두에서 코드를 수정해야 한다.

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


## Phase3. react-redux

### WHY?
- 익명 래퍼 컨테이너가 `props`를 전달하는 번거로움과 리덕스 관련 중복 코드 해결!
- `connect`, `Provider`


### 1. `Provider`로 App 감싸기

```js
import {Provider} from "react-redux"

<Provider store = {store}>
  <App />
</Provider>
```

- Provider를 통해 스토어를 공급받아, 하위 컴포넌트에서 따로 `store`에 접근할 필요가 없어진다.


### 2. 컨테이너 컴포넌트의 기본 구조

```js
import DisplayNumber from "./components/DisplayNumber"
import {connect} from "react-redux'
export default connect()(DisplayNumber)
```

- `connect`함수를 호출한 다음, 래핑할 컴포넌트를 인자로 넘겨 실행한 후 반환한다.


---

## `connect` 함수 내부 살펴보기

```js
function connect(mapStateToProps, mapDispatchToProps){
  return function(WrappedComponent){
    return class extends React.Component{
      render(){
        return(<WrappedComponent
          {...this.props}
          {...mapStateToProps(store.getState(), this.props)}
          {...mapDispatchToProps(store.dispatch, this.props)}
        />)
      }
      componentDidMount(){
        store.subscribe(this.handleChange.bind(this))
      }
    }
  }
}
```
- `this.props` 부분의 코드를 보다시피, connect로 컴포넌트를 반환하면 컨테이너 컴포넌트에서 이를 다시 전달해주지 않아도 프레젠테이셔널 컴포넌트로 props를 전달하는 코드가 구현돼있다.

---



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


### 4. react-redux 해쳐보기