# type

**block scope**

```js
{
    let name = 'junha';
    console.log(name);
}
```

-   중괄호를 이용해 block을 만들면 scope가 생긴다.

**var hoisting**

```js
age = 4;
console.log(age); // 4
```

```js
age = 4;
var age;
console.log(age); // 4
```

```js
age = 4;
let age;
console.log(age); // Cannot access 'age' before initialization
```

-   호이스팅: 어디에 선언했느냐와 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말함
-   var은 블록 스코프를 무시한다.

```js
{
    var age;
    age = 4;
}
console.log(age); // 4s
```

## constant

-   favor immutable data type always for a few reasons
    -   security
    -   thread safety(여러 스레드가 한 변수에 동시에 접근하는 것을 방지)
    -   reduce human mistakes

```js
const infinity = 1 / 0; //infinity
const negativeInfinity = -1 / 0; // -infinity
const nAn = 'string' / 2; // NaN
```

```js
const bigInt = 1234567890n;
console.log(`value':${bigInt}, type:${typeof bigInt}`);
```

-   ``: template literals
-   false: 0, null, undefined, Nan, ''

```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
console.log(symbol1); // error
console.log(symbol1.description); // id
```

-   정말 고유한 식별자를 사용하고 싶을 때 사용한다.
-   동일한 string으로 생성해도 다른 symbol로 작성된다.

## dynamic typing: dynamically typed language

```js
let text = 'hello';
console.log(text.charAt(0)); // h
text = '7' + 5; // '75' : string
text = '8' / '2'; // 4 :number
console.log(text.charAt(0)); // error
```

-   javascript는 런타임에서 타입이 정의되기 때문에 오류가 런타임 이후에 발생하기도 한다.
-   dynamic typing 특성 때문에 text의 type을 바뀌어 string에 존재하는 프로퍼티를 number에 적용해서 에러가 생겼다.

```js
const ellie = {
    name: 'ellie',
    age: '20',
};
ellie.age = 21;
```

![](https://user-images.githubusercontent.com/76730867/143519157-78e32621-378b-4b86-ab43-5d742f1801c4.PNG)

-   const키워드로 저장되어 ellie가 가리키는 포인터는 잠겨있어서 다른 오브젝트로 할당이 불가능하다.
-   ellie 오브젝트 안에는 변수들을 자유롭게 지정할 수 있어, 프로퍼티 각각의 포인터가 가리키고 있는 메모리에 다른 값을 할당할 수도 있다.
