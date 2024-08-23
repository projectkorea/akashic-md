# REACT 19 beta

- By convention, functions that use async transitions are called “Actions”.
- canary version: 카나리아 독가스 판단용 마루타 탄광새

--- 

## 번외 - useTransition 18.3

- `useTransition`의 구현 원리는 React의 동시성 모드(Concurrent Mode)를 기반으로 하여, 특정 작업을 비동기적으로 처리하고 메인 스레드의 부담을 줄이는 방식이다. React의 내부 동작 방식은 `Scheduler`와 `Fiber` 아키텍처를 통해 이해할 수 있다.

### React의 동시성 모드와 Scheduler

1. **Scheduler**:
   - React는 자체적인 스케줄러를 사용하여 작업의 우선 순위를 관리한다.
   - Scheduler는 작업의 우선 순위를 기준으로 어떤 작업을 먼저 처리할지 결정한다.
   - `useTransition`을 사용하면 특정 작업이 우선 순위가 낮은 작업으로 분류되어 백그라운드에서 처리된다.

2. **Fiber 아키텍처**:
   - React의 Fiber 아키텍처는 컴포넌트 트리를 효율적으로 재조정할 수 있는 구조를 제공한다.
   - Fiber는 작업을 작은 단위로 나누어, 필요한 경우 작업을 중단하고 다른 작업을 수행할 수 있도록 한다. 이를 통해 UI가 블록되지 않고 사용자 입력에 빠르게 반응할 수 있다.

### `useTransition`의 구현

`useTransition` 훅은 React 내부에서 다음과 같은 방식으로 구현된다:

1. **비동기 작업 관리**:
   - `useTransition`은 상태 업데이트를 비동기적으로 처리한다. React는 이 업데이트를 "중첩된 업데이트"로 간주하고, 우선 순위가 높은 작업(예: 사용자 입력)을 먼저 처리한 후 백그라운드에서 중첩된 작업을 수행한다.

2. **스케줄러와 협력**:
   - React의 스케줄러는 `requestIdleCallback` 및 `requestAnimationFrame` 같은 브라우저 API를 사용하여 메인 스레드가 유휴 상태일 때 작업을 수행한다.
   - 이를 통해 주요 UI 작업이 방해받지 않고, 백그라운드에서 작업이 수행된다.

3. **비동기 렌더링**:
   - React는 비동기적으로 렌더링할 수 있는 능력을 가지고 있다. 이를 통해, 시간이 많이 걸리는 렌더링 작업을 백그라운드에서 수행하고, 주요 UI 스레드가 차단되지 않도록 한다.

### 코드 예시 (내부 구현 개념)

다음은 `useTransition`의 내부 동작 방식을 이해하기 위한 개념적인 코드 예시이다. 실제 구현은 훨씬 복잡하지만, 아래 코드는 핵심 아이디어를 전달한다.

```jsx
import { useState, useEffect, useCallback } from 'react';

// React Scheduler에서 사용될 함수
function scheduleCallback(callback) {
  // requestIdleCallback은 브라우저가 유휴 상태일 때 콜백을 실행한다.
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
}

function useTransition() {
  const [isPending, setIsPending] = useState(false);

  const startTransition = useCallback((callback) => {
    setIsPending(true);
    scheduleCallback(() => {
      callback();
      setIsPending(false);
    });
  }, []);

  return [isPending, startTransition];
}

// 사용 예시
function SearchComponent({ data }) {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // 상태 업데이트를 중첩된 작업으로 스케줄링
    startTransition(() => {
      const newFilteredData = data.filter(item => item.includes(newQuery));
      setFilteredData(newFilteredData);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
```

### 요약

`useTransition`은 React의 동시성 모드를 활용하여 상태 업데이트를 비동기적으로 처리하는 기능이다. 내부적으로 React의 스케줄러와 Fiber 아키텍처를 사용하여 작업의 우선 순위를 관리하고, 메인 스레드가 차단되지 않도록 한다. 이를 통해 사용자 인터페이스의 반응성을 유지하면서 복잡한 상태 업데이트를 효율적으로 처리할 수 있다.

### 피드백

- UI개발은 비주얼적으로 도움이 되지만 코드 파악에 방해가 되므로, 관련 없는 함수는 모듈화해서 핵심 코드 파악할 수 있게 만들었으면 좋았을듯.