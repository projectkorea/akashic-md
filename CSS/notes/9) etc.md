# 기타 CSS 속성

- CSS 속성 값들은 웹 css툴, figma로 쉽게 알아낼 수 있다.

## background

-   `background-image : url("")`
    - **url("")**: CSS 함수이며, 상대경로, 절대경로를 설정할 수 있다.
-   `background-repeat: repeat | no-repeat`
-   `background-size: contain | cover | custom`
    -   contain: 이미지 전체가 보이도록 한다.
    -   cover: 빈공간이 남지 않도록 이미지를 꽉 채운다.
    -   custom: 100% 100px등으로 조정한다.
-   `background-position : center, center`

## box-shadow

- `box-shadow: h-offset, v-offset, blur, spread, color`
- 속성은 5가지이며, 순서는 맞춰야 한다.
- x축, y축, 흐린 정도, 그림자 크기, 색상

-   
## overflow

-  `overflow : *visible | auto | scroll | hidden`
- `auto`와 `scroll`은 같은 기능을 한다.

## transform

- `transform: rotate(360) `
-   변형할 때 사용하며, css함수 `translate()`, `scale()`,` rotate()`등을 사용한다.
-   엘리먼트가 transform할 때 변형된 위치는 다른 요소에 전혀 영향을 끼치지 않는다.

-   translate(x,y): 좌표를 움직일때 사용한다
-   translate(100%, 100%)
-   sclae(N): 사이즈를 키웠다 ,줄였다 N배수
-   scale(x,y)
-   rotate(Ndeg)

## Visibility

-   visibility : hidden, visible 스타일로만 안보이는 녀석
-   vs display: none
-   display는 박스의 type을 정해주는 녀석이다. 없는 존재처럼 취급하라. 존재 영역까지 없어지는 녀석

## viewport

- 1vw 뷰포트 너비의 1%
- 1vh 뷰포트 높이의 1%

```css
container {
    width : 50vw
    height : 100vh
}
```