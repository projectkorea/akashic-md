# JSON

-   비동기 통신에 많이 쓰이는 기술

    1. xmlHttpRequest Object
    2. fetch() API

-   XML: 불필요한 태그, 커지는 파일 사이즈, 나빠지는 가독성
-   JSON: XML을 대체하는 중, JavaScript Object Notation

**json 특징**

-   1. simplest data interchange format
-   2. lightweight text-based structure
-   3. easy to read
-   4. key-value pairs
-   5. used for serialization and transmission of data between the network the network connection
-   6. independent programming language and platform

**json 공부 포인트**

-   1. json을 serialize하는 방법

    -   object => string
    -   JSON.stringify(obj)

-   2. 직렬화된 string을 deserialized하는 방법
    -   string => object
    -   JSON.parse(obj)

**1. Object to JSON**

```js
let json = JSON.stringify(true);
json = JSON.stringify(['apple', 'banana']);
const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'null',
    birthDate: new Date(),
    jump: () => {
        console.log('JUMP!');
    },
};
json = JSON.stringify(rabbit);
json = JSON.stringify(rabbit, ['name', 'color']);
// 두번째 인자를 넣어, 원하는 프로퍼티만 추출가능

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'name is changed' : value;
    // 콜백함수로 세밀하게 조정도 가능
    // 특정 프로퍼티 값을 변경할 수도 있다.
    // return value가 default 설정이다.
});
```

-   jump는 함수이기 때문에 stringigy가 되지 않음.

**2. JSON to Object**

```js
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);

rabbit.jump(); // ok
obj.jump(); // Uncaught TypeError

rabbit.birthDate.getDate(); // ok
obj.birthDate.getDate(); // Uncaught TypeError

const obj = JSON.parse(json, (key,value) =>{
    console.log(`key:${key}, value: ${value}`)
    return key ==='birthDate'? new Date(value) : value;
};
```

-   sereailize한 obj는 함수가 들어가 있지 않기때문에 typeError가 나온다..
-   마찬가지로 birthDate라는 객체도 더이상 메서드를 사용할 수 없다.
