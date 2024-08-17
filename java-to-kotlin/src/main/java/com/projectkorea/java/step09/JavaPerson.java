package com.projectkorea.java.step09;

public class JavaPerson {
    private final String name;
    private int age;

    public JavaPerson(String name, int age) {
        if (age < 0) {
            throw new IllegalArgumentException(String.format("Invalid age: %d", this.age));
        }
        this.name = name;
        this.age = age;
    }

    public JavaPerson(String name) {
        // 생성자 체이닝
        // 생성자 체이닝에서 모든 인자를 받는 생성자는 초기화 로직의 중심이 됩니다
        this(name, 1);
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        // this.name = name; // final 변수는 변경 불가능
    }
}

