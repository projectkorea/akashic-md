# Component Life Cycle

#### 1. Mounting

- component가 생성될 때 호출된다.
   - `constructor()`: class 방식으로 state를 초기화하는 목적
   - `UNSAFE_componentWillMount()`: Component가 render 되기 전에 호출된다.
   - `componentDidMount()`: Component가 render 되고나서 호출된다.

#### 2. Updating

- component가 업데이트 될 때 호출된다.
   - `UNSAFE_componentWillUpdate()`
   - `componentDidUpdate()`

#### 3. Unmounting

- component가 없어질 때
   - `componentWillUnmount()`

---

## `componentDidUpdate`

- 초기 마운트를 제외하고, 컴포넌트가 업데이트 될 때마다 호출된다.
- 이전의 props와 state 값을 받아, 이후에 변경된 값을 비교해 서로 다를 때만 작읍 처리할 수 있게 할 수 있다.

```js
componentDidUpdate(prevProps, prevState) {
  if(prevState.count !== this.state.count){
      doSomething();
    }
}
```


## `shouldComponentUpdate`

- `render()` 함수가 실행여부를 결정하는 메서드

1. `state` 변경
2. `shouldComponentUpdate` 호출 
3. `return` === `true` 이면
4. `render()` 호출 

```js
shouldComponentUpdate(newProps, newState) {
  return true 
  // render() 호출
}
```

- 이전 값과 이후에 변경된 값을 비교해, 서로 다를 때만 어떤 작업을 처리하면 불필요한 처리를 하지 않을 수 있어 성능을 높일 수 있다.
- `newProps`: 컴포넌트의 props가 바뀌었을 때 바뀐 값
- `newState`: state가 바뀌었을 때 바뀐 state의 값
- `this.props.data`와 `newProps.data`를 통해 **현재값**과 **바뀐값**을 알 수 있다.

```js
shouldComponentUpdate(newProps, newState) {
  console.log(this.props.data, newProps.data)
  console.log(this.state.data, newState.data)
  return true // render()가 호출된다.
}
```
