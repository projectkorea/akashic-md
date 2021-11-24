# Class Object

## 1) class, object

---

class

1. template
2. declare once
3. no data in

Object

1. instance of a class
2. created many Times
3. data in

---

## 2) getter, setter

getter, setter

-   이상한 값 방어모드

```js
this.age = age
get age() {
    return this.age
}
set age(value){
    this.age = value
}
```

-   age라는 getter를(get age(){}) 정의하는 순간, `this.age`는 메모리에 올라와 있는 데이터를 읽어오는 것이 아니라, `getter를 호출`하게 된다.
-   age라는 setter를(set age(){}) 정의하는 순간, `=`age는, 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라 `setter를 호출`하게 된다.
-   그말은 setter 안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 업데이트 하는 것이 아니라 setter를 호출하게 된다.
-   또 반복된다.

```js
this.age = age
get age() {
    return this._age
}
set age(value){
    this._age = value
}
```

-   따라서 getter, setter에서 사용하는 변수는 다르게 해준다.
-   따라서 User의 프로퍼티에는 1) \_age만 존재하게 된다.

-   set `age`(){}랑 setter안에 있는 `this.age`이름이 같으면 무한반복이 된다.

---

## 3) private, public

```js
class Car {
    publicField = 2;
    #privateField = 0;
}
const Ford = new Car();
console.log(Ford.publicField); // 2
console.log(Ford.privateField); // undefiend
```

-   #붙이면 프라이빗 필드가 된다.
-   최신 문법이기 때문에 babel 사용해야함.

## 4) Static

```js
class Article {
    static publisher = 'unitive';
    constructor(articleNumber) {
        this.articleNumbeer = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);

console.log(article1.publisher); // undefined
console.log(Article.publisher); // unitive
Article.publisher(); // unitive
```

-   static: 클래스안에서만 사용할 수 있는 프로퍼티
-   object에 일일이 값을 넣어주지 않고, class에만 정의하고 사용하니까 메모리를 효율적으로 사용

## 5) 상속&다형성

```js
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log('now drawing');
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return this.width * this.height * 0.5;
    }
    draw() {
        super.draw(); //부모 draw호출
        console.log('📐📐📐');
    }
}
const rectangle = new Rectangle(20, 20, blue);
const triangle = new Triangle(20, 20, blue);
```

## 6) instanceof

```js
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); // false
console.log(rectangle instanceof Shape); // true
console.log(rectangle instanceof Object); // trie
```
