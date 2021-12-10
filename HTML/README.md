# VS code Emmet

## Emmet 이란?

- Emmet은 HTML과 CSS의 작성의 시간을 단축 시켜주는 확장기능이다.
- 사용법: `keyword` 입력 후 `tab`키를 누르자.

#### 1) HTML 문서
- `!` + `tab`

#### 2) 자식노드 
- `>`를 사용하여, 자식 요소를 생성할 수 있다.
- `div>ul>li` + `tab`
```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

#### 3) 형제노드
- `+`를 사용하여, 한 요소와 같은 단계에 위치한 요소를 생성할 수 있다.
- `div>ul+ol+div` + `tab`
```html
<div>
    <ul></ul>
    <ol></ol>
    <div></div>
</div>
```

#### 4) 반복하기
- `*`를 곱셈 연산자로 여러개의 요소를 생성할 수 있다.
- `div>li*3` 입력 후 Tab키
```html ww
<div>
    <li></li>
    <li></li>
    <li></li>
</div>
```

#### 5) 그룹화
- `()`를 사용하여 괄호안에 있는 코드를 묶어 그룹화를 시켜, 요소간 레벨을 맞춘다.
- `div>(header>ul>li*2>a)+footer` + `tab`
```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer></footer>
</div>
```

#### 6) 클래스 부여

- default 값은 `div`이기 때문에 `div.item` 말고 `.item`으로 생략할 수 있다.
- `.item` + `tab`

```html
<div class="item"></div>
```

- `p.item` + `tab`
```html
<p class="item"></p>
```

#### 7) 아이디 부여

- `#item` + `tab`
```html
<div id="item"></div>
```

#### 8) 텍스트 입력

- `p{hi hello}` + `tab`
- p 태그안에 hi hello라는 텍스트가 입력된다.
```html
<p>hi hello</p>
```

#### 9) 자동 넘버링 부여

- $값에 숫자가 입력된다.
- `p{$}*5` + `tab`
```html
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
```

#### 10) 응용
`#page>#nav>ul>li.item{hello$}*5+dl^dd` + `tab`
```html
<div id="page">
    <div id="nav">
        <ul>
            <li class="item">hello1</li>
            <li class="item">hello2</li>
            <li class="item">hello3</li>
            <li class="item">hello4</li>
            <li class="item">hello5</li>
            <dl></dl>
        </ul>
        <dd></dd>
    </div>
</div>
```
---
### reference
- https://docs.emmet.io/abbreviations/syntax/