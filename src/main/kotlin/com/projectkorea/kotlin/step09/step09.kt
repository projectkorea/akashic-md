package com.projectkorea.kotlin.step09

import com.projectkorea.java.step09.JavaPerson

fun main() {

    val junha = KotlinPerson("junha", 20)
    junha.age = 30
    println("junha = ${junha.name} ${junha.age}")

    val leo = JavaPerson("leo", 20)
    println("leo = ${leo.name}")

    val cream = KotlinPersonV2()
    println(cream.isAdultV3)
    // 체이닝에 의해 print는 역순으로 실행
}

// 1. constructor 키워드 생략 가능
// class KotlinPerson constructor(name: String, age: Int) {

// 2. 생성자에서 프로퍼티를 만들 수 있음
// class KotlinPerson (name: String, age: Int) {
// val name = name
// val age = age
class KotlinPerson(val name: String, var age: Int)

// 3. val, var로 선언된 프로퍼티는 getter, setter는 자동으로 생성됨
// val은 읽기 전용(getter만 생성)
// var는 읽기 및 쓰기 가능한(getter와 setter를 모두 생성) 변수를 나타냅니다.

// 4. body가 없는 클래스는 {}를 생략할 수 있음
// 5. 자바 클래스에 대해서도 .필드로 getter, setter 사용 가능

class KotlinPersonV2(name: String, var age: Int) {
    // 초기화 시점에 한 번 호출
    init {
        if (age <= 0) {
            throw IllegalArgumentException("나이는 ${age} 일 수 없습니다.")
        }
        println("init 블록 실행")
    }

    var name = name
        set(value) {
            field = value.uppercase()
        }
    // 필드를 업데이트 시킬 때 업데이트 함수를 이용하기 때문에 setter 사용 자체를 지양함
        
    get() = field.uppercase()
    // 1. backing field
    // name이라고 쓰면 바로 옆의 getter를 부르기 때문에 자기 자신을 가리키는 field를 사용해야함
    // 이 방법도 굳이 안씀.
    // 대문자로 바꿔서 보여주려면 요구사항을 반영하는 따로 getter 만들어주는 게 좋음

    // constructor 키워드
    // primary constructor 외에 secondary constructor 만듬
    constructor(name: String) : this(name, 1) {
        println("secondary constructor 1")
    }
    // 부생성자 추가로 만들 수 있음 (체이닝)
    constructor(): this("이름 없음") {
        println("secondary constructor 2")
    }

    fun isAudlt(): Boolean {
        return this.age >= 20
    }

    // custom getter
    val isAdultV2: Boolean
        get() {
            return this.age >= 20
        }

    val isAdultV3: Boolean
        get() = this.age >= 20
}

// 부생성자 << default parameter 권장
// 객체를 다른 객체로 변환하는 경우에는 부생성자를 사용할 수 있지만, 차라리 정적 팩토리 메소드를 사용하는 것을 권장
// (느낀점) 코틀린 정도쓰면 부생성자를 사용할 일이 없을 것 같다

// 요약
// 1. 필드를 만들면 getter, setter를 자동으로 만들어주기에 이를 프로퍼티라고 부른다.
// 2. 주생성자가 필수다
// 3. constructor 키워드를 사용해 부성자를 추가로 만들 수 있다. 단, default parameter를 추천한다.
// 실제 메모리에 존재하는 것과 무관하게 (=함수로도 만들 수 있지만 프로퍼티 인것처럼) custom getter 처럼 활용
// custom getter, setter에서 무한 루프를 막기위해 backing field 사용