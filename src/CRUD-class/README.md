# 클래스형 컴포넌트

- 17.x.x버전부터 `import React from "react"`를 생략할 수 있다.


## 1. 컴포넌트 생성

-  `Component` 클래스를 상속해서 만든다.
- `Component` 클래스는 `render`, `constructor`등의 메서드를 갖고있다.

```jsx
import { Component } from 'react';

class App extends Component {
  constructor(){
    ...
  }
  render() {
    return ()
  }
}
```

### 1. `render()`

- `render()` 함수는 `return`을 통해 `DOM`을 랜더링한다.


### 2. `constructor()`

- `state`를 초기화를 하는 곳이며, 직접 할당할 수 있는 유일한 곳이다.
  -  그 외의 메서드에서는 `this.setState()`를 사용해야 한다.
-  인스턴스에 **이벤트 처리 메서드**를 바인딩할 때 사용한다.



```js
constructor(props) {
  super(props); 

  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
- 메서드 내부의 `this`는 해당 컴포넌트를 가리킨다.

#### 참고) this안에는 무엇이 들어있을까

```js
for(let property in this){
  console.log(property)
}
```
- `this`의 프로퍼티들: `props`, `context`, `refs`, `updater`, `state`, `_reactInternals`, `_reactInternalInstance`, `isReactComponent`, `setState`, `forceUpdate`



### 2. 이벤트 핸들러

#### 1) 이벤트 핸들러 안의 `this`

- 일반 함수로 작성하면 `this`는 `undefined`를 가리킨다.
```js
<button onClick ={function(){console.log(this)}} /> // ❌
```

- `.bind(this)`를 통해 `this`가 해당 컴포넌트를 바라보게 한다.
```js
<button onClick ={function(){console.log(this)}.bind(this)} />
```

- 화살표 함수의 `this`는 상위 스코프의 `this`, 해당 컴포넌트를 바라보기 때문에 `bind`가 필요하지 않다.
```js
<button onClick ={()=>console.log(this)} />
```


### 3. `this.setState`: state 변경하기

```js
this.state = {name:"Unknown", job:"developer"}
this.setState({name:"junha", age:"20"})

console.log(this.state)
// {name: "junha", job:'developer", age:20 }
```

- 함수형 컴포넌트의 `setState`는 `state`를 **교체**하는 것과 달리,
- 💛: 클래스형 컴포넌트의 `setState()` 는 **`Object.assign(newObj,prevObj)`** 방식으로 **병합**한다.


### 4. toggle 버튼 예제

```js
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }
  render() {
    return (
        <button
          onClick={function (e) {
            e.preventDefault();
            this.state.isActive
              ? this.setState({ isActive: false })
              : this.setState({ isActive: true });
          }.bind(this)}
        >
          활성화 버튼
        </button>
    )
  }
}
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
