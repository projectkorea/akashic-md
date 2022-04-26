# 클래스형 컴포넌트

- `17.x.x`버전부터 `import React from "react"`를 생략할 수 있다.


## 1. 컴포넌트 생성

- `Component` 클래스를 상속해서 만든다.
- `Component` 클래스는 `render`, `constructor`등의 메서드를 갖고있다.

```jsx
import { Component } from 'react';

class App extends Component {
  constructor(){
    ...
  }
  render() {
    return (
      <div className='App'></div>
    )
  }
}
```

### 1. `render()`

- `render()` 함수는 `return`을 통해 `DOM`을 랜더링한다.


### 2. `constructor()`

- `state`를 초기화를 하는 곳이자, `state`를 직접 할당할 수 있는 유일한 곳이다.
- 그 외에 `state`를 수정하려면 `this.setState()`를 사용해야 한다.
- 인스턴스에 **이벤트 처리 메서드**를 바인딩을 하는 곳이다.

```js
constructor(props) {
  super(props); 

  this.state = { counter: 0 }; // state 초기화 
  this.handleClick = this.handleClick.bind(this); // 이벤트 처리 메서드 바인딩
}
```
- `this`는 해당 컴포넌트를 가리킨다.


### 3. `this` 객체 파헤치기

```js
for(let property in this){
  console.log(property)
}
```

#### `this`의 프로퍼티들

- `props`
- `state`
- `setState`
- `forceUpdate`
- `context`
- `refs`
- `updater`
- `_reactInternals`
- `_reactInternalInstance`
- `isReactComponent`




### 2. 이벤트 핸들러


### 1) 이벤트 핸들러의 `this`


```js
<button onClick ={function(){console.log(this)}} /> 
// ❌
```
- 일반 함수로 작성하면 `this`는 `undefined`를 가리킨다.


```js
<button onClick ={function(){console.log(this)}.bind(this)} />
```
- `bind(this)`를 통해 `this`가 해당 컴포넌트를 바라보게 한다.


```js
<button onClick ={()=>console.log(this)} />
```
- 화살표 함수의 `this`는 상위 스코프를 바라보기 때문에 이를 이용할 수 있다. 


### 2. `state` 변경

```js
this.state = {name:"Unknown", job:"developer"}
// ❌
this.setState({name:"junha", age:"20"})
// ✅
```

#### `setState()` 차이

- 함수형 컴포넌트: `state` **교체**
- 클래스형 컴포넌트: `Object.assign(newObj,prevObj)` 방식으로 **병합**
  ```js
  var _assign = require('object-assign');
  ...
    return _assign({}, prevState, partialState);
  ```



## 3. 클래스형 컴포넌트 예시

```js
import { Component } from 'react';

class App extends Component {
  state = { age: 17 };
  
  modify = () => {
    const { age } = this.state;
    this.setState({ age: age + 1 });
  };
  
  componentDidMount() {
    this.modify();
  }
  
  render() {
    const { age } = this.state;
    return (
    	<>
        <h1>{age}</h1>
        <button onClick={this.modify}>+age</button>
 		  </>
    );
  }
}
```
