package com.projectkorea.kotlin.step05

fun validateScoreIsNotNegative(score: Int) {
    if (score < 0) {
        throw IllegalArgumentException("${score} cannot be smaller than 0")
    }
}

fun getPassOrFail(score: Int):String {
    return if (score>50){
        "P"
    } else {
        "F"
    }
}