# prmomise

-   비동기를 도와주는 객체
-   정해진 장시간의 기능을 수행하고 나서, 정상적으로 작동했다면 성공의 메세지+결과값을 전달해주고,
-   기능을 수행하다가 예상치 못한 결과가 나왔을 때 error를 전달한다.

-   Promise is a built-in Javascript object for asynchronous
-   1. state: pending => fulfilled or rejected
-   2. producer / consumer

    -   producer: promise 옵젝
    -   consumer: 우리의 데이터를 소비

-   promise를 만들자마자 executor가 바로 실행이됨
-   when new Promise is created, the executor runs automatically!!!

**1. Producer**

```js
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('...');
    setTimeout(() => {
        resolve('junha');
    }, 2000);
    reject(new Error('no network'));
});
```

**2. Consumer: then, catch, finally**

```js
promise.then((value) => {
    console.log(value);
});
.catch(error => {
    console.log(error)
})
.finally(()=>{
    console.log('finally')
})
```

-   resolve(parameter) => then(value)
-   then은 결국 똑같은 promise를 리턴하기 때문에 catch로 받아올 수 있고, 이를 체이닝이라고 한다.
-   reject(error) => catch(error)
-   성공의 유무에 상관없이 호출된다.

**3. Promise Chaining**

```js
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    });
    .then(num => console.log(num))
```

**4. Error Handling**

```js
const getHen = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
};
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => '🥚'`), 1000);
    });
const getFry = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => '🥯'`), 1000);
    });
getHen()
    .then((hen) => getEgg(hen))
    .catch((error) => {
        return `${egg} => '🍕'`;
    })
    .then((egg) => getFry(egg))
    .then((meal) => console.log(meal));
```

-   암묵적으로 전달가능
    ```js
    .then((hen) => getEgg(hen))
    .then(getEgg)
    ```
