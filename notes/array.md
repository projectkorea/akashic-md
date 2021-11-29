# Array

-   자바스크립트의 배열의 요소는 다양한 데이터 타입을 넣는 것이 가능하지만, 동일한 데이터 타입을 넣는 것을 권장한다.

## 1. Looping over an array

```js
const fruits = ['🍒', '🥭', '🍍'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));
```

## 2. unshift, shift 메서드

```js
fruits.unshift('🥝'); // unshift: add an item to the begining
fruits.shift(); // shift: remove an item from the begining
```

-   unshift, shift are slower than pop, push
-   배열의 전체 요소가 움직여지기 때문이다.

## 3. splice 메서드

```js
const array1 = [0, 1, 2, 3, 4, 5];
array1.splice(1); // [0]
array1.splice(1, 1); // [0, 2, 3, 4, 5]
array1.splice(1, 1, 7); // [0, 7, 2, 3, 4, 5]
```

-   세번째 인자부터, 지운 인덱스에 엘리먼트를 추가할 수 있다.

## 4. concat 메서드

```js
const array1 = [0, 1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c'];

const array3 = array1.concat(array2);
```

## 5. Search

```js
// indexOf: return the index of value
const tools = ['a', 'b', 'c', 'd', 'e', 'a'];
console.log(tools.indexOf('b')); // 1
console.log(tools.indexOf('z')); // -1

// includes: return true of false
console.log(tools.includes('a')); // true
console.log(tools.includes('y')); // false

// lastIndexOf
console.log(tools.indexof('a')); // 0
console.log(tools.lastIndexof('a')); // 5
```
