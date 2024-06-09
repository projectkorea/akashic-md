package com.projectkorea.java.step17;

import java.util.ArrayList;
import java.util.List;

public class Fruit {
    private final int price;
    private final String name;

    public Fruit(int price, String name) {
        this.price = price;
        this.name = name;
    }

    public int getPrice () {
        return price;
    }

    public String getName () {
        return name;
    }
}
