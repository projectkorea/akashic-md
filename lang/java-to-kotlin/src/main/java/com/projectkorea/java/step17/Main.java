package com.projectkorea.java.step17;

import java.util.ArrayList;
import java.util.List;

public static void main(String[] args) {

    List<Fruit> fruits = Array.asList(
            new Fruit(1_000, "사과");
    new Fruit(2_000, "사과");
    new Fruit(3_000, "사과");
    new Fruit(4_000, "사과");
    new Fruit(5_000, "사과");
    new Fruit(6_000, "사과");
    new Fruit(1_000, "배");
);

    private List<Fruit> findApples(List<Fruit> fruits) {
        List<Fruit> apples = new ArrayList<>();
        for (Fruit fruit : fruits) {
            if(fruit.getName().equals("사과")) {
                apples.add(fruit);
            }
        }
        return apples;
    }

}
