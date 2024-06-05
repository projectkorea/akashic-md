package com.projectkorea.kotlin.step11

class main {
}


// 클래스 안의 멤버
// 생성자에 접근 지시어를 추가 해주려면 constructor 을 써야함

open class Cat protected constructor(val name: String) {
    fun hello() {
        println("Hello, I'm $name")
    }
}

// 1. 기본 접근 지시어는 public
// 2. .kt 파일 최상위에 클래스, 함수, 변수 여러개를 만들 수 있음
// 3. 생성자에 접근 지시어를 붙이려면 constructor 써주기


// protected: 선언된 클래스 || 하위 클래스에서만 접근 가능 (같은 패키지가 빠짐)
// 코틀린에서는 패키지 라는 개념을 접근 제어에 사용하지 않기 때문에
// protected 에서는 패키지가 빠지고
// default 는 internal 로 변경되면서 모듈 접근 제어하는 기능이 생김


// default 가 public
// protected는 파일 최상단에서 쓸 수 없음, 선언된 클래스와 하위 클래스에 해당하는 개념
// private는 같은 파일 내에서만 사용 가능


/* 접근 가능한 곳
public: 모든 곳
protected: 선언된 클래스, 하위 클래스
internal: 같은 모듈 내부
private: 선언된 클래스 내부
*/


// Java Kotlin 함께 쓸 때 주의점
// 1. internal 은 Java 에서 public 으로 취급 -> Java 코드에서는 Kotlin 모듈의 internal 코드를 가져올 수 있음
// 2. Java 는 같은 패키지의 Kotlin protected 멤버에 접근 가능



// 요약
// 1. 코틀린 에서 패키지는 네임스페이스 관리용. protected 의미 달라짐.
// 2. 코틀린 에서 default 가 internal 로 변경됨. 모듈간의 접근을 통제함
// 3. 생성자에 접근 지시어를 붙일 때는 constructor 를 명시적으로 써야함
// 4. 유틸성 함수를 만들 때는 파일 최상단 이용
// 5. 프로퍼티의 custom setter 에 접근 지시어 붙이기 가능
// 6. Java 에서 Kotlin 코드를 사용할 때 internal 과 protected 는 주의하자
