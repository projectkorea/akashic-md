# HTML 기초

-   Semantic Markup: 문서의 구조와 정보 위계가 명확하게 짜는 것이 중요하다. (Semantic: 의미있는)
-   SEO에 도움이 된다: 사람의 언어를 직접 이해한 후 중요도를 파악하는 것이 아니라, 마크업한대로 중요도가 검색엔진에 반영이 되기 때문이다.
-   의미에 맞게 HTML을 작성하기 위해선 의식의 흐름이 아닌 **논리의 흐름**으로 작성하자.
-   **핵심**: 마크업은 결국에 브라우저한테 내가 작성한 정보가 어떤 성격의 정보인지 전달하는 것이다.

## 강조 태그

-   `<em></em>`
-   `<strong></strong>`
-   em은 표면적인 강조, storng은 핵심 단어에 쓰는 편이다. 어떤 태그던 일관되게 사용하는 것이 중요하다.

## a 태그

-   `<a href=""></a>`
-   attr) href: hypertext(문서, 웹페이지) reference(주소값)
    -   엘리먼트: `<a href="#hello">id가 hello인 태그로이동</a>`
    -   메일: `<a href="mailto:projectkorea@gamil.com"></a>`
    -   전화: 모바일에서 가능: `<a href="tel:01023456789"></a>`
    -   새로운 페이지에서 열 때: `<a href="url" attr: target="\_blank"></a>`

## 이미지태그

-   `<img src='#' alt="" />`
-   attr) src: source, alt: alternative text
-   `src="./image/dog.jpg" || "https://~~"`
-   img 태그 alt값이 정보로써 의미가 없거나 큰 의미가 없을 때는 alt=""로 비워둔다. 하지만 빈 string으로 꼭 적어둔다.
-   이미지 태그를 사용할 때 정보로써 가치가 없다고 판단할 경우는 CSS로 별도로 처리한다.
-   text와 img alt를 같이 적을 경우는 img alt값으로 대체할 수 있다.
-   이미지 태그와 텍스트가 동일할 때는 alt를 생략해도 된다.

## 목록태그

-   ul, ol(unordered, order list)
-   li: list item
-   자식요소는 무조건 li만가능

```html
// 올바른 예시
<ol>
    <li>
        <a> 내용 </a>
    </li>
</ol>
// 잘못된 예시
<ol>
    <a>
        <li>내용</li>
    </a>
</ol>
```

-   목록 태그의 자식요소는 항상 li가 되게 한다.

## dl(정의 리스트) 태그

-   dl: decriputon list
-   dt: decription term
-   dfn: definition
-   dd: description data

1. 용어를 정의할 때
2. key-value로 정보를 제공할 때 사용한다.

```html
<dl>
    <dt>
        <dfn> 학습 </dfn>
    </dt>
    <dd>배워서 익힘</dd>
    <dd>
        심리 경험의 결과로 나타나는, 비교적 지속적인 행동의 변화나 그 잠재력의
        변화. 또는 지식을 습득하는 과정
    </dd>
</dl>
```

## 인용 태그

1. blockquote
2. q

-   문단, 내용 전체가 인용문 일 때, q보다 많이 사용한다.
-   문장이 인용문일 때는 간단하게 q태그를 사용한다.

```html
<blockquote cite="https://actualized.org">
    All you need is Counciousness.
    <cite>Leo</cite>
</blockquote>
```

## div, span 태그

-   아무런 의미가 없지만, 요소를 묶을 때, css 스타일링할 때 요긴하게 사용한다.
-   span: 텍스트의 일부분을 그룹핑
-   그룹핑할때만 쓰는 태그이므로 꼭 필요할 때만 쓰자.
-   자동완성: `.classNAme + tab`

## form 태그

```html
<form action="API주소" method="GET|POST"></form>
```

-   사용자로부터 인풋을 받기 위한 태그
-   action: 입력받은 인풋을 처리할 API주소

## form - input 태그

```html
<input type="text" />
```

-   입력창, 인풋 필드
    -   attr) placeholder: 아무것도 없을 때 안내문구
    -   attr) maxlength="13" 13글자를 안넘음
    -   attr) minlength="5"
    -   attr) required : 무조건 입력해야하는 태그
    -   attr) disabled : 입력이 안되게함
    -   attr) value: 초기값
    -   attr) type=num 일 때 min, max
    -   attr) type=file 일 때 accept =".png, .jpg"
        -   type: text, password, email, tel, num, file

## label태그

-   input에 대한 태그, 라벨링
-   폼 양식에 이름을 붙이는 태그
    <label for="인풋 필드의 ID"></label>

```html
<label for="user-name">이름</label>

<input type="text" id="user-name" />
```

