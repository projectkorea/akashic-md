package com.projectkorea.kotlin.step10

// 상속을 의미하는 :의 컨벤션은 양쪽으로 스페이스
// 상위 클래스의 생성자 바로 호출
// overide를 필수적으로 붙여줘야한다.

class KotlinCat (
    species: String
) : KotlinAnimal(species, 4) {

    override fun move() {
        println("고양 고양")
    }
}