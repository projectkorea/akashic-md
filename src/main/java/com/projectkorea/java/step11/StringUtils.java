package com.projectkorea.java.step11;

public abstract class StringUtils {

    private StringUtils() {}

    public boolean isDirectoryPath(String path) {
        return path.endsWith("/");
    }
}

// Java 에서 유틸성 코드 만들 때
// abstract class + private constructor 를 사용해서 인스턴스화를 막음, 상속도 막음