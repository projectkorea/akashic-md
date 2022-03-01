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


## shouldComponentUpdate(){}

- 어떤 컴포넌트의 `render()` 함수가 실행 or not을 리액트 개발자가 결정할 수 있게 하는 함수다.
- state를 바꿀 때 마다, `shouldComponentUpdate가` 함수가 호출된 다음에 `render()` 함수가 호출된다. 
- return true를 해줘야 render가 호출된다.
- `newProps`: 컴포넌트의 props가 바뀌었을 때 바뀐 값
- `newState`: state가 바뀌었을 때 바뀐 state의 값
- this.props.data newProps.data를 통해 현재값과 바뀐값을 알 수 있다.

- 이전 값과 이후에 변경된 값을 비교해서 서로 다를 때만 어떤 작업을 처리하면 불필요한 처리를 하지 않을 수 있어 성능을 높일 수 있다.
- state가 바뀔 때마다 componentDidUpdate의 인자로 이전 props 값과 이전 state 값을 전달한다.

```js
shouldComponentUpdate(newProps, newState) {
  return true
}
```

## 시행착오

### 1. useEffect 내에 state값을 사용하면 dependency에 값을 넣어야 한다.

```js
function App(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`effect: ${count}`);
    return () => {
      console.log(`clean-up: ${count}`);
    };
  }, []); // Error! React Hook useEffect has a missing dependency

  return (
    <div className='App'>
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={setCount(count + 1)}>+</button>
      <SubComponent count={count}></SubComponent>
    </div>
  );
}
```
- useEffect에 count state값을 사용하고 있기 때문에, denpendency에 `State` 값을 넣어줘야한다.
- `clean-up` 함수는 `denpendency`가 바뀔 때 마다 이전의 `State`값을 처리하기 위해 호출된다.