package com.projectkorea.java.step09;

public class step09 {
    public class JavaPerson {
        private final String name;
        private int age;

        public JavaPerson(String name, int age) {
            this.name = name;
            this.age = age;
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
}
