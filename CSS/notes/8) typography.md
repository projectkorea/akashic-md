# Typography

### font-size
1) px : 절대단위
- px, pt, in(인치), cm, mm

2) em, rem, %: 상대 단위
  - `em`: equl to capital M,
    -  부모 font-size를 그대로 받기 때문에 기준은부모, 불안정하긴함
    - 디폴트로 적용된 폰트 사이즈를 1em으로 본다.
    - 배수 단위, 부모의 글자크기에 따라 기준점이 달라진다.
  - `rem`: root em
    - `html 태그`에 적용된 폰트 사이즈를 1rem을 본다.
    - rem: root em, 최상위 요소의 글자크기에 따라 기준점이 달라진다.
  - `%`: 백분율 단위
    - 100% = 1em

### line-height
- `em`을 많이 사용한다.
- 지금 내가 적용된 폰트사이즈에서 몇배정도 띄어주는게 편하기 때문이다.
- 단위를 적지 않으면 em을 생략하는 것이 관례다.
- line-height값이 얼마가 됐던 간에 글씨는 항상 줄간격의 가운데에 배치된다. 이를 이용해서 **수직 가운데 정렬**로 이용한다.

### letter-spacing
- 자간 px, em em을 많이 사용함
- em은 생략하지 않는다.

### font-famaily
- `font-famaily: "a", "b"`: a없으면 b 서체를 사용한다.

### font-weight
- 100~900 까지 존재
- 제일 얇은거 100
- 기본 : regular 400
- 볼드: blod 700
- 최고 두꺼운거 900

### color

- hex #0066ff
- rgb(0,102,255)
- rgba(0,102,255,1)
- 컬러에 투명한 효과를 주려면 rgba 4번째 파라미터를 이용하면 된다.
```css
rgba(51, 170, 51, .1)    /*  10% opaque green */ 
rgba(51, 170, 51, .4)    /*  40% opaque green */ 
rgba(51, 170, 51, .7)    /*  70% opaque green */ 
rgba(51, 170, 51,  1)    /* full opaque green */ 
```

### text-align
- `font-align: left | right | center`
    
### `text-indent: 10px`
- 들여쓰기

### `text-transform: capitalize | uppercase | lowercase`
- 대문자, 소문자 변경가능. alphabet based language에 적용
- none 기본
- capitalize: 앞 letter만 대문자
- uppercase 모든 문자가 대문자
- lowercase 모든 문자가 소문자

### `text-decoration: none | underline | line-through |overline`
- 줄을 끊는 것과 관련된 것


### `font-style: normal |italic`
- 일반 글씨체, 이탤릭 글씨체
- `font-style: normal` italic을 해제할 떄 많이쓴다.

### font-transform: 대,소문자

### 폰트 설정

```css
@font-face{
  font-family:'사용할 이름 설정';
  font-style: normal;
  font-weight: 400;
  src: url('')
}
```
```css
@import url("./fonts.css")

*{
  font-family:"사용할 이름 설정";
}
```
