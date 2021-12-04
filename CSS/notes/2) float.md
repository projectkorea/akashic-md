# Float

-   가로 배치를 하기 위해 사용한다.

1. What happens

-   float를 사용하면 일어나는 일들
-   float: 붕 뜨다, 떠다니다
-   1. 자식은 집을 나가고, 부모와 자식은 그 요소를 잊게 된다.
-   2. float를 주면 box type이 block으로 바뀐다.

    -   margin이 자동으로 챙겨나서 죽 늘어나는 영역차지하는 길막하는 특징은 없어진다.
    -   컨텐츠만큼만 width가 늘어날 뿐이다.
    -   float: left
    -   z축으로 올라온다 생각하면된다.
    -   width는 parent width만큼만 올라온다.
    -   parent의 모든 요소가 float라면 그 parent의 height는 0이 되어 영역을 하나도 차지하지 않게 된다.
        -   이 속성이 레이아웃을 파악하기 힘들게 한다.

    3. inline된 속성들은 float된 속성들을 파악할 수 있다. 그렇기 때문에 공간영역을 존중해준다.

-   집 나간 내새끼, 찾을 길 없네
-   블록으로 신분상승
-   길막을 못해 슬픈 블록아
-   플로트, 나만 볼수 있어요

```html 예시로 봐보자

```

2. How to fix it
    -   1. overflow: hidden : 부모가 집나간 자식을 찾는다.
        - float된 자식을 갖게된 부모가 요소를 잡는다.
    -   2. Clearfix
        - clear: float로 망가진 레이아웃을 고치기 위해 만들어진 속성
          a: float left
          b: clear:left: float left된 요소를 감지하는 능력이 생긴다.

-   clear: left, right, both가 있다.

-   레이아웃이 망가지는 float속성 해결법

1. div clear:left 인 속성을 만들어서 영역을 표시한다.
   -> 의미 없는 div를 만들고 싶지 않음
2. Pesudo-element를 이용
   -> css로 페이크 요소를 만든다. 그 요소에 clear 프로퍼티를 만든다.

    ::before
    ::after

    ```css
    .pseudo::before {
        content: '';
    }
    ```
