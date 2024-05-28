package com.projectkorea.kotlin.step09

import com.projectkorea.java.step09.step09.JavaPerson

fun main() {

    val junha = KotlinPerson("junha", 20)
    println("junha = ${junha.name}")
    junha.age = 30
    println("junha = ${junha.age}")

    val kimjunha = JavaPerson("kimjunha", 20)
    println("kimjunha = ${kimjunha.name}")

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