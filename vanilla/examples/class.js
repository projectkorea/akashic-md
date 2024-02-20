'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get age() { //return value
        return this.age
    }

    set age(value) { //set value
        this.age = value  
    }

    speak() {
        console.log(`${this.name}:Hello`);
    }
}

const junha = new Person('junha', 26);
