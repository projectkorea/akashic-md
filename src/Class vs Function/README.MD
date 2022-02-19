# component life cycle(컴포넌트 생명주기)



1. **Mounting**: component가 생성될 때
   1) `constructor()`: Coponent가 mount될 때 호출된다.(JS에서 class를 만들 때 호출된다)
   2) `UNSAFE_componentWillMount()`: 
   3) `render()`: 
   4) `componentDidMount()`: Component가 처음 Render될 때 호출된다.
2. **Updating**: component가 업데이트 될 때
   1) `componentDidUpdate()`: coponet가 업데이트될 때 호출된다.
3. **Unmounting**: coponent가 없어질 때
   1) `componentWillUnmount()`









## 팁

1. `setState({})`는 `Object.assign()` 방식으로 병합된다.