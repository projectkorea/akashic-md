// constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
const callback = function () {
    console.log("Yay! It's Lucky 7!🎉🎉🎉");
};
class Counter {
    constructor(multiple, callback) {
        this.counter = 0;
        this.multiple = multiple;
        this.callback = callback;
    }
    checkMultiple() {
        if (this.counter % this.multiple === 0) {
            console.log(`${this.counter}는 ${this.multiple}의 배수입니다.`);
        } else {
            console.log(this.counter);
        }
    }
    increase() {
        // class안의 함수는 따로 function 생성자를 쓰지 않아도 된다.
        this.counter++;
        this.multiple && this.checkMultiple();
        this.callback && this.counter === 7 && this.callback();
    }
}

const counter3 = new Counter(3, callback);

counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
counter3.increase();
