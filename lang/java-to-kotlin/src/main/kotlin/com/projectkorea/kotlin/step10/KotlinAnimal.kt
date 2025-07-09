package com.projectkorea.kotlin.step10

abstract class KotlinAnimal(
    protected val species: String,
    protected open val legCount: Int,
    // 추상 프로퍼티가 아니라면 상속받을 때 open 붙임
) {
    abstract fun move()
}

// final: override 불가. default 설정.
// open: override 열어줌
// abstract: 반드시 override 해야함
// override: 상위 타입을 오버라이드 하고 있음을 나타내며 키워드로 붙여야함

// 요약
// 1. 상속, 구현할 때 : 사용
// 2. 상위 클래스 상속 구현시 생성자 반드시 호출해야함
// 3. override 필수로 붙임
// 4. 추상 멤버가 아니면 오버라이드 불가능. open 써줘야 가능
// 5. 상위 클래스의 생성자 or init 블록에서 open 프로퍼티 사용시 초기화 전 값으로 불려져 버그 발생