# 타입과 인터페이스 차이

```ts
type TState = {
  name: string;
  capital: string
}

interface IState = {
  name: string;
  capital: string;
}
```

- 인덱스 시그니처
  - 객체가 동적으로 결정되는 키-값 쌍을 가질 때 매우 유용합니다. 
  - 이를 통해 다양한 형태의 객체를 타입 안전하게 다룰 수 있으며, 코드의 유연성을 높일 수 있습니다.

```ts
type TDict = { [key:string]: string}
interface IDict = {
  [key: string] :string;
}
```

```ts
interface User {
    name: string;
    age: number;
    [key: string]: string | number;
}

let user: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    phone: "123-456-7890"
};

console.log(user.name); // "Alice"
console.log(user.email); // "alice@example.com"

```

- js에서 함수는 호출 가능한 객체다

- 
타입은: 유니온 타입과 교차 타입을 정의할 수 있어 간단하고 유연함.
인터페이스는 객체 구조를 정의할 때 주로 사용되며, 선언 병합을 통하 보강 기법을 통해 필드를 쉽게 추가할 수 있음.

새로운 필드가 추가/제거가 농후하게 일어나는 프로젝트는 인터페이스
타입에 선언 병합이 발생하면 안되는 타입이 strict하게 유지되는 프로젝트는 타입

