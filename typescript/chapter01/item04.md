# 구조적 타이핑 익숙해지기

- **Duck Typing**
  - "만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거린다면 나는 그 새를 오리라고 부를 것이다."
  - 필요한 메서드나 속성을 가지고 있으면 그 타입으로 간주하는 방식이다. 객체의 실제 타입을 보지 않는다.

- **Structural Typing**
  - 타입을 검사할 때 **객체의 구조를 기반으로 타입 호환성을 판단**하는 방식. 덕 타이핑을 활용하여, 타입의 이름이 아니라 객체의 구조에 집중함. 객체가 특정 타입이 요구하는 모든 프로퍼티와 메소드를 가지고 있으면, 해당 객체를 그 타입으로 간주. 정적 타입 언어에서 사용. 정적 타입 검사 시점에서 이루어짐.

- 두 개념 모두 객체의 구조를 기반으로 타입을 결정하지만, `Duck Typing`은 동적 타입 언어, `Structural Typing`은 정적 타입 언어에서 주로 사용된다.

## vector 코드 예시

### 예시1

```ts
interface Vector2D {
  x: number;
  y: number;
}
interface NamedVector2D {
  name: string;
  x: number;
  y: number;
}

function calcLength(v: Vector2D) {
  return Math.sqrt(v.x*v.x + v.y*v.y);
}
```

```ts
const v: NamedVector = { x:3, y:4, name:"zee"};
calcLength(v); // 오류 없음
```

- `Vector2D`, `NamedVector의` 관계를 선언하지 않았음에도 호환이 된다.

### 예시2

```ts
interface Vector3D {
  x: number
  y: number
  z: number
}

function normalize(v: Vector3D) {
  const length = calcLength(v) 
  // 이 함수는 Vector2D의 length를 구함
  
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

normalize({ x: 3, y: 4, z: 5 })
// length 계산 오류로 정규화 실패!
```

- `calcLength` 호출시 `Vector2D`와 `Vector3D`가 호환되어 z 변수가 정규화에 무시되어 버그 발생.

### 예시3

```ts
function calcLengthL1 (v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    // Error: Element implicitly has an 'any' type 
    // because expression of type 'string' can't be used to index type 'Vector3D'.
    length += Math.abs(coord); 
  }
  return length;
}
```

- `Vector3D` 객체에서 `axis`를 `string` 타입으로 인덱싱할 경우, 그 키가 어떤 속성에 해당하는지, `v[axis]`가 어떤 속성이 될지 알 수 없기 때문에 `number`라고 확정할 수 없어 오류가 발생한다.

## 클래스 예시

```ts
class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}
const c:C = new C('real instance of C');
const d:C = {foo: 'object literal'}; // 정상
```

- `d`가 C타입에 할당되는 이유를 알아보자.
- `d`는 `string` 타입의 `foo` 속성을 가지며, 객체의 구조가 `C` 타입과 호환된다.
- 구조적으로 필요한 속성들이 존재하기 때문에 문제가 없다.
- 만약 생성자에 단순 할당이 아닌 연산 로직이 들어간다면 문제가 발생할 수 있다.

## 테스트 코드 예시

```ts
interface Author {
  first: string;
  last: string;
}
function getAuthors(db: PostGresDB): Author[] {
  const authorROws = db.runQuery(`SELECT FIRST, LAST FROM AUTHORS`);
  return authorRows.map(row => ({first: row[0], last: row[1]}))
}
```

- `getAuthors`함수를 테스트 하기 위해 모킹한 `PostgresDB`를 생성해야한다. 그러나 구조적 타이핑을 활용하여 더 구체적인 인터페이스를 정의하는 것이 더 낫다.

```ts
interface DB {
  runQuery: (sql:string) => any[];
}
function getAuthors(db: DB): Author[] {
  // 동일
}
```

- `runQuery` 메서드가 있기 때문에 실제 환경에서도 `PostgresDB`를 쓸 수 있고, 테스트 코드를 작성할 때도 실제 환경의 데이터베이스에 대한 정보가 필요 없어 간단해진다. 모킹 라이브러리를 쓸 필요 없이 추상화함으로써 로직과 테스트를 특정한 구현(PostgresDB) 으로부터 분리한 효과를 낼 수 있다.

```ts
test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [['junha', 'kim']]
    }
  });
  expect(authors).toEqual([
    {first:'junha', last:'kim'}
  ])
})
```

## 요약

- js가 덕타이핑 기반이고 ts가 이를 모델링하기 위해 구조적 타이핑을 사용한다.
- 어떤 인터페이스에 할당 가능한 값이라면 타입 선언에 명시적으로 나열된 속성들을 가지고 있을 것이다. 타입은 '봉인' 되어 있지 않는다.
- 클래스 역시 구조적 타이핑 규칙을 따른다. 클래스의 인스턴스가 예상과 다를 수 있다.
- 구조적 타이핑을 사용하면 유닛 테스팅이 쉬워진다.
