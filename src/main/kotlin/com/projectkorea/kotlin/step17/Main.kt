package com.projectkorea.kotlin.step17

fun main() {
    val fruits = listOf(
        Fruit("사과", 2_000),
        Fruit("사과", 2_000),
        Fruit("사과", 2_000),
        Fruit("사과", 2_000),
        Fruit("사과", 2_000),
        Fruit("사과", 2_000)
    )

    val isApple: (Fruit) -> Boolean = fun(fruit: Fruit): Boolean {
        return fruit.name == "사과"
    }

    val isApple2 = {fruit: Fruit -> fruit.name == "사과"}
}


// 코틀린에서는 함수가 일급 시민이다. (값 처럼 활용 가능) = 변수에 넣을 수 있고, 파라미터로 전달할 수 도 있다.
// (파라미터 타입, ..) -> 반환 타입
// 람다의 마지막 expression 결과로 값을 반환한다.
