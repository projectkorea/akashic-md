# 타입은 값들의 집합이다

- **타입**은 변수가 가질 수 있는 **값들의 모음, 값들의 집합**이다
- 런타임에서 변수는 이 타입에 속하는 값들 중 하나를 실제로 가진다
- 타입의 범위는 **할당 가능한 값들의 집합이다**

- 타입을 값의 집합이라고 생각하면 이해하기 수월하다.
- 이 집합은 무한하거나, 유한하다. boolean/literal 타입, number/string
- TS는 엄격한 상속 관계가 아니라 겹쳐지는 집합으로 표현된다.


## 집합 크기에 따라 나눠보자

### 1. never`

- 공집합, 아무런 값도 할당할 수 없음

```ts

```

### 2. 유닛 타입, 리터럴 타입

- 한 가지 값만 포함

```ts
type A = 'a'
type Twelve = 12;
```

### 3. 유니온 타입

- 합집합, 두 개 혹은 세 개로 묶을 때

```ts
type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12
```

### 4. 인터섹션 타입


## 인터섹션에서의 차이점

- 타입은 값들의 집합이지만, 인터섹션 타입은 두 타입 모두의 요구사항을 만족하는 값들의 집합으로 해석해야 합니다.
- 인터섹션 타입은 단순히 공통된 속성만을 요구하는 것이 아니라, 두 타입에 있는 모든 속성을 만족해야 하는 타입입니다.
x

```ts
interface A {
  name: string;
}

interface B {
  age: number;
}

type AandB = A & B;

const person: AandB = {
  name: "Alice",
  age: 25
};

```

## extends

- A는 B를 상속한다. A는 B에 할당 가능하다. A는 B의 서브타입이다. A는 B의 부분집합이다. 모두 같은 뜻이다.
- ~의 부분집합, ~의 서브타입

```ts
interface Vector1D { x: number; }
interface Vector2D extends Vector1D { y: number; }
interface Vector3D extends Vector2D { z: number; }
```

```mermaid
graph TD;
    subgraph Vector1D["Vector1D"]
        subgraph Vector2D["Vector2D"]
            subgraph Vector3D["Vector3D"]
            end
        end
    end
```
