Object.toString
new Object().toString

const o: Object = {
  toString() {
    return 3;
  }
}

const ob: object = {
  toString() {
    return 3;
  }
}

const Obj1: Object = { key: "value" };  // OK, 객체 타입
const Obj2: Object = [1, 2, 3];         // OK, 배열도 객체이므로 가능
const Obj3: Object = 42;                // OK, 숫자도 가능
const Obj4: Object = "Hello";           // OK, 문자열도 가능
const Obj5: Object = null;              // Error, null은 허용되지 않음
const Obj6: Object = undefined;         // Error, undefined는 허용되지 않음

const obj1: object = { key: "value" };  // OK, 객체 타입
const obj2: object = [1, 2, 3];         // OK, 배열도 객체이므로 가능
const obj3: object = 42;                // Error, 숫자는 객체가 아님
const obj4: object = "Hello";           // Error, 문자열도 객체가 아님

// Object는 원시 값도 포함하는 넓은 타입, object는 순수하게 객체만 다루는 타입.
// Object.toString()은 특별한 기능은 없지만, 자바스크립트의 객체 시스템에서 일관성 있는 인터페이스 제공과 디버깅을 위해 정의된 정적 메서드이다.

type D = readonly [number, number];
type E = ReadonlyArray<number>;
type F = Readonly<string[]>;
// 중간에 값을 넣는다거나 splice 같은 메서드를 사용하면 에러가 발생한다.


// 연습 문제

// 1.
let a = 1042;
let b = 'apples and oranges';
const c = 'pineapples';
let d = [true, true, false];
let e = { type: 'ficus' };
let f = [1, false];
const g = [3];
let h = null;

// 2.
let i:3 = 3;
i=4; // Error

let j = [1, 2, 3];
j.push(4);
j.push('5'); // Error

let k: never = 4; // Error

let l: unknown = 4;

let mixed: typeof f =  [1, false, 42, true, 0, false];
let mixedArray: (number | boolean)[] = [1, false, 42, true, 0, false];
let array2: (number | boolean)[] = [true, true, false];     
// 기본적으로 배열을 선언할 때, 타입스크립트는 자동으로 유니언 타입 배열로 추론하는 반면, 튜플 타입은 명시적으로 지정해줘야 하는 특성이 있다는 점이 핵심이야
console.log(mixedArray);


/**
 * let a = 1042;

타입 추론: number
숫자 값이 할당되었으므로 타입스크립트는 a의 타입을 number로 추론.
let b = 'apples and oranges';

타입 추론: string
문자열 리터럴이 할당되었으므로 타입스크립트는 b의 타입을 string으로 추론.
const c = 'pineapples';

타입 추론: 'pineapples' (literal type)
const로 선언되었기 때문에 이 값은 변경되지 않으며, 타입스크립트는 c를 특정 문자열 리터럴 타입 'pineapples'로 추론.
let d = [true, true, false];

타입 추론: boolean[]
불리언 값들의 배열이므로 d는 boolean[]로 추론됨.
let e = { type: 'ficus' };

타입 추론: { type: string }
객체의 type 필드가 문자열로 할당되었으므로, 타입스크립트는 e의 타입을 { type: string }으로 추론.
let f = [1, false];

타입 추론: (number | boolean)[]
배열 안에 숫자와 불리언 값이 섞여 있으므로, f는 혼합된 타입 (number | boolean)[]으로 추론.
const g = [3];

타입 추론: number[]
배열이지만 const로 선언되었으므로 배열의 내용물은 숫자로 고정됨. 타입스크립트는 g를 number[]로 추론.
let h = null;

타입 추론: any
기본적으로 null은 any로 추론됨. 하지만 strictNullChecks 설정에 따라 null이 더 구체적으로 처리될 수 있음.
 * 


1. **`i: 3`**는 리터럴 타입으로, 다른 값을 할당하면 오류.
2. **`j.push('5')`**는 배열이 `number[]`로 추론돼서 문자열 추가 시 오류.
3. **`k: never`**는 값이 할당될 수 없는 타입이라 오류.
4. **`l: unknown`**은 타입이 불확실하므로 연산 불가, 타입 확인 후 연산해야 함.

unknown 타입은 안전성을 위해 값을 직접적으로 사용할 수 없음. l * 2 연산은 l의 타입이 불확실하므로 오류가 발생함. 연산하려면 타입 검증이 필요하며, typeof를 사용해 l이 숫자인지 확인 후에 연산을 진행해야 함.

 */


export {};