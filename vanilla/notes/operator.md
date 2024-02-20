# operator

## 1) String concatenation

```js
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals 1 + 2 = ${1 + 2}`); // able to use single quote
```

## 2) Numeric operators

```js
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation
console.log(2 ** 3); // exponentiation
```

## 3) Increment and decrement operatiors

```js
let counter1 = 2;
const preIncrement = ++counter1;

let counter2 = 2;
const postIncrement = counter2++;

console.log(counter1, preIncrement); // 3 3
console.log(counter2, postIncrement); // 4 3
```

## 4) Assignment operators

```js
let x = 3;
let y = 6;
x += y; // x=x+y
```

## 5) Comparison operators

```js
console.log(10 < 6); // false
```

## 6) Logical operators

```js
const value1 = false;
const value2 = 4 < 2;

console.log(value1 || value2 || check());

function check() {
    for (let i = 0; i < 5; i++) {
        console.log('😨');
    }
    return true;
}
```

-   OR연산자는 처음으로 true가 나오면 거기서 멈추고 뒤의 값을 보지않는다.
-   따라서 heavy한 함수는 마지막에 넣어 효율적으로 계산하게 한다.
-   AND 연산자도 처음으로 false가 나오면 거기서 멈추고 뒤의 값을 보지 않는다.

```js
nullableObject && nullableObject.something;
if (nullableObject == true) {
    nullableObject.something;
}
```

## 6) Equiality operators

```js
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false, 다른 레퍼런스를 갖고 있기 때문이다.
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true
```

![](https://user-images.githubusercontent.com/76730867/143535733-0a6d4562-ca2d-4ba3-9618-80124c9012eb.PNG)

## 7) Ternary operator

```js
var name = junha;
console.log(name === 'junha' ? 'yes' : 'no');
```

## 9) Switch operator

```js
const browser = 'IE';
switch (brower) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you');
        break;
    default:
        console.log('same all');
        break;
}
```

## 10) While loop

```js
let i = 3;
while (i > 0) {
    i--;
}
```

-   조건먼저 검사하고 블록을 실행하게 함

## 11) do-while loop

```js
do {
    console.log('fisrt do');
    i--;
} while (i > 0);
```

-   블록이 먼저 실행하게 함

## 12) for loop

```js
for (kim = 3; kim > 0; kim--) {
    console.log(kim);
}

for (junha = 3; junha > 0; junha--) {
    console.log(junha);
}

for (let leo = 3; leo > 0; leo--) {
    console.log(leo);
}

console.log(kim); // 0
console.log(junha); // 0
console.log(leo); // leo is note defined
```

-   window.kim, winodw.junha에 선언이 됐기 때문이다.

## 13) nested loops
