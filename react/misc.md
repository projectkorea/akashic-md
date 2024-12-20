제공된 React 관련 내용을 체계적으로 재구성해드리겠습니다.

# 1. React Core Concepts

## 1.1 State Management

### useState
- 클로저를 활용한 래퍼 함수로, 상태 값을 관리하고 업데이트할 수 있게 함
- setState 함수는 클로저를 통해 외부 함수의 상태 값 참조를 유지
- 컴포넌트가 여러 번 렌더링되어도 이전 상태 값에 계속 접근 가능

### setState 사용 시 주의사항
```javascript
// 무한 렌더링 발생
setState(a+1)  // 렌더링 -> 업데이트 -> 렌더링 -> 업데이트 ...

// 올바른 사용법
setState(a => a+1)  // 함수형 업데이트 사용

// useEffect로 제어
useEffect(() => {
    setState(a => a+1)
}, [])  // 의존성 배열 사용으로 첫 렌더링에만 실행
```

## 1.2 Performance Optimization

### useMemo, useCallback
- 리액트 내부에서 참조값을 메모이제이션
- 의존성 배열의 값이 변경되지 않으면 참조값 유지
```javascript
const MyComponent = () => {
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  const data = useMemo(() => ({ name: "Alice" }), []);

  return <ChildComponent handleClick={handleClick} data={data} />;
};
```

### React.lazy()
- 동적 로딩을 통한 코드 스플리팅 구현
- 컴포넌트가 필요할 때만 로드하여 초기 로딩 시간 최적화
```javascript
const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MarkdownPreview />
    </Suspense>
  );
}
```

## 1.3 Component Control

### 제어 컴포넌트
- 리액트가 DOM 값을 직접 관리하는 컴포넌트
- 입력값을 리액트 상태로 관리하고, 상태에 따라 입력 필드의 값이 결정됨
- 사용자 입력이 리액트 상태를 통해 제어되고 반영

### Hydration
- 서버에서 렌더링된 정적 HTML이 클라이언트에서 JavaScript와 결합되어 상호작용 가능한 컴포넌트로 변환되는 과정
- 이벤트 처리와 상태 관리 활성화

## 1.4 React Architecture

### 가상 DOM vs 실제 DOM
- 가상 DOM: 메모리에서 변경사항을 비교 후 필요한 부분만 실제 DOM에 업데이트
- 실제 DOM: 변경사항마다 전체 렌더링 과정(reflow, repaint) 수행
- 모던 브라우저는 비동기 처리, 레이어 분리 등으로 렌더링 파이프라인 최적화

### Fiber Architecture
- UI 업데이트를 비동기적으로 처리하기 위한 내부 엔진
- 작업을 작은 단위로 분할하여 우선순위에 따라 처리
- requestAnimationFrame을 활용한 프레임 단위 처리로 UI 반응성 유지
- WorkInProgress Fiber를 통한 훅 관리와 상태 비교

이러한 개념들은 React 애플리케이션의 성능과 사용자 경험을 최적화하는 데 핵심적인 역할을 합니다.