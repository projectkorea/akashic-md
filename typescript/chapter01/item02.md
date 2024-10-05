# ts 설정 이해하기

- ts 컴파일러는 **100가지 이상의 설정**을 제공하기 때문에, 이 설정들의 조합이 오류 없이 타입 검사를 통과할 수 있을지 결정한다.

## `tsconfig.json` 설정

- `tsc --init` 으로 설정 파일을 만든다.
- 컴파일러가 소스 파일을 어디에서 찾을지, 어떤 종류의 출력을 생성할지, 그리고 어떤 타입 검사 규칙을 적용할지 설정한다.

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true // noImplicitAny 설정이 선행되어야한다.
  }
}
```

### 두 가지 중요한 설정

- **`noImplicitAny`**
  - implicit any = any라고 간주한다.
  - no implicit any = any라고 간주하지 않는다.
  - 타입을 지정하지 않았을 때 자동으로 any로 취급되는데 이를 막는 설정
  - 모든 변수에 명시적으로 타입을 지정 필요
  - ts로 마이그레이션중 일 때만 `false` 시키자
  ```ts
  const add = (a, b) => a+b; // 오류 
  // Parameter 'a' implicitly has an 'any' type.

  const add = (a:number, b:number) => a+b;
  ```

- **`strictNullChecks`**
  - `null`과 `undefined`를 모든 타입에 자동으로 포함시키지 않는 설정
  - `undefined is not an object`와 같은 오류 방지 가능
  - `strictNullChecks` 설정의 유무에 따라 코드가 어떤식으로 달라지는지 살펴보자


### 예시1

#### 1. `strictNullChecks`가 **꺼져 있을 때** (`false`)

```typescript
let myString: string;

myString = "Hello, world!";
myString = null;  // 오류 없음
myString = undefined;  // 오류 없음

function greet(name: string) {
  console.log("Hello, " + name);
}

greet(undefined);  // 오류 없음
```

#### 2. `strictNullChecks`가 **켜져 있을 때** (`true`)

```typescript
let myString: string;

myString = "Hello, world!";
myString = null;  // 오류 발생: Type 'null' is not assignable to type 'string'.
myString = undefined;  // 오류 발생: Type 'undefined' is not assignable to type 'string'.

function greet(name: string) {
  console.log("Hello, " + name);
}

greet(undefined);  // 오류 발생: Argument of type 'undefined' is not assignable to parameter of type 'string'.
```

#### 3. `null`과 `undefined`를 명시적으로 허용하는 경우 (`strictNullChecks`가 켜져 있을 때)

```typescript
let myString: string | null | undefined;

myString = "Hello, world!";
myString = null;  // 허용됨
myString = undefined;  // 허용됨

function greet(name: string | undefined) {
  console.log("Hello, " + name);
}

greet(undefined);  // 허용됨
```

### 예시2

#### 1. `strictNullChecks`가 **꺼져 있을 때** (`false`)

```typescript
const elem = document.querySelector('div');
elem.textContent = 'Hello, world!'; // 오류 없음
```

- 런타임 시 `elem`이 실제로 `null`인 경우, `textContent`에 접근하려고 하니 **런타임 오류**가 발생한다.

#### 2. `strictNullChecks`가 **켜져 있을 때** (`true`)

```typescript
const elem = document.querySelector('div');
elem.textContent = 'Hello, world!';
 // 오류 발생: Object is possibly 'null'.
```

- `document.querySelector('div')`는 `HTMLDivElement | null` 타입으로 추론 되기 때문에`null`을 반환할 가능성이 있다.
- `null`이나 `undefined`를 허용하지 않게 설정했으므로 `elem`이 `null`일 가능성을 고려하여 처리하도록 강제한다.
- 따라서 `elem`이 `null`일 가능성을 무시하면 컴파일 오류가 발생한다.

#### 3. `non-null assertion operator` (!) 사용 (strictNullChecks 켜짐)

```typescript
const elem = document.querySelector('div');
elem!.textContent = 'Hello, world!'; // 오류 없음 (단, 위험함)
```

- `non-null assertion operator` (`!`)를 사용하면, 컴파일러에게 "이 값이 `null`이나 `undefined`가 아닐 것"이라고 **단언**할 수 있습니다. `elem!.textContent`는 컴파일러가 `elem`이 절대 `null`이 아니라고 믿게 만들어 **컴파일 오류를 피할 수** 있다.

#### 4. null 체크 코드 추가

```ts
const elem = document.querySelector('div') as HTMLDivElement;

if (elem) {
  elem.textContent = 'Hello, world!';
} else {
  console.log('No div element found.');
}
```

- `elem`을 `HTMLDivElement`로 단언하되, `if` 조건문을 통해 `elem`이 `null`인지 확인한 후 안전하게 `textContent`에 접근하는 방법이다.
- `as HTMLDivElement`는 타입 추론이 되므로 생략가능하다.

### 요약

- **`strictNullChecks: false`**: `null`과 `undefined`를 자동으로 허용하므로,런타임 오류 가능성 있다.
- **`strictNullChecks: true`**: `null`과 `undefined`를 명확하게 체크하도록 강제하여, 컴파일러가 오류를 발생시킨다.
- **`non-null assertion operator`**: 컴파일러에게 값이 `null`이 아니라고 단언하지만, 런타임 시 위험하다.
- **null 체크**: 안전한 방식으로, `null` 체크를 통해 타입 안정성을 보장한다.
