# Redux

- WHY? State를 중앙 관리하기 위함

```js
import {state} from "./store"
```
- store 호출 시 별다른 작업, create를 하지 않고 바로 사용

### 주요 메서드

### 1. store.dispatch
- 리덕스 스토어로 값 전달 : 값 바꾸기 
### 2. store.getstate
- 리덕스 스토어의 state 얻음 : 값 얻기
### 3. store.subscribe
- 리덕스 스토어의 값이 변경됐을 때 호출 : 값 갱신

## 컨테이너 컴포넌트로 분리
- WHY? 컴포넌트의 독립성

- 컨테이너 컴포넌트: 리덕스 스토어 연관 작업 처리
- 프레젠테이셔널 컴포넌트: 컨테이너에서 주는 값만 처리(이벤트) & 표시(state값 전달)

컨테이너 디렉토리 따로 나누고, 이름은 같게 처리


## react-redux
- WHY? 익명 래퍼 컨테이너가 props가 전달하는 번거로움 발생
- connect
- import {connect} from "react-redux"
- export default connect()(DisplayNumber)

Provider: 스토어 공급 받음
```js
<Provider store = {store}>
  <App />
</Provider>
```
- 하위 컴포넌트에서 따로 store에 접근할 필요가 없어지게 된다.