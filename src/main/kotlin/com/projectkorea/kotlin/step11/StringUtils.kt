package com.projectkorea.kotlin.step11

// 직접 파일 최상단에 유틸성 코드를 적음
// 바이트 코드 봐보자
fun isDirectoryPath(path: String): Boolean {
    return path.startsWith("/")
}

// 프로퍼티 가시성 범위 제어
class Car (
    internal val name: String,
    private val owner: String,
    _price: Int
) {

    var price = _price
        private set
    // setter 에만 추가로 가시성 부여 가능
}

// internal 은 바이크 코드 상 public 이 된다.
// protected: Java 에서는 같은 패키지의 Kotlin protected 멤버에 접근 가능하다.
