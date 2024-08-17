package com.projectkorea.java.step08;

import java.sql.SQLOutput;

public class step08 {
    public static void main(String[] args) {

    }

    public int max(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public void repeat(String str, int num, boolean useNewLine) {
        for (int i = 1; i <= num; i++) {
            if (useNewLine) {
                System.out.println(str);
            } else {
                System.out.println(str);
            }
        }
    }

    // OverLoading을 통해 default parameter
    public void repeat(String str, int num) {
        repeat(str, num, true);
    }

    // 인자에 따라 호출 메서드가 달라짐
    public void repeat(String str) {
        repeat(str, 3, true);
    }

    public static void printAll(String... strings) {
        for (String str : strings) {
            System.out.println(str);
        }
    }

    String[] array = new String[]{"A", "B", "C"};
    //printAll(array);
    //printAll("a" ,"b", "c")
}
