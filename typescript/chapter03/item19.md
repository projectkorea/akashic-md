# 추론 가능한 타입을 사용해 간결하게 만들기

- typescript는 타입 추론을 지원하기 때문에 필요한 핵심적인 부분에만 타입 선언을 해주면 개꿀이다.
- 모든 부분에 명시적 타입 구문을 강요하지 않는다.

```ts
const person: {
  name:string;
  born: {
    where: string;
    when: string;
  } = {
    name: "Junha",
    born: {
      where: "NY",
      when: 2003
    }
  }
};
```

```ts
const person = {
  name: "Junha",
  born: {
    where: "NY",
    when: 2003
  }
}
```

```ts
app.get('/health', {request: express.Request, response: express.Response}) => {
  response.send('OK')
}
// 이렇게 짜지좀 맙시다 ㅎㅎ
```

- 타입 정보가 있는 라이브러리에서 콜백 함수의 매개변수 타입은 자동으로 추론되므로 타입 선언은 불필요하다.


 "함수의 시그니처"라는 표현은 함수의 입력과 출력, 그리고 그 함수의 전체적인 인터페이스를 명확히 정의하는 데 중요한 역할을 합니다. 이는 단순히 "파라미터"라고 말하는 것보다 더 포괄적인 개념을 다루기 때문에 별도로 구분하여 사용하는 것이 유리합니다.



 - 추론될 수 있는 경우라도 객체 리터럴과 함수 반환에는 타입 명시를 고려해야한다. 내부구현의 오류를 방지하는 데 큰 도움된다.
- 객체 리터럴은 잉여 속성 잡는데 큰 도움이고
- 함수 반환은 함수 시그니처 파악이 코드 설계에 큰 도움이라

 ```ts
 function getQuote(ticker: string) {
  if (ticker in cache) {
    return cache[ticker] // ???
  }
  return fetch(`https://quotes.com/${ticket}`)
  .then(response => response.json())
  .then (quote => {
    cache[ticker] = quote
    return quote; // ???
  })
 }
 ```


