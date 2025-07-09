package com.projectkorea.java.step10;

public abstract class JavaAnimal {
    protected final String species;
    protected final int legCount;

    public JavaAnimal(String species, int legCount) {
        this.species = species;
        this.legCount = legCount;
    }

    abstract public void move();

    public String getSpecies() {
        return species;
    }

    public int getLegCount() {
        return legCount;
    }
}

// 추상클래스는 인스턴스화 할 수 없음
