# transition

요소의 속성값을 바꿀 때 에니메이션을 줘서 자연스럽게 바꾸게 할 때 사용한다.

-   transition: property(all) duration [timing-function] [delay]

ease-in
ease-out
ease-in-out
cubic-bezier()

transition : p1,1000ms,p2,2000ms 각각의 프로퍼티마다 다른 transition 속성을 부여할 수 있음

animation vs transition

-   transition: 엘리먼트 css 속성의 값이 변환할 떄 부드럽게 바뀌게 바꾸게 할 수 있게
-   animation: 에니메이션을 주고 싶을 때, 좀 더 자유도가 높겠져?

@keyframes name{
from{

    }
    to{

    }

}

@keyframes name{
0%{

    }
    20%{

    }
    100%{

    }

}

animation-name : move-box
@keyframes movebox{}

에니메이션이 끝나면 원래상태로 들어감

animation-duration
animation-delay
animation-timing-function
animation-iteration-count : infinite
animation-direction : alternate from to from to...
