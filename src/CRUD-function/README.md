## CRUD 리액트 1차 시도 [1시간 소요]

- 20분안에 구현하고, 40분을 오류를 잡는 양상을 보임😪

1. **최상위 컴포넌트**로 감싸야 한다.
  `return { listView };`
  `return <div>{listView}</div>`;로 해야함

2. `onCreate`, `onUpdate`, `onDelete`함수 
- 프로토타입 설계 해놓고 제대로 보지 않음. 
- 데이터 전처리가 약한 모습을 보임

```js
list.splice(index, 1);
const newList = Array.from(list);
```
```js
const newList = [
      ...list.slice(0, index),
      updatedValue,
      ...list(index + 1),
    ];
```

3. 프로토타입으로 코드를 구현해놓은 것인데 당연히 그 코드가 작동할 거라고 생각했음

4. dom element 의 이벤트 프로퍼티와 prop 프로퍼티를 햇갈림
- `<button onClick={onUpdate}` 했어야 했는데
- `<button onUpdate={onUpdate}` 했어야 했음