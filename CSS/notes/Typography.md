# Typography

### font-size
- px : 절대단위
- - px, pt, in(인치), cm, mm
- 상대 단위: 부모 font-size를 그대로 받기 때문에 기준은부모, 불안정하긴함
    em: equl to capital M (실제로 적용된 폰트 사이즈)
    rem: root em root = html html에 적용된 폰트를 1 rem을 본다.
    가변 크기 단위
  - em: 배수 단위, 부모의 글자크기에 따라 기준점이 달라진다.
  - %: 백분율 단위
  - rem: root em, 최상위 요소의 글자크기에 따라 기준점이 달라진다.

- line-height
    em을 많이 사용함
    지금 내가 적용된 폰트사이즈에서 몇배정도 띄어주는게 편하기 때뭉니다.
    단위를 적지 않으면 em을 생략하는 것이 관례임
    line-height값이 얼마가 됐던 간에 글씨는 항상 줄간격의 가운데에 배치된다.

- letter-spacing
  -  자간 px, em em을 많이 사용함
    em을 생략하지 안흠

- font-famaily
    폰트서체
    font-famaily: "a", "b" a없으면 b

- font-weight
    제일 얇은거 100
    기본 : regular 400
    볼드: blod 700
    최고 두꺼운거 900

color

hex #0066ff
rgb(0,102,255)
rgba(0,102,255,1)

2. 컬러에 투명한 효과를 주려면 rgba 4번째 파라미터를 이용하면 된다.

rgba(51, 170, 51, .1)    /*  10% opaque green */ 
rgba(51, 170, 51, .4)    /*  40% opaque green */ 
rgba(51, 170, 51, .7)    /*  70% opaque green */ 
rgba(51, 170, 51,  1)    /* full opaque green */ 


- text-align
    font-align: 텍스트 정렬
    left, right, center
    
- text-indent: 들여쓰기
    text-indent: 10px

- text-transform: alphabet based language에 적용
대문자, 소문자 변경

none 기본
capitalize: 앞 letter만 대문자
uppercase 모든 문자가 대문자
lowercase 모든 문자가 소문자

- text-decoration
줄을 끊는 것과 관련된 것
none
underline
line-through
overline

font-style font-style: 일반 글씨체, 이탤릭 글씨체
normal
italic

font- transform: 대,소문자

<em> font-style: normal italic을 해제할 떄 많이쓴데 ㅋ

웹 폰트

1. via network
2. 다운받아서
