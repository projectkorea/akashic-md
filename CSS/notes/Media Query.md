# Media Query

- 반응형 웹을 만들기 위해 사용하는 CSS 속성이다.
- web에 들어가는 device의 사이즈에 따라 화면 css스타일 적용
- 반응형 웹을 만들기 위해서 html, css에서 각각 필요한 게 있다.

#### 1. html: viewport meta tag

```html
<meta name='viewport' content='width=device-width'/>
```

#### 2. css: media query문

```css
@media screen and (min-width: 768px) {
    /* css code */
}
```
**문법사항**
- @media: 미디어문 선언
- screen: 스크린에 관한 선언
- and (조건): 조건 선언

### 사용 예시
```css
@media screen and (min-width: 576px){
  .box{
    background-color:#ffc82c
  }
}

@media screen and (min-width: 768px){
  .box{
    background-color:#ff4949
  }
}
@media screen and (min-width: 1000px) and (max-width:1200px){
    .box{
      background-color:white
    }
  }
@media screen and (min-width: 1200px){
  .box{
    background-color:#ffc82c
  }
}
```


