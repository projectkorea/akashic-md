# Java to Kotlin

## Chapter 1. 변수, 타입, 연산자

### Step 01. 변수

### Step 02. null

### Step 03. Type

### Step 04. 연산자

- 단향, 산술 연산자
- 비교 연산자와 동등성, 동일성
- 논리연산자, 코틀린에 있는 특이한 연산자


## Chapter 2. 코드 제어

### Step 05. 제어문

- if
- expression, statement
- switch, when

### Step 06. 반복문

- for-each
- for
- progression, range
- while

### Step 07. 예외 다루기

- try, catch, finally
- checked exception, unchecked exception
- try with resources

### Step 08. 함수 다루기

- 함수 선언
- default parameter
- named argument
- 같은 타입의 여러 parameter 받기 (가변인자)


## Chapter 3. OOP

### Step09. 클래스

- 클래스, 프로퍼티
- 생성자, init
- 커스텀 getter, setter
- backing field

### Step10. 상속

- 추상 클래스
- 인터페이스
- 클래스 상속시 주의점
- 상속 관련 지시어(키워드)

### Step11. 접근 제어 

- 가시성 제어
- 코틀린 파일 접근 제어
- 구성 요소의 접근 제어
- Java, Kotlin 함께 사용할 때 주의할 점

### Step12. 코틀린 Object

- static 함수와 변수
- 싱글톤
- 익명 클래스

### Step13. 중첩 클래스

- 종류
- 내부 클래스

### Step14. 다양한 클래스

- Data Class
- Enum Class
- Sealed Class, Sealed Interface


## Chapter 4. 코틀린의 함수형 프로그래밍

### STEP15. 배열과 컬렉션을 다루는 방법

- 배열
- 컬렉션 ( List, Set, Map )
- 컬렌션의 null 가능성, 자바와 함께 사용하는 법

### STEP16. 다양한 함수를 다루는 방법

- 확장 함수
- infix 함수
- inline 함수
- 지역 함수

### STEP17. 람다를 다루는 방법

- 자바에서 람다를 다루기 위한 노력
- 코틀린에서 람다
- 클로저
- try with resources / use

### STEP18. 컬렉션을 함수형으로 다루는 방법

- 필터, 맵
- 다양한 컬렉션 처리 기능
- List to Map
- 중첩된 컬렉션 처리

## Chapter 5. 코틀린 특성

### STEP19.기타 문법

- Type Alias, as import
- 구조 분해, componetN 함수
- Jump, Label
- TakeIf, TakeUnless

### STEP20. Scope Function

- scope function 이란
- scope function 분류
- scope function 언제 쓸까
- scope function 가독성

## 프로젝트 디렉토리 설명

- `.gradle`: Gradle 빌드 도구에서 생성한 캐시 파일과 빌드 정보를 저장
- `.idea`: IntelliJ IDEA 프로젝트 설정 파일 저장. 프로젝트 구성, 설정, 플러그인 정보 등 포함.
- `build`: Gradle 빌드 결과물(컴파일된 클래스 파일, JAR 파일 등) 저장.
- `gradle`: 프로젝트에서 사용하는 Gradle 래퍼 스크립트 및 설정 파일
- `src`: 소스 코드 파일. 일반적으로 `main`과 `test` 디렉토리로 나뉨.
- `build.gradle`: Gradle 빌드 스크립트 파일. 프로젝트의 빌드 설정, 종속성 등 정의
- `gradlew`: Unix 계열 시스템에서 사용할 수 있는 Gradle 래퍼 스크립트. Gradle이 설치되어 있지 않아도 프로젝트를 빌드할 수 있게 해줌.
- `gradlew.bat`: Windows 시스템에서 사용할 수 있는 Gradle 래퍼 배치 파일
- `settings.gradle`: Gradle 설정 파일로, 멀티 프로젝트 빌드 시 서브프로젝트를 포함시키기 위한 설정
