package com.projectkorea.java.step10;

public class JavaPenguin extends JavaAnimal implements JavaSwimable, JavaFlyable{
    private final int wingCount;

    public JavaPenguin(String species) {
        super(species, 2);
        this.wingCount = 2;
    }

    @Override
    public void move() {
        System.out.println("뒤뚱뒤뚱");
    }

    @Override
    public int getLegCount() {
        return super.legCount + this.wingCount;
    }

    @Override
    public void act() {
        JavaSwimable.super.act();
        JavaSwimable.super.act();
    }
}