## input type: 라디오 & 체크박스 타입

```html
<input type="radio" id="" name="" />
<label for=""></label>
<input type="radio" id="" name="" />
<label for=""></label>
```

-   attr) name: 동일한 input을 연결시켜준다.
-   attr) value: `name=value`식으로 서버에 전송된다.

## select & option 태그

```html
<label for="id-number">숫자</label>
<select name="number" id="id-number" multiple>
    <option value="1">1</option>
    <option value="1">2</option>
    <option value="1">3</option>
</select>
```

-   attr) multiple: ctrl+클릭으로 다중 선택 가능

## textarea 태그

```html
<textarea placeholder="내용을 입력해주세요"></textarea>
```

-   여러줄에 걸쳐서 많은 양의 글을 받을 때 사용
-   attr) rows="" cols="" 인풋의 창을 조절 가능, 주로 css로 조절한다.

## button 태그

```html
<button type="">버튼</button>
```

-   attr) type: button, submit(form에 제출용도로 사용, 기능상 동일), reset(입력 필드 리셋)

## 표 Table 태그

-   데이터를 담은 표를 만들 때 사용한다.
-   원리: tr(table row) 가로줄 기준으로 테이블을 만들어나간다.

```html
<table>
    <tr>
        <th>테이블 헤더</th>
        <td>테이블 데이터</td>
    </tr>
</table>
```

```html
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    <thead>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>

</table>
```

-   thead태그: 테이블 헤더임을 명시
-   tbody태그: 테이블 바디임을 명시
-   tfoot태그: 테이블 합계표시

```html
<table>
    <thead>
        <tr>
            <th></th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
            <th scope="col">목</th>
            <th scope="col">금</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1교시</th>
            <td rowsapn="2">밥먹기</td>
            <td>쉬기</td>
            <td rowsapn="2">밥먹기</td>
            <td>쉬기</td>
            <td>밥먹기</td>
        </tr>
        <tr>
            <th scope="row">2교시</th>
            <!-- <td> 밥먹기</td> -->
            <td rowspan="2">쉬기</td>
            <!-- <td> 밥먹기</td> -->
            <td rowspan="2">쉬기</td>
            <td>밥먹기</td>
        </tr>
        <tr>
            <th scope="row">3교시</th>
            <td>걷기</td>
            <!-- <td> 쉬기</td> -->
            <td>걷기</td>
            <!-- <td> 쉬기</td> -->
            <td>걷기</td>
        </tr>
        <tr>
            <td scope="row" colspan="6">점심시간</td>
        </tr>
        <tr>
            <th scope="row">4교시</th>
            <td>낮잠</td>
            <td rowspan="2">쉬기</td>
            <td rowspan="2">밥먹기</td>
            <td rowspan="2">쉬기</td>
            <td>낮잠</td>
        </tr>
        <tr>
            <th scope="row">5교시</th>
            <td>수영</td>
            <!-- <td> 쉬기</td>
                <td> 밥먹기</td>
                <td> 쉬기</td> -->
            <td>수영</td>
        </tr>
    </tbody>
</table>
```

-   attr) rowspan="", colspan=""
    -   셀이 차지하는 영역이 확장된다.
-   attr) scope="row|col" table header에서만 사용할 수 있다.
    -   누구의 헤더인지를 명시한다.

## 미디어 파일 태그

```html
<audio src="" autoplay loop></audio>
```

-   attr) controls: 컨트롤 패널 표시
-   attr) autoplay : 컨트롤 패널 없이 자동재생
-   attr) loop : 반복 가능

```html
<audio>
    <source src="" type="audio/wav" />
    <source src="" type="audio/wav" />
    <source src="" type="audio/wav" />
    <p>오디오를 플레이할 수 없습니다.</p>
</audio>
```

-   attr) type: 소스파일에 맞는 형식을 적는다.
-   `<source></source>`태그
    -   브라우저가 해당 소스를 지원하지 않을 경우, 순차적으로 다음 파일을 플레이하고, 그것도 안 될 경우 p태그를 표시한다.

```html
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/C17e7k-dD5s"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
```

-   html파일을 embed한다.
-   ex) embedded html을 하고 싶을 때 사용, 유튜브 동영상 embed 링크로 삽입

## 기타태그

```html
<abbr title="full name">약어</abbr>
```

-   abbreviation: 약자, 약어
-   hover시 title이 나옴

```html
<address>
    <h1></h1>
    <a></a>
</adress>
```

-   address: 연락처에 관한 마크업

```html
<pre>
    <code>
        console.log("hi")
    </code>
</pre>
```

-   pre태그: preformatted text, 작성한 그대로 화면에 표시된다.
-   code 태그: code에 관한 태그
-   code에서 indent를 그대로 표시하고 싶은 경우 pre태그로 감싸서 표현한다.

