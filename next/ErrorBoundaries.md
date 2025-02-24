# React Error Boundaries

## 요약

### 오류 포착 및 상태 업데이트

`getDerivedStateFromError` 메서드와 `componentDidCatch` 메서드를 통해 오류를 포착하고 상태를 업데이트합니다.

### 대체 UI 렌더링

오류가 발생하면 `fallback` 속성으로 전달된 UI를 렌더링하여 사용자에게 오류가 발생했음을 알립니다.

## 호출 순서 설명

### 오류 발생
자식 컴포넌트에서 오류가 발생

### `getDerivedStateFromError` 호출

- React는 먼저 `getDerivedStateFromError`를 호출하여 컴포넌트의 상태를 업데이트합니다.
- 예제 코드에서는 `console.log("getDerivedStateFromError called")`가 출력됩니다.
- 상태가 업데이트되면, React는 컴포넌트를 다시 렌더링하고, 업데이트된 상태에 따라 폴백 UI를 표시할 수 있습니다.

### `componentDidCatch` 호출

- 다음으로, React는 `componentDidCatch`를 호출합니다.
- 이 메서드에서는 오류와 오류 정보를 받아서 추가적인 작업을 수행할 수 있습니다.
- 예제 코드에서는 `console.log("componentDidCatch called")`와 함께 오류가 출력됩니다.

## 요약

- **`getDerivedStateFromError`**가 먼저 호출되어 상태를 업데이트하고 UI를 변경합니다.
- 그 다음에 **`componentDidCatch`**가 호출되어 오류를 로깅하거나 외부 서비스에 보고하는 등의 추가 작업을 수행합니다.
