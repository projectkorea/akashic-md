# Ajax

## 1. 리액트에서 Ajax 사용 방법

- 컴포넌트가 생성될 때 Ajax를 통해 컴포넌트를 초기화해야 하는 경우에는 `componentDidMount` 메서드, `useEffect`를 사용한다.
- Ajax를 사용해서 가져온 데이터는 `state`에 넘긴 후 `render`메서드가 `state`의 변화에 영향을 받아 처리하게 한다.

## 2. 프레젠테이션 컨테이너에서 데이터 종속성 제거하기

### `App.jsx`에서 `AppRefactoring.jsx`로 리팩토링

1. 네비게이션은 다른 곳에서도 사용할 수 있다.
2. `Nav` 컴포넌트가 특정 데이터에 종속이 되지 않게 `디커플링`을 해야한다.
3. 그러기 위해서, `Nav` 컴포넌트를 데이터와 상관없이, **표현**하기만 하는 컴포넌트로 만들것이다.
4. 데이터에 종속되지 않고 순수하게 표현만 하는 컴포넌트를 **프레젠테이셔널 컴포넌트** 라고 한다.
5. 프레젠테이셔널 컴포넌트를 둘러싼 데이터를 처리하고 사용자의 상호작용 등을 처리하는 에플리케이션에 완전히 종속된 컴포넌트를 **컨테이너 컴포넌트** 라고한다.

## 3. 로딩 중 기능 구현

- `isLoading` state 값이 `false`면 해당 컴포넌트를, `true`면 로딩 컴포넌트를 반환한다.
- 클릭 이벤트 발생시, state값을 `true`로 설정하고, `fetch`함수를 통해 `resolve`된 데이터가 반환되면 state값을 `false`로 할당한다.

## 4. 검색시 0.5초 후에 api 작동하게 하기

```js
   useEffect(
    (search) => {
      const timeout = setTimeout(() => {
        setIsActive(false);
      }, 500);
      return () => clearTimeout(timeout);
    },
    [search]
  );
```

## 5. 로딩여부는 따로 state로 만들지 않고, 그 state 안에서 해결하기

`{ list: { items: json, isLoading: false }}`

