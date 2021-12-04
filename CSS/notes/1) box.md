# Box

## Box Model

**구조**

-   content : width, height
-   padding: 안쪽 여백, content와 border 사이의 공간을 나타낸다.
-   border: 테두리를 나타낸다.
    -   `border: 1px(굵기) solid(스타일) #000(색상)` 순서는 무관하다.
    -   border-radius: 원으로 할 경우 50%
    -   `border-top-left`, `border-bottom` 등으로 개별적으로 테두리 스타일을 줄 수 있다.
-   margin: 바깥 여백, 요소와 요소사이의 간격을 나타낼 때 사용한다.

**사이즈**

-   shothand
-   시계방향: top -> right -> bottom -> left
-   padding: 10px 20px (bottom) -> bottom에 대한 명시가 없으므로 top과 한짝을 이뤄 top,bottom 10px, right, left 20px로 가져간다.
-   padding: 10px 20px 30px (left) : left에 대한 명시가 없으므로 right과 한짝을 이뤄 20px을 가져간다.

## Box Sizing

-   `box-sizing: content-box` : width, height가 content기준으로 잡힌다.
-   `box-sizing: border-box` : width, height가 content + padding + border 기준으로 잡힌다.

```css
* {
    box-sizing: border-box;
}
```

-   위 코드는 boilerplate로 많이 사용한다.

## Box Type

display: block, ...

-   Box type에 따라 Box Model이 달라지기 때문에 종류를 파악하는 것이 중요하다.
    -   1. Block
    -   2. Inline
    -   3. InlineBlcok
    -   4. Flex
-   모든 box는 display 값을 가지고 있다.

### block

-   영역을 차지하는 특징
-   **길막**하는 특징
-   영역 배치하기에 좋음
-   block: 지나가지 못하게 막다, 차단하다
-   영역 공간을 차지하고 오지 못하게 한다.
-   width 값
    -   width 값을 설정하지 않은 경우, width = 부모 content-box의 100%를 디폴트로 갖는다.
    -   width 값을 별도로 선언한 경우, 남은 공간은 margin으로 자동으로 채운다.

가운데 배치: `margin:0 auto`

-   height 값: 따로 부모 height를 선언하지 않은 경우, 자식 요소의 height의 합 = 부모 height

-   width, height, padding, border, margin 사용 가능

### Inline

-   흐름
-   컨텐츠를 옆으로 흐르게하는 흐름이 있다.
-   가로 배치를 가능하게 했다.
-   사용 불가

    -   `width`
    -   `height`
    -   `padding-top`
    -   `padding-bottom`
    -   `border-top`
    -   `border-bottom`
    -   `margin-top`
    -   `margin-bottom`

-   inline 줄간격에서 흐르는 간격을 망치기 때문이다.
-   padding top을 할 때 영역이 생기기는 하지만, 영역으로써 의미가 없음. 왜냐하면 줄이 망가져야 하는데 덮고 있기만 하기 떄문이다.
-   span, a ,strong 기본 display값이 inline

### Inline Block

-   block과 inline의 특징을 취합한 것
-   inline처럼 가로로 흐르지만 block처럼 영역을 차지하는 특징도 갖고 있다.
