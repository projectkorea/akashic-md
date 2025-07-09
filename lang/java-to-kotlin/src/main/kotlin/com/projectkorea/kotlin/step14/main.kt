package com.projectkorea.kotlin.step14

data class PersonDto(
    var name: String = "",
    var age: Int = 0
) {
}

enum class Country(
    private val code:String
) {
    KOREA("KR"),
    USA("US"),
    JAPAN("JP"),
    CHINA("CN");

    fun getCode(): String {
        return code
    }
}


// 요약
// data class:
// enum class: when
// sealed class: when