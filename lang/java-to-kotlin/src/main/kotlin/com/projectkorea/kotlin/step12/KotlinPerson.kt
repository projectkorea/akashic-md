package com.projectkorea.kotlin.step12

fun main () {
    println(SingletonPerson.name)

    // 익명 클래스: object : 타입이름
    moveSometing(object : MoveAble {
        override fun move() {
            println("Move")
        }

        override fun stop() {
            println("Stop")
        }
    })
}

private fun moveSometing(moveAble: MoveAble) {
    moveAble.move()
    moveAble.stop()
}

interface MoveAble {
    fun move()
    fun stop()
}

class KotlinPerson private constructor(
    val name: String,
    var age : Int
){
    // static 처럼 클래스와 동행하는 유일한 오브젝트라고 생각하자
//    companion object Factory: Log {
    companion object {
        // const 진짜 상수 일 때 사용: 컴파일 시 할당
        private const val MIN_AGE = 1

        @JvmStatic // 자바에서 companion object 를 사용할 때
        fun newBaby(name: String): KotlinPerson {
            return KotlinPerson(name, MIN_AGE)
        }

//        override fun log() {
//            println("I'm a companion object")
//        }
    }
}

interface Log {
    fun log()
}

object SingletonPerson {
    val name = "Singleton"
}

// 요약
// 1. 자바의 static 변수와 함수를 만드려면, 코틀린에서는 companion object 를 사용한다.
// 2. companion object 도 하나의 객체다. 이름을 붙일 수 있고, 다른 타입을 상속받을 수 있다.
// 3. 코틀린에서 싱글톤 클래스를 만들 때 object 키워드를 사용한다.
// 4. 익명 클래스를 만들 때 object : 타입을 사용한다.