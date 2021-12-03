# 기타 CSS 속성

## Box Shadow

-   box-shadow
-   속성 5가지
-   순서 맞춰야함

-   h-offset, v-offset, blur, spread, color
-   x축, y축, 흐린 정도, 그림자 사이즈, 생상

-   box shadow 값은 웹 css툴, figma로 쉽게 알아낼 수 있다.

-   Opacity: 0(투명)~1(불투명)

## Overflow

-   overflow : visible(Default값), (auto, scroll 둘다 같음), hidden

## transform

-   엘리먼트가 transform할 때 변형된 위치는 다른 요소에 전혀 영향을 끼치지 않는다.
-   변형할 때 사용, css함수를 사용
-   translate(), scale(), rotate()

-   translate(x,y)- 좌표를 움직일때 사용한다
-   translate(100%, 100%)
-   sclae(N): 사이즈를 키웠다 ,줄였다 N배수
-   scale(x,y)
-   rotate(Ndeg)

## Visibility

-   visibility : hidden, visible 스타일로만 안보이는 녀석
-   vs display: none
-   display는 박스의 type을 정해주는 녀석이다. 없는 존재처럼 취급하라. 존재 영역까지 없어지는 녀석
