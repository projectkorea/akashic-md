# Flexbox

-   `float`, `position`을 사용하지 않아도 정렬을 쉽게 할 수 있다.

## flex box 이용 순서

1. 플렉스 박스 선언

    - `display : flex || inline-flex`
    - 정렬하고자하는 요소를 감싸고 있는 **부모**에게 선언 한다.

2. 가로정렬 || 세로정렬

    - `flex-direction: *row, column, row-reverse, column-reverse`
    -   1. Main-axis: flex-direction과 같은 축
    -   2. Cross-axis: 반대축

3. 한 줄 정렬 || 여러 줄 정렬

-   `flex-wrap : *wrap || no-wrap`
-   `wrap`: 한줄에 모두 정렬하기에 공간이 넉넉하지 않으면 여러 줄로 만든다.
    -   사이즈가 줄어들지않는다.
-   `no-wrap`: 감싸지(wrap) 않고 자식의 사이즈를 줄여서라도 한 줄로 정렬한다.
    -   강제로 사이즈를 줄이기 때문에 한 줄로 만들어야 할 때 유용하다.

4. 플렉스 박스 사용

-   `justify-content : center ` :
-   `align-items || align-content : center`
-   space-between: 요소의 사이의 공백이 같음
-   space-around: 모든 요소의 양 옆이 공백이 각가 나누어 가짐

**align-items vs align-content**

    -   flexwrap: wrap인 경우에만 차이가 있다.
    -   aligh-items: 각 줄, 각 axis에 해당하는 배치에 관한 속성
    -   align-content: 전체 axis에 관한 배치에 관한 속성
    -   팁: 선 align-items 후 align-content를 통해 화면을 보고 사용

**order**

-   마크업 된 순서와 무관하게 스타일만으로도 순서를 조정할 수도 있다.

```css
.red {
    order: 1;
}
.red {
    order: 3;
}
.red {
    order: 2;
}
```
