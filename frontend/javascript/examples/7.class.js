'use strict';

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get _age() {
        //return value
        return this._age;
    }

    set _age(value) {
        //set value
        value > 25 ? (this._age = 20) : (this._age = value);
    }

    speak() {
        console.log(`${this.name}:Hello`);
    }

    speakFrankly() {
        console.log(this._age, 1);
        console.log(this.age, 2);
    }
}

const junha = new Person('junha', 26);
console.log(junha);
junha.speakFrankly();
