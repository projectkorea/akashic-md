package com.projectkorea.kotlin.step09

import com.projectkorea.java.step09.JavaPerson

fun main() {

    val junha = KotlinPerson("junha", 20)
    println("junha = ${junha.name}")
    junha.age = 30
    println("junha = ${junha.age}")

    val kimjunha = JavaPerson("kimjunha", 20)
    println("kimjunha = ${kimjunha.name}")

    val junhajunha = KotlinPersonV2()
    // this체이닝에 의해 print는 역순으로 실행

}

// 1. constructor 키워드를 생략할 수 있음
// class KotlinPerson constructor(name: String, age: Int) {

// 2. 생성자에서 프로퍼티를 만들 수 있음
// class KotlinPerson (name: String, age: Int) {
class KotlinPerson(val name: String, var age: Int)
//{
// val name = name
// val age = age
// 3.  getter, setter는 자동으로 생성됨
//}
// 4. body가 없는 클래스는 {}를 생략할 수 있음

// 6. 자바 클래스에 대해서도 .필드로 getter, setter를 사용

class KotlinPersonV2(val name: String, var age: Int) {
    // 초기화 시점에 한 번 호출
    init {
        if (age <= 0) {
            throw IllegalArgumentException("나이는 ${age} 일 수 없습니다.")
        }
        println("init 블록 실행")
    }

    // primary constructor 외에 secondary constructor를 만드려면 constructor 키워드를 사용
    constructor(name: String) : this(name, 1) {
        println("secondary constructor 1")
    }

    // 부생성자 추가로 만들 수 있음 체이닝함
    // constructor(): this("이름 없음")
    constructor(): this("이름 없음") {
        println("secondary constructor 2")
    }
}

// 코틀린에서는 부생성자보단 default parameter를 사용하는 것을 권장
// converting과 같이 어떤 객체를 다른 객체로 변환하는 경우에는 부생성자를 사용할 수 있지만
// 정적 팩토리 메소드를 사용하는 것을 권장 ㄷㄷ;; 함정이네
// 코틀린 정도쓰면 부생성자를 사용할 일이 없을 것 같다
// 타입스크립트가 트랜디하네