# function

-   function is object in JS
-   so it can be used 변수에 할당, 함수를 리턴할 수도 있다.

```ts
function log(message: string): number {
    console.log(message);
    return 0;
}
```

```js
function log(message) {
    console.log(message);
    return 0;
}
```

## 2. parameter

-   premitive parameters: passed by value
-   object parameters: passed by reference

```js
function changeName(obj) {
    obj.name = `${obj.name} is changed to leo`;
}

const junha = { name: 'junha' };
changeName(junha);
console.log(junha);
```

## 3. default parameters

```js
function showMessage(message, from = 'admin') {
    console.log(message, from);
}
showMessage('hi'); // Hi adming
```

## 4. rest Parameters

```js
function printAll(...args) {
    console.log(args);
}
printAll('kim', 'junha', 'jjang'); // ['kim', 'junha', 'jjang']
```

-   ...을 붙이면 인자들을 배열로 받아온다.

## 5. Local scope

```js
let globalMessage = 'global';
function printMsg() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMsg();
```

모든 함수는 return undefiend가 생략되어있다.
early return 조건이 맞지 않을 때 빨리 리턴하는 것

```js
function upgradeUser() {}

function upgradeUser() {}
```

## Function Declaration

```js
function(){

}
```

## Function Expression

```js
const print = function () {
    console.log(print);
};
const printAgain = print;
printAgain();
```

-   Function declaration can ve called earlier than it is defined (hoisted)

-   anonymous function
-   named function
-   better debugging in debugger's stack traces
-   recursions

arrow Function

```js
const simplePrint = () => {};
```

# IIFE

```js
(function hello() {
    console.log('hi');
})();
```
