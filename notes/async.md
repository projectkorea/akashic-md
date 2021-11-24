# async await

-   [clear style of using promise]
-   promise를 좀 더 쉽게 쓰는 방법이다.
-   promise chaining을 좀 더 간편하게, 동기식으로 순서대로 작성하는 것처럼 도와준다.
-   syntatic sugar : 편리한 사용을 위한 그럴싸한 문법

## 1. async

-   오래 걸리는 일은 비동기로 처리할 수 있게 바꿔준다.
-   함수 앞에 async 키워드를 붙이면, 함수 안에 있는 **코드 블럭들이 promise로 바뀌어짐**
-   ```js
    async function fetchUser() {
        // do network request in 10secs
        return 'junha';
    }
    const user = fetchUser();
    console.log(user);
    ```

## 2. await

```js
function delay(ms) {
    return new Promise((resolve) => setTimeout(reslove, ms));
}
function getApple() {
    return delay(2000).then(() => '🍎');
}
function getBanana() {
    return delay(1000).then(() => '🍌');
}
function pickFruits() {
    return getApple().then((apple) => {
        return getBanana().then((banana) => `${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);
```

```js
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}
async function effPickFruits() {
    const applePromise = getApple(); //execute immediately
    const bananaPromise = getBanana(); //execute immediately
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);
```

## 3. useful promise

-   promise 배열을 전달하게 되면, 모든 promise들이 병렬적으로 받아줄 때 까지 받아줌

```js
function pickAllFruites() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
        fruits.join('+')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
```

-   race: 배열에서 가장 먼저 return하는 애만 전달되어짐
