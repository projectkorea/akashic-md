package com.projectkorea.kotlin.step08

// (public) 접근 지시어는 생략 가능 public fun max
// Void == Unit 반환 타입은 생략 가능

fun main() {
    repeat("Hello World", 3)
    repeat("Hello World")

    // Named Argument
    // 함수 호출시 특정 파라미터 지정해 값 할당 가능
    // builder를 직접 만들지 않고 builder의 장점을 갖게된다.
    // Kotlin에서 Java 함수를 가져다 사용할 때는 사용 불가
    // jvm상에서 java가 바이트 코드로 변환됐을 때 parameter 이름을 보존하고 있지 않음
    repeat("Hello World", useNewLine = true)

    // builder 추가 예시
    // printNameAndGender(name="준하", gender = "MALE")
    //    .name("준하")
    //    .gender("MALE")

    // 가변인자 예시
    printAll("A", "B", "C")
    val array = arrayOf("a", "b", "c")
    printAll(*array) // * 는 spread operator
}

fun printNameAndGender(name:String, gender:String) {
    println(name)
    println(gender)
}

fun max(a: Int, b: Int):Int {
    if (a>b) {
        return a
    } else {
        return b
    }
}

// if-else는 Expression
// block이 없다면 return 생략 가능

fun maxV2(a: Int, b: Int): Int {
    return if (a>b) {
        a
    } else {
        b
    }
}

// 리턴 타입 생략: 반환 값 타입추론 가능함
// '=' 사용: 함수(body)가 하나의 결과 값이라면 block 생략 가능

fun maxV3(a: Int, b:Int) = if (a>b) a else b

fun repeat(
    str:String,
    num:Int = 3,
    useNewLine:Boolean = false
) {
    for (i in 1..num) {
        if (useNewLine) {
            println(str)
        } else {
            print(str)
        }
    }
}

// 가변 인자 (같은 타입의 여러 파라미터 받기)
// Java에서 ...을 타입 뒤에 쓰는 대신 제일 앞에 vararg를 적어줌
fun printAll(vararg string: String) {
    println(string)
    for (str in string) {
        println(str)
    }
}

// 함수는 클래스 안에, 파일 최상단에, 한 파일안에 여러 함수들이 있을 수 있다.
// default parameter 지원
// 가변인자에는 vararg 키워드 사용

// 요약
// 1. 코틀린에서 함수 선언
// 접근지시어 fun 함수이름(파라미터):반환타입 {}

// 2. body가 하나의 값으로 간주되는 경우 block없앨 수 있고, block이 없다면 반환 타입을 없앨 수 있다.
// 3. 함수 default parameter 지원
// 4. 가변인자에는 vararg 키워드를 사용, 가변인자 함수를 배열과 호출할 때는 *를 붙여준다.