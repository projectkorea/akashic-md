package com.projectkorea.java.step12;

public class JavaPerson {

    // static: 클래스가 인스턴스화 될 때 새로운 값이 복제되는 게 아니라 정적으로 인스턴스끼라 값을 공유
    // static 영역에 있다라고도 표현
    private static final int MIN_AGE = 1;

    // 정적 메소드
    // 클래스 레벨에서 정의된 메소드로, 특정 객체(instance)에 종속되지 않고 클래스 자체에 속하는 메소드를 의미합니다.
    // 클래스 이름을 통해 호출되며, 객체를 생성하지 않고도 사용할 수 있습니다
    public static JavaPerson newBaby(String name) {
        return new JavaPerson(name, MIN_AGE);
    }

    // 인스턴스 변수
    private String name;
    private int age;

    // 생성자
    private JavaPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
}



