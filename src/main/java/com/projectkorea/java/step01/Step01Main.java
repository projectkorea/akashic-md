package com.projectkorea.java.step01;

public class Step01Main {

    public static void main(String[] args){
        long num1 = 10L;
        final long num2 = 10L;
        Long num3 =1_000L;

        num1 = 200_000L;

        long num4 = num1+num2+num3;
        // long과 Long은 각각 primative타입과 Reference타입이기에 연산시
        // boxing과 unboxing이 일어나며 불필요한 프로세스가 진행

        Person person = new Person("junha");

        System.out.println(person.getName());
    }
}
