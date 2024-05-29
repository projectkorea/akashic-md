package com.projectkorea.kotlin.step04

import com.projectkorea.java.step04.JavaMoney

fun main() {
    val money1 = JavaMoney(1_000L)
    val money2 = JavaMoney(2_000L)

    if (money1 < money2) {
        println("money1 < money2")
    }
    // Java와 다르게 객체를 비교할 때 비교 연산자를 사용하면 자동으로 compareTo() 메소드를 호출한다.
}

// 동등성(equality) 두 객체의 값이 같은가 ==
// 동일성(identity) 두 객체가 같은 객체인가, 주소가 같은가 ===