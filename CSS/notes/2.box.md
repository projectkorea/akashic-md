# Box

## 1. Box Model(구조)

<img src="https://user-images.githubusercontent.com/76730867/144774009-8488e16c-61a8-4416-bce8-a1271ae0fb3c.png" width="400px">

1) **content**: `width` * `height`
2) **padding**: 안쪽 여백, content ↔ border 사이의 공간
3) **border**: 테두리, `border: 1px(굵기) solid(스타일) #000(색상)`
   - 원 모양: `border-radius: 50%`
4) **margin**: 바깥 여백

<br>

<img src="https://user-images.githubusercontent.com/76730867/144776321-57b25f5a-6b25-4a83-a927-2a7168da03e7.png" width="300px">

1) `top -> right -> bottom -> left`: 시계방향 순서로 사이즈를 정의한다. 
2)  `padding: 10px 20px (bottom)`
    - bottom에 대한 명시가 없으므로 `top,bottom: 10px`, `right, left: 20px`로 가져간다.
3)  `padding: 10px(top) 20px(right,left) 30px(bottom) (left)`
    - left에 대한 명시가 없으므로 right과 한짝을 이뤄 20px을 가져간다.

## 2. Box Sizing

- `box-sizing: *content-box | border-box`
-   `border-box` : **width, height = content + padding + border** 
-   padding 값이 추가되면서 레이아웃이 망가지기 때문에 `border-box`를 자주 사용한다.

```css
* {
    box-sizing: border-box;
}
```

## 3. Box Type(종류)

<img src='https://user-images.githubusercontent.com/76730867/144802489-32272aba-66b9-4422-b0eb-591de90d2c0f.png' width='400px'>

- `display: block | inline | inline-block | flex`


### 1) `display:block`

1) **한 라인**을 독차지한다.
2) **영역을 차지**하는 특징이 있어, 레이아웃 구성에 적합하다.
3) **width**은 항상 **부모 content-box의 100%**이다.
   - width 값을 별도로 선언해도, **남은 공간은 margin으로 자동으로 채워 부모 사이즈의 100%**를 채운다.
   - `margin : 0 auto`: 이를 이용해 가운데 배치를 한다.
  <img src="https://user-images.githubusercontent.com/76730867/144780045-25559ae8-6f8e-41bb-8e71-765239830900.PNG" width="500px">
    
4) **height 값**
   - **자식 요소의 height의 합**이며, height 값을 이용할 수 있다. 
   - `width`, `height`, `padding`, `border`, `margin`

5) `display:block` 태그 예시들
`<address>, <article>, <aside>, <audio>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <fieldset>, <figcaption>, <figure>, <footer>, <form>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <hr>, <noscript>, <ol>, <output>, <p>, <pre>, <section>, <table>, <ul>, <video>`

### 2) `display:inline`

1) 컨텐츠를 **옆으로 흐르게하여**, 주로 **가로 배치**에 사용된다.
2)  **높이 값** 사용 불가: `inline`의 흐르는 간격을 망치기 때문이다.
    -  ❌: `width`, `height`, `padding-top`, `border-top`, `padding-bottom`, `border-bottom`, `margin-top`, `margin-bottom`
3)   속성이 적용되긴 하지만 **영역을 차지하지 않고 덮고 있다.**
4)   `display : inline` 태그 예시들
`<a>, <abbr>, <acronym>, <b>, <bdo>, <big>, <br/>, <button>, <cite>, <code>, <dfn>, <em>, <i>, <img>, <input>, <kbd>, <label>, <map>, <object>, <q>, <samp>, <small>, <script>, <select>, <span>, <strong>, <sub>, <sup>, <textarea>, <tt>, <var>`


### 3) `dispaly:inline-block`

-   `inline`처럼 가로로 흐르지만 `block`처럼 영역을 차지한다.
