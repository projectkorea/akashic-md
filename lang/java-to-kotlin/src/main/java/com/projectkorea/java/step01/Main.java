package com.projectkorea.java.step01;

// 퍼블릭 클래스가 있는 경우, 그 클래스의 이름과 파일 이름이 일치해야 한다.

public class Main {
    // public: 접근 제어자
    // 다른 클래스에서 호출할 수 있음.
    // main 메서드는 자바 애플리케이션의 시작점이므로 반드시 public이어야함

    // static: 키워드
    // main 메서드는 프로그램의 시작점으로, 자바 런타임에 의해 호출
    // 인스턴스를 생성하지 않고 클래스 자체에서 호출할 수 있음을 의미합니다.
    // 자바 런타임은 클래스의 객체를 생성하지 않고 main 메서드를 호출하기 때문에 static이어야 한다..

    //  void: 반환 타입
    //	이 메서드는 값을 반환하지 않음을 의미합니다.
    //	main 메서드는 애플리케이션의 진입점이므로 실행을 마친 후 별도의 값을 반환할 필요가 없다.

    // main: 메서드 이름
    // 이름은 main으로 고정
    // Java 진입점으로 인식되는 메서드, 자바 프로그램이 시작될 때 자동으로 호출되
    // 시그니처가 정확히 맞아야 Java 런타임 환경(JVM)이 프로그램을 시작할 수 있다.

    public static void main(String[] args){
        long num1 = 10L;
        final long num2 = 10L;
        Long num3 = 1_000L; // 레퍼런스 타입이기에 null도 가능

        // 1. String str2 = num2.toString(); // Cannot call method because 'num2' has primitive type long
        String str3 = num3.toString();

        // 2. primitive, Reference 타입을 섞어서 연산 시, 불필요한 프로세스가 진행

        // 원시 타입과 래퍼 타입을 섞어서 연산 (박싱 발생)
        Long sumNum = num1 + num2 + num3;

        // 결과를 원시 타입으로 사용 (언박싱 발생)
        long finalNum = sumNum;

        Person person = new Person("junha");
        System.out.println(person.getName());
    }
}
