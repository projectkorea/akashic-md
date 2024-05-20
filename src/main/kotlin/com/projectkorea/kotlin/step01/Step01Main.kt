package com.projectkorea.kotlin.step01

// 1,
// import com.projectkorea.step01.Person
// 같은 package안에 있으면 import 할 필요 없음

fun main() {
    val num1 = 10L
    // 2.
    // type inference 지원

    // 3.
    // val == const

    val num2 = 10L
    var num3:Long? = 1_000L
    // 4.
    // kotlin에서는 기본적으로 모든 변수는 null이 들어갈 수 없도록 설계
    // 따라서 nullable 하다면 type?를 명시적으로 사용해야함

    var num4:Int? = 10

    val num5 = num1 + num2 + num3;
    // 4.
    // 연산시 알아서 Long타입이 long으로 바뀌며 효율적으로 계산

    num3 = 2_000_000L
    num4 = null

    val person = Person("junha")
    // 5.
    // new 키워드 생략

    // 6.
    // 자바, 코틀린 문자열은 " 따옴표 사용

    println(person.name)
}


// Tips
// 1.타입 명시하지 않아도 추론 가능
// 2. Primative, Reference Type 구분 안해도 됌
    // 모든 타입을 객체로 취급.
    // 코틀린이 원시 타입을 객체로 포장하는 과정(오토박싱과 언박싱)을 자동으로 처리
// 3. nullable 타입은 ?만 붙이고, 아예 다른 타입으로 구분된다.
// 4. 객체의 인스턴스화는 new를 제외한다.
// 5. tools/kotlin/show kotlin byte  code /Decompile로 java파일로 변환된 것을 볼 수 있음.