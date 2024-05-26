package com.projectkorea.kotlin.step08

fun main() {
    fun max(a: Int, b:Int) = if (a>b) a else b

    fun printAll(vararg string: String) {
        println(string)
        for (str in string) {
            println(str)
        }
    }

    val array = arrayOf("a", "b", "c")

    printAll(*array)
}



// body가 하나의 값으로 간주되는 경우 block 생략 가능
// block이 없다면 return 생략 가능
// default parameter 지원
// 함수 호출시 특정 파라미터 지정해 값 할당 가능
// 가변인자에는 vararg 키워드 사용
// spread operator 는 *
