'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}:Hello`);
    }
}

const junha = new Person('junha', 26);