## DocType

```html
<!DOCTYPE html>
```

-   html5 웹 표준으로 버전으로 작성된 문서임을 알려주는 태그다.
-   Document Type Decalaration
-   DTD선언
-   문서 형식 선언

```html
<!DOCTYPE html>
<html>
    <head>
        웹 문서에 관한 메타 데이터
    </head>
    <body>
        웹 문서에 들어갈 내용
    </body>
</html>
```

-   자동완성: `! + tab`

## Inside head 태그

### title

-   작성요령/검색최적화에 강한 상관관계
-   키워드 단순 나열은 비추
-   페이지 마다 그에 맞게 변경
-   무엇에 관한 내용인지 함축적으로

### link

-   `<link rel="stylesheet" href="style.css" `
-   css 스타일 시트
-   자동완성: `link:css + tab`

### style

-   html문서내에서 css코드를 작성할 때 사용, 굳이 사용하지 않는다.
-   자동완성: `script:src + tab`

```html
<style>
    h1 {
        color: red;
    }
</style>
```

<scropt src="">

<script>
    // js코드를 사용
    console.log("js in html")
</script>

## Meta 태그, 메타 데이터

<meta charset="UTF-8">

-   attr) name : 메타데이터 종류
-   attr) content : 메타데이터 값

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

화면사이즈의 가로는 디바이스의 가로에 맞추고
처음보여줄 때 1.0배율에 보여줌

```html
<meta name="author" content="junha" />
<meta name="keywords" content="junha, practice, html, markup" />
<meta name="description" content="This is the site where i pracice HTML " />
```

-   사이트 설명
-   검색어에 도움이 되는 키워드 작성

---

# HTML 설계

## 마크업 우선 순위: 의미있는 단위로 나누기

-   <h1><img /></h1> 도 가능
-   특수문자는 브라우저가 랜더링할 때 혼란이 올 수가 있으므로 escape code로 대체한다.
-   html escape code, 특수문자 대신 사용한다.

## 의미마크업 할때는 의미에 맞게만 할 것!

```html
<div>
    <div>
        <span></span>
    </div>
    <div>
        <img />
    </div>
</div>
```

-   화면에 보여지는 대로 마크업을 하는 것 말고, 의미의 중요성대로 마크업하고 css로 보여지는 순서를 바꾸는 방법도 있다.
-   해당 순서로 마크업해도 img는 css로 먼저 보이게 처리할 수 있으므로, 의미상 중요한 것부터 마크업하는 것을 권장한다.

## WAI-ARIA

-   It's stands for **Web Accessibility Initiative – Accessible Rich Internet Applications**
-   사용자 인터페이스 구성 요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술 사양이다.
-   `class="sr-only"`
    -   컨벤션 네임으로 사용하며, 스크린리더에만 읽히게 할 때 사용한다.
-   의미없는 태그는 / 스타일적인 요소는 aria-hidden = true 로 attr을 적는다.
-   스크린 리더로 읽힐 때 사용하는 attr) aria-label=""
-   텍스트 값 대신 아리아 레이블 값이 읽힌다.

## 구조적인 문서 설계

-   글의 구조를 쉽게 파악할 수 있게 태그를 작성한다는 말
-   정리
    -   페이지 작업의 시작은 구획 나누기 부터 시작
    -   논리적 집합체에 따라 구획을 나누고 구획에 적합한 sectioning element을 고른 후 종합적으로 붙여나간다.

## Sectioning Element

-   section
    -   div vs section
        -   section은 element를 모아줄 때 논리적 관계가 좀 더 명확할 때 사용한다.
        -   div는 미관상, 혹은 단순히 요소를 모아줄 때 사용한다.
-   article
    -   블로그, 뉴스기사, 피드 등에 사용
    -   정보컨텐츠로써 완결성이 있는 독립적인 컨텐츠인 경우 article이 뉘앙스를 전달하기 쉽다.
-   nav
-   aside
    -   본문내용과 직접적인 연관이 없는 분리된 내용을 마크업할 때 사용한다.
    -   배너광고, 위젯
-   위와 같은 Section Elemtnt 태그들은 단원을 뜻하므로, 주제가 언급되어야 하기 때문에 heading tag를 반드시 작성한다.

## header, footer, main

-   header: 도입부를 표현할 떄 묶어주는 태그
-   footer: 하단부
-   main tag: 단 한 번밖에 못쓴다.
    -   main은 sectioning element가 아니기 때문에 h1 tag를 반드시 적어줄 필요는 없다.
    -   `Header Main Footer` `서론, 본론, 결론`과 같은 구조
