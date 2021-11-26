# script

## 1. async vs defer

-   html에 js를 추가하는 방법

![](https://user-images.githubusercontent.com/76730867/143374506-e2745ad6-7565-4e64-b0a6-3984d7141026.png)

1. head

```html
<head>
    <script src="main.js" />
</head>
```

-   많은 시간 소요

2. body

```html
<body>
    <div></div>
    <script src="main.js" />
</body>
```

-   [parsing html] => [fetching js] => [executing js]
-   dom요소가 js에 의존적이라면 정상적으로 페이지가 작동하기 까지 오래걸림.

3. head + async

```html
<head>
    <script async src="main.js" />
</head>
```

-   async속성은 boolean type이기 때문에 선언만해도 true로 초기화된다.
-   장점: script다운 속도 줄일 수 있음
-   단점: html parsing되기 전에 js가 동작하기 때문에 querySelector같은 DOM요소 조작이 정상 작동하지 않을 수 있음, executing시간 소모

4. head + defer

```html
<head>
    <script defer src="main.js" />
</head>
```

-   script 다운 시간 절약
-   html parsing끝에 작동하기 때문에 정상작동

5. when multiple script is added
   ![](https://user-images.githubusercontent.com/76730867/143378602-33eebaf1-0f1b-4142-8410-2d510aa2adc0.PNG)
   ![](https://user-images.githubusercontent.com/76730867/143378598-1ce4df5b-2e9a-41e9-a28c-f15fc4c5674c.PNG)

## 2. use strict

-   Javascript is very flexible
-   flexible is dangerous
-   so use `'use strict'`

```js
a = 6; // not working with 'use strict'
```
