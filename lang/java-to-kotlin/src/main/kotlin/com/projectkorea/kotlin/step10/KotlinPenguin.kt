package com.projectkorea.kotlin.step10

class KotlinPenguin(
    species: String
) : KotlinAnimal(species, 2), KotlinSwimable, KotlinFlyable {

    private val wingCount = 2
    override fun move() {
        println("뒤뚱뒤뚱")
    }

    override val legCount: Int
        get() = super.legCount + this.wingCount
    // 추상클래스에서 자동으로 만들어진 getter override 하기위해 custom getter 사용

    override fun act() {
        super<KotlinSwimable>.act()
        super<KotlinFlyable>.act()
    }
}