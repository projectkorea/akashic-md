package com.projectkorea.java.step10;

public interface JavaFlyable {

    default void act() {
        System.out.println("파닥파닥");
    }
}
