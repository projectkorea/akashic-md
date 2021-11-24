# Callback

-   Javascript is synchronus
-   Execute the code block by order after hoisting
-   정해진 순서에 맞게 코드가 실행되는 것
-   Asynchronous언제 실행될지 예측할 수 없는

```js
function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 동기 콜백 setTimeout webapi사용 안한 콜백함수
printImmediately(() => console.log('hi'));
// 비동기 콜백 setTimeout webapi사용한 콜백함수
printWithDelay(() => console.log('hellod'), 2000);
```
