# Object

## 1. Properties

```js
const junha = { name: 'junha', age: 10 };
junha.hasJob = true;
```

-   오브젝트의 프로퍼티를 중간에 추가할 수 있다.
-   다른 언어에서는 흔치 않은 일이다.
-   유지보수가 힘드니까 한 번에 선언하는 것을 권장한다.

## 2. computed properties

```js
function printValue(obj, key) {
    console.log(obj.key); // obj에 key라는 프로퍼티를 출력한다
}
function printValueComputed(obj, key) {
    console.log(obj[key]);
}

printValue(junha, 'name'); // undefined
printValue(junha, 'name'); // junha
```

-   Object['key']표기법을 말한다.
-   동적으로 key에 관한 value를 받아올 때 computed properties를 사용한다.

## 3. property value shorthand

-   key와 value의 이름이 동일하다면 value를 생략할 수 있다.

```js
const person1 = {name:'',age:}
const person1 = {name:'',age:}
function makePerson(name, age) {
    return {
        name,
        age,
    };
}
makePerson('junha',10)
```

## 4. Constructor function

-   다른 계산을 하지 않고 순수하게 Object를 생성하는 함수는 대문자로 시작하는 이름으로 만들고, this.name, this.age newPErosn으로 만든다.

```js
function Person(name, age) {
    //this = {}
    this.name = name;
    this.age = age;
    //return this
}
```

## 5. in operator

-   property existence check Key in obj
-   해당 key가 object가 있는지 확인하는 연산자

```js
console.log('name' in junha); // true
console.log('random' in junha); // false
console.log(junha.random); // undeifined
```

## 6. for in for of

```js
for (key in ellie) {
    console.log(key);
}

for (value of iterable) {
    console.log(value);
}
```

## 7. Cloning

```js
const user1 = { name: 'junha', age: 20 };
const user2 = user1;
user2.name = 'hajun';
```

-   user1, user2의 레퍼런스가 동일하기 때문에 user1의 name도 hajun으로 변한다.

```js
//old way
const user3 = {};
for (key in user) {
    userr3[key] = user[key];
}

// Object.assign(target, source)
const user4 = {};
Object.assign(user4, user);
const user4 = Object.assign({}, user);

const fruit1 = { color: 'red', price: 'high' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed); // {color: 'blue', price: 'high', size: 'big'}
```

-   color 프로퍼티가 중복되므로 값이 오버라이딩이 된다.
