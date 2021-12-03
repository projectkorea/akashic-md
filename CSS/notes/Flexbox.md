# FlexBox

-   정렬의 끝판왕
-   float, position을 사용하지 않아도된다.

## 4 steps

1. 플렉스 박스 선언
2. 가로정렬, 세로정렬
3. 무조건 한 줄안에 정렬?
4. 플렉스 박스 사용

display:flex, inline-flex

-   정렬하고자하는 요소를 감싸고 있는 **부모**에게 선언 한다.

flex-direction: row
flex-direction: column, row-reverse, column-reverse

Main-axis : flex-direction과 같다
Cross-axis

-   flex-wrap:nowrap
-   무조건 한 줄안에 정렬?
-   감싸지(wrap) 않고 자식의 사이즈를 줄여서라도 한 줄로 정렬해버리는 flex-wrap:nowrap
-   강제로 사이즈를 줄임

-   한줄에 모두 정렬하기에 공간이 넉넉하지 않으면 여러줄을 만들어버리는 flex-wrap:wrap\
-   사이즈가 줄어들지않는다.

main-axis: justify-content
cross-axis: align-items, align-content

space-between: 요소의 사이의 공백이 같음
space-around: 모든 요소의 양 옆이 공백이 각가 나누어 가짐

align-items vs align-content

flexwrap: wrap인경우에 의미있따.

aligh-items: 각 줄, 각 axis에 해당하는 배치에 관한 속성
align-content: 전체 axis에 관한 배치에 관한 속성

미세팁: 선 align-items 후 align-content를 통해 화면을 보고 사용

order

.red{
order: 1
}
.red{
order: 3
}
.red{
order: 2
}

를 통해 마크업된 순서에 무관하게 스타일만으로도 순서를 조정할 수도 있음
