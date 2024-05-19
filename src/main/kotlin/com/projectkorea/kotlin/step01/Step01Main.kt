package com.projectkorea.kotlin.step01

// import com.projectkorea.step01.Person
// 같은 package안에 있으면 import 할 필요 없다.

fun main() {
    val num1 = 10L
    // type inference
    // val == const

    val num2 = 10L
    var num3:Long = 1_000L
    var num4:Int? = 10

    val num5 = num1 + num2 + num3;
    // 연산시 알아서 Long타입이 long으로 바뀌며 효율적으로 계산

    num3 = 2_000_000L
    num4 = null

    val person = Person("junha")
    // new 키워드 제외
    // " 따옴표 사용

    println(person.name)
}


// Tips
// 1.타입 명시하지 않아도 추론 가능
// 2. Primative, Reference Type 구분 안해도 됌
// 3. nullable 타입은 ?만 붙이고, 아예 다른 타입으로 구분된다.
// 4. 객체의 인스턴스화는 new를 제외한다.

// tools/kotlin/show kotlin byte code /Decompile로 java파일로 변환된 것을 볼 수있음.