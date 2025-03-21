# ts 설정 이해하기

- ts 컴파일러는 **100가지 이상의 설정**들을 제공하고 이 조합으로 타입 검사를 수행한다.
- 소스 파일을 어디에서 찾을지, 어떤 JS 버전으로 컴파일할지, 어떤 **타입 검사 규칙**을 적용할지 설정한다.

## `tsconfig.json` 설정

- `tsc --init`: 설정 파일 만들기

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true // noImplicitAny:true가 선행되어야한다.
  }
}
```

### 두 가지 중요한 설정

#### `noImplicitAny`

- implicit any == any라고 간주한다
- no implicit any == any라고 간주하지 않는다.
- 타입 지정안할 때 자동으로 any로 캐스팅 되는걸 막음.
- 모든 변수에 명시적으로 타입을 지정해야함
- ts로 마이그레이션중 일 때만 `false` 시키자

```ts
  const add = (a, b) => a+b; 
  // Error: Parameter 'a' implicitly has an 'any' type.
  const add = (a:number, b:number) => a+b;
```

#### `strictNullChecks`

- 모든 타입에 `null`과 `undefined`를 자동으로 포함시키지 않음
- `undefined is not an object`와 같은 오류 방지 가능

### 예시1

#### 1. `"strictNullChecks": false`

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

#### 2. `"strictNullChecks": true`

```typescript
let myString: string;

myString = "Hello, world!";
myString = null;  // Error: Type 'null' is not assignable to type 'string'.
myString = undefined;  // Error: Type 'undefined' is not assignable to type 'string'.

function greet(name: string) {
  console.log("Hello, " + name);
}

greet(undefined);
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
```

#### 3. `"strictNullChecks": true` + 명시적 허용

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

#### 1. `"strictNullChecks": false`

```typescript
const elem = document.querySelector('div');
elem.textContent = 'Hello, world!'; // 오류 없음
```

- 런타임 시 `elem`이 실제로 `null`인 경우,  **런타임 오류**가 발생한다.

#### 2. `"strictNullChecks": true`

```typescript
const elem = document.querySelector('div');
elem.textContent = 'Hello, world!';
// Error: Object is possibly 'null'.
```

- `document.querySelector('div')`는 `HTMLDivElement | null` 타입으로 추론 되기 때문에`null`을 반환할 가능성이 있다.
- `null`이나 `undefined`를 허용하지 않게 설정했으므로 `elem`이 `null`일 가능성을 고려하여 처리하도록 강제한다.
- 따라서 `elem`이 `null`일 가능성을 무시하면 컴파일 오류가 발생한다.

#### 3. `"strictNullChecks": true` + `non-null assertion operator`

```ts
const elem = document.querySelector('div');
elem!.textContent = 'Hello, world!'; 
// 오류 없음 (단, 위험함)
```

- `!` 연산자를 사용해 `elem!.textContent`로 작성하면, 컴파일러에게 **`elem`이 절대 `null`이나 `undefined`가 아니라고 단언한다.**

#### 4. null 체크 코드 추가

```ts
const elem = document.querySelector('div') as HTMLDivElement;

if (elem) {
  elem.textContent = 'Hello, world!';
}
```

- `elem`을 `HTMLDivElement`로 단언하되, `if` 조건문을 통해 `elem`이 `null`인지 확인한 후 안전하게 `textContent`에 접근하는 방법이다.
- `as HTMLDivElement`는 타입 추론이 되므로 생략가능하다.

### 요약

- `strictNullChecks: false`
  - `null`, `undefined`를 자동으로 허용하여 런타임 오류 가능성이 높다.
- `strictNullChecks: true`:
  - `null`, `undefined`를 체크를 강제하여 컴파일러가 오류 가능성이 높다.
- `non-null assertion operator`
  - 컴파일러에게 값이 `null`이 아니라고 단언하지만, 런타임 시 위험하다.
- null 체크: 안전한 방식으로, `null` 체크를 통해 타입 안정성을 보장한다.
