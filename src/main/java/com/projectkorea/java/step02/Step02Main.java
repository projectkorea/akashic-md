package com.projectkorea.java.step02;

public class Step02Main {
    // 1. main 메서드에서 static 키워드 사용
    // main 메서드는 프로그램의 시작점으로, 자바 런타임에 의해 호출됩니다.
    // 자바 런타임은 클래스의 인스턴스를 생성하지 않고도 main 메서드를 호출할 수 있어야 합니다.
    // 이를 위해 main 메서드는 static으로 선언됩니다.

    //  - public: 접근 제어자 (Access Modifier)
    //	• 이 메서드를 모든 다른 클래스에서 호출할 수 있음을 의미합니다. main 메서드는 자바 애플리케이션의 시작점이므로 반드시 public이어야 합니다.
    //  - static: 정적 키워드 (Static Keyword)
    //	• 이 메서드는 인스턴스를 생성하지 않고 클래스 자체에서 호출할 수 있음을 의미합니다. 자바 런타임은 클래스의 객체를 생성하지 않고 main 메서드를 호출하기 때문에 static이어야 합니다.
    //   - void: 반환 타입 (Return Type)
    //	• 이 메서드는 값을 반환하지 않음을 의미합니다. main 메서드는 애플리케이션의 진입점이므로 실행을 마친 후 별도의 값을 반환할 필요가 없습니다.
    //   - main: 메서드 이름 (Method Name)
    //	• 이 메서드의 이름은 main으로 고정되어 있으며, 자바 프로그램이 시작될 때 자동으로 호출되는 메서드입니다. 다른 이름을 사용할 수 없습니다.
    public static void main(String[] args){

    }

    public boolean startsWithA1(String str) {
        if (str == null) {
            throw new IllegalArgumentException("null이 들어왔어요");
        }
        return str.startsWith("A");
    }

    public Boolean startsWithA2(String str) {
        if (str == null) {
            return null;
        }
        return str.startsWith("A");
    }

    public boolean startsWithA3 (String str) {
        if (str == null) {
            return false;
        }
        return str.startsWith("A");
    }
}