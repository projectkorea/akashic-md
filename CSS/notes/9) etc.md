# 기타 CSS 속성

## background

-   background-image : url("")
    - url("")은 CSS 함수이며, 상대경로, 절대경로를 설정할 수 있다.

-   `background-repeat: repeat | no-repeat`

-   backgrouund-size:

    -   contain: 요소 안에 이미지의 모든 안에 들어갈 수 있도록 이미지가 다 보이도록
    -   cover: 빈공간을 남기지 않도록 요소가 꽉차도록 넣는 것, 이미지가 다 보이지 않더라도 박스가 꽉 차도록
    -   custom: 100% 100px등으로 조정가능

-   background-position: x y
    -   `background-position : center, center`

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


1vw 뷰포트 너비의 1%
1vh 뷰포트 높이의 1%

```css
container {
    width : 50vw
    height : 100vh
}
```