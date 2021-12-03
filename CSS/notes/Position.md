# Position

-   static, relative, absolute, fixed

1. 어떤 종류의 position 인지
2. 그 position의 기준점이 무엇인지

static default

relative

-   기준: 본래 있던 자리
-   display: float 처럼 붕뜬 상태로 옮겨다니지만, 영역차지는 그 위치에서 하고 있기 때문에 공간을 차지하고 있음

absolute

-   붕뜨게 된다.
-   block
-   길막을 못한다 = 영역 차지를 못한다
-   position이 static이 아닌 경우
-   부모 요소의 position을 먼저 확인한다, 부모가 position-static 인 경우 다시 부모 요소를 확인한다
-   relative, absolute, fixed ,sticky인 경우 그 엘리먼트의 모서리 top, bottom,right left를 참조한다

fixed

-   block
-   길막을 못한다.
-   자신의 기준점이 viewport size로 명확히 정해진다.

top, left, bottm, right

기준은 x축에서 하나, y축에서 하나를 잡는 것이 효율적이다.

-   top left
-   top right
-   bottom left
-   bottom right

z-index

-   레벨
