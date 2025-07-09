package com.projectkorea.java.step12;

import com.projectkorea.kotlin.step12.KotlinPerson;

public class main {
    public static void main(String[] args) {
        KotlinPerson.Companion.newBaby("John");
//        KotlinPerson.Factory.newBaby("John");
        KotlinPerson.newBaby("John");
    }
}
