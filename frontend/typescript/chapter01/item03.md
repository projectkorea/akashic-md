# 컴파일과 타입 시스템은 독립적이다

- **컴파일러**: ts는 고수준 언어인 js로 변환하므로 **트랜스파일러**로 보는 것이 더 정확하다. 하지만 `tsc`라는 용어와 더불어 **타입 검사, 코드 변환** 기능 때문에 관례적으로 "컴파일러" 라는 용어가 널리 사용되고 있다.
- **transpile**(translate + compile): 동일한 동작을 하는 다른 형태의 소스 코드로(고수준) 변환한다. 결과물이 여전히 컴파일 되어야하는 소스이므로 컴파일과 구분된다.

## tsc의 두 가지 열할

1. 컴파일: 최신 ts/js를 구버전 js로 트랜스파일 시킴
2. 타입 시스템: 타입 오류 체크

- 이 두 가지는 서로 완벽히 독립적이다.
- **js로 컴파일 되는 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거된다**.
- C, Java같이 타입 체크와 컴파일이 동시에 진행되는게 아니다. ts 오류는 `warning`정도와 비슷하기 때문에 타입 오류가 있는 코드도 컴파일된다.
- `noEmitOnError` 설정을 통해 오류가 있으면 컴파일 하지 않도록 설정할 수도 있다.

## 런타임에는 타입 체크가 불가능하다

```ts
interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;
```

### 1. `instanceof`

```ts
function calcArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // Error: `'Rectangle' only refers to a type, but is being used as a value`
    return shape.width * shape*height;
    // Error: `Property 'height' does not exist on type 'Shape'.`
  }
  ...
}
```

- `instanceof` 체크는 런타임에서 일어나지만 `Rectangle`은 ts 코드이기 때문에 런타임단에서는 제거되어 아무 역할을 하지 못한다.

### 2. `in` 속성 체크

```ts
if ('height' in shape)
```

- 직접 속성을 조회하는 덕타이핑 방법을 사용하여 해결한다.
- 다만 이 방법은 **런타임에서 속성 존재 여부만 확인하며, 정적 타입 안전성은 제공하지 않는다.**

### 3. 태그된 유니온 

```ts
interface Square {
  kind: 'square'
  ...
}
interface Rectangle {
  kind: 'rectangle'
  ...
}

type Shape = Square | Rectangle;

if (shape.kind ==== 'rectangle'){
  ...
}
```

- 태그된 유니온도 결국 런타임에서 속성을 확인하는 구조이지만, 컴파일 타임에 미리 타입을 검사한다는 점이 다르다.

### 4. 클래스

```ts
class Square {
  constructor(public width: number){}
}
class Rectangle extends Square {
  constructor(public width number, public height number) {
    super(width);
  }
}
type Shape = Square | Rectangle; // 1. 타입으로 참조

function calcArea(shape: Shape) {
  if (shape instanceof Rectangle) { // 2. 값으로 참조
    return shape.width * shape.height
  }
}
```

- 타입과 값을 둘 다 사용하는 방법이다.

## 타입은 런타임에 영향을 끼치지 못한다.

```ts
function asNumber(val: number | string): number {
  return val as number;
}
```

- 타입 체크를 해도 아래와 같이 컴파일되니 런타임 동작은 달라질 게 없다.

```js
function asNumber(val) {
  return val;
}
```

- 값을 바꾸고 싶다면 런타임의 타입을 체크해야한다.

```ts
function asNumber(val: number | string): number {
  return typeof(val) === 'string' ? Number(val) : val;
}
```


## 타입은 런타임 성능에 영향을 끼치지 않는다.

- 런타임 오버헤드가 없는 대신, **빌드타임 오버헤드**가 있다.
- 오래된 런타임 환경을 지원하기 위해 낮은 버전으로 컴파일 할 때 성능 오버헤드가 발생할 수 있다. 예를 들어 제너레이터 함수를 es5 타깃으로 컴파일 하기 위해 특정 헬퍼 코드를 추가한다. 하지만 이는 **컴파일 타깃과 언어 레벨의 문제** 이지 타입과는 전혀 무관하다. 

## 요약

1. 코드 생성과 타입 시스템은 무관하다. 타입은 런타임 동작이나 성능에 영향을 주지 않는다.
2. 타입 오류가 존재하더라도 컴파일은 가능하다.
3. ts의 타입은 런타임에 사용할 수 없다. 런타임에 타입 지정하기 위해선, **속성 체크**, **태그된 유니온**, **클래스**가 사용된다.
