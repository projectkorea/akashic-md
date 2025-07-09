package com.projectkorea.kotlin.step01

// 1.
// Kotlin에서는 파일 이름과 클래스 이름이 일치할 필요가 없습니다. 파일 내에 여러 클래스나 함수를 정의할 수 있습니다.

// 2.
// Kotlin에서는 원시 타입(primitive types)이 아니라 모든 것이 객체입니다.
// 기본 타입들은 Java의 원시 타입들과 대응되며, Kotlin 표준 라이브러리에서 제공하는 클래스들로 래핑되어 있습니다.

// 3. import com.projectkorea.step01.Person
// 같은 package 안에 있으면 import 할 필요 없음

fun main() {
    val num1 = 10L
    // 1.
    // val num1 : Long = 10L
    // type inference 지원

    // 2.
    // val == const

    val num2 = 10L
    var num3: Long? = 1_000L
    // 2.
    // 기본적으로 모든 변수는 null이 들어갈 수 없도록 설계
    // nullable 하다면 type?를 명시적으로 사용하자

    val num4 = num1 + num2   // + num3; type misMatch
    // 4.
    // 연산시 알아서 Long타입이 long으로 바뀌며 효율적으로 계산

    num3 = 2_000_000L
    num3 = null

    val person = Person("junha")
    // 5. new 키워드 생략
    // 6. 자바, 코틀린 문자열은 " 따옴표 사용

    println(person.name)
}


// 요약
// 1.타입 명시하지 않아도 추론 가능
// 2. Primitive, Reference Type 구분 안해도 됌
    // 모든 타입을 객체로 취급.
    // 코틀린이 원시 타입을 객체로 포장하는 과정(오토박싱과 언박싱)을 자동으로 처리
// 3. nullable 타입은 ?만 붙이고, 완전히 타입으로 구분된다.
// 4. 객체의 인스턴스화는 new를 제외한다.
// 5. tools/kotlin -> "show kotlin byteCode" ->  Decompile
    // Java 파일로 변환된 것을 볼 수 있음.