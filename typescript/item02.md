# 타입스크립트 설정 이해하기

## `tsconfig.json` 설정

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true // noImplicitAny가 선행
  }
}
```

### 설정 설명

- **`noImplicitAny`**: 암시적 `any` 타입을 허용하지 않음
  - 모든 변수에 명시적으로 타입을 지정 필요
  - 타입스크립트로 마이그레이션하는 상황에서만 해제 추천

- **`strictNullChecks`**: 모든 타입에서 `null`과 `undefined`를 허용 여부 결정
  - `null`과 `undefined`는 각각의 타입으로 다루어짐
  - 명시적으로 허용되지 않은 한 사용할 수 없음
  - `undefined is not an object`와 같은 오류 방지 가능

### 예제 코드

```typescript
const elem = document.querySelector('div');
```

### `non-null assertion operator` (!)

- **사용법**:
  
  ```typescript
  const elem = document.querySelector('div') as HTMLDivElement;
  elem!.textContent;
  ```

- **설명**:
  - `elem!.textContent`도 타입 단언의 일종
  - `!` (non-null assertion operator)는 값이 `null`이나 `undefined`가 아님을 단언
  - 컴파일러에게 해당 값이 절대로 `null`이나 `undefined`가 아니라고 확신시킴

### 타입 단언 (Type Assertion)

- **설명**:
  - 타입 단언을 사용하면 컴파일러에게 특정 변수의 타입을 우리가 더 잘 알고 있다고 알림
  - 변수의 타입을 강제로 지정하는 방법으로, 컴파일러가 타입을 추론하지 않고 우리가 지정한 타입을 따르게 함
  - 타입 단언을 사용할 때는 런타임 오류 방지에 주의 필요

- **예제**:
  
  ```typescript
  const elem = document.querySelector('div') as HTMLDivElement;

  if (elem) {
    elem.textContent = 'Hello, world!';
  } else {
    console.log('No div element found.');
  }
  ```

타입스크립트 설정과 타입 단언의 사용법을 설명하며, 설정을 통해 더 안전한 코드 작성 가능.