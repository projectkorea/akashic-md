# HTML 태그

- **Semantic Markup**: 문서의 구조와 정보 위계가 명확하게 들어나게 마크업하는 것.
- HTML은 **SEO 평가의 기준**이 된다. 사람의 언어를 직접 이해한 후 중요도를 파악하는 것이 아니라, 마크업한대로 중요도가 검색엔진에 반영되기 때문이다.
-   의미에 맞게 HTML을 작성하기 위해선 **의식의 흐름이 아닌 논리의 흐름**으로 작성해야한다.
-   **핵심**: 마크업은 결국에 **브라우저한테 내가 작성한 정보가 어떤 성격의 정보인지 전달하는 것**이다.

## 1. `em`, `strong` 태그

-   `<em></em>`
-   `<strong></strong>`
-   em은 표면적인 강조, storng은 핵심 단어에 쓰는 편이다.
-   어떤 태그든 일관되게 사용하는 것이 중요하다.

## 2. `a` 태그

-   `<a href=""></a>`
-   `href=""`: hypertext(문서, 웹페이지) reference(주소값)
    -   엘리먼트: `href="#hello`: id가 hello인 태그로이동
    -   메일: `href="mailto:projectkorea@gamil.com`
    -   전화: `href="tel:01023456789"`: 모바일에서 가능
    -   새로운 페이지에서 열 때: `target="\_blank">`

## 3. `img` 태그

-   `<img src='#' alt="" />`
-   `src:` source, `alt:` alternative text
-   `img`가 정보로써 큰 의미가 없을 경우, `alt="` 빈 string이라도 적어둔다.
-   이미지 태그와 텍스트가 동일할 경우, `alt` 값을 생략해도 된다.

## 4. `ul`, `ol` 태그

-   unordered list, ordered list, list item
-   목록 태그의 자식요소는 항상 li가 되게 한다.

```html
// 올바른 예시
<ol>
    <li>
        <a> 내용 </a>
    </li>
</ol>
```
```html
// 잘못된 예시
<ol>
    <a>
        <li>내용</li>
    </a>
</ol>
```


## 5. `dl` 태그

- 정의 리스트
  1. 용어를 정의할 때
  2. key-value로 정보를 제공할 때 사용한다.

- `dl`: decriputon list
    - `dt`: decription term
    - `dfn`: definition
    - `dd`: description data

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

## 6. `blockquote`, `q` 태그

- 인용 태그
- `blockquote`,`cite`: 문단, 내용 전체가 인용문인 경우에 사용한다.
- `q`: 문장이 인용인 간단하 경우에 사용한다.

```html
<blockquote cite="https://actualized.org">
    All you need is Counciousness.
    ...
    <cite>Leo</cite>
</blockquote>
```

## 7. `div`, `span` 태그

-   `div`: 아무런 의미가 없지만, 요소를 묶을 때, css 스타일링할 때 요긴하게 사용한다.
-   `span`: 텍스트의 일부분을 그룹핑
-   그룹핑할때만 쓰는 태그이므로 꼭 필요할 때만 쓰자.


## 8. `form` 태그

```html
<form action="API주소" method="GET|POST"></form>
```
-   사용자로부터 인풋을 받은 정보를 처리하기 위한 태그
-   `action`: 입력받은 인풋을 처리할 API주소

### 8-1) `input` 태그

```html
<input type="text" />
```
-   입력창을 나타내는 태그
    -   `placeholder=""`: 아무것도 없을 때 안내문구
    -   `maxlength | minlength="13"`: 최대 | 최소한 13글자
    -   `required`: 무조건 입력해야하는 태그
    -   `disabled`: 입력이 안되게함
    -   `value=""`: 초기값

#### input type

-   `type="num | text | password | email | tel | num | file | radio | range | checkbox | submit"`
- `type='num'` 일 때 `min`, `max` 사용 가능
- `type='file'` 일 때 `accept =".png, .jpg"` 사용 가능

```html
<input type="radio" id="" name="" />
```
- `name`,`value` : 서버로 전달될 때 key의 역할을 한다.
- `name = value`식으로 서버에 전송된다.


### 8-2) `label` 태그

- 특정 태그에 이름을 붙이는 태그
- `label for` = `tag id`

```html
<label for="user-name">이름</label>
<input type="text" id="user-name" />
```

## 9. `select`, `option` 태그

```html
<label for="id-number">숫자</label>
<select name="number" id="id-number" multiple>
    <option value="1">1</option>
    <option value="1">2</option>
    <option value="1">3</option>
</select>
```

- `multiple`: ctrl+클릭으로 다중 선택 가능

## 10. `textarea` 태그

```html
<textarea placeholder="내용을 입력해주세요"></textarea>
```

-   여러줄에 걸쳐서 많은 양의 글을 받을 때 사용
-   attr) rows="" cols="" 인풋의 창을 조절 가능, 주로 css로 조절한다.

## 11. `button` 태그

```html
<button type="">버튼</button>
```

- `type: "button | submit | reset`
- form에 제출용도로 사용, 기능상 동일, reset(입력 필드 리셋)
- `input type-"submit"`과 기능은 동일하지만 `button type="submit"`이 제출이라는 의미상 input과 대비 되기 때문에 `button type="submit"`을 자주 사용한다.

## 12. `table` 태그

-   데이터를 담은 표를 만들 때 사용한다.
-   원리: **tr(table row)이 하나의 가로줄**이다. 가로줄을 기준으로 테이블을 만들어나간다.

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

-   `thead`: 테이블 헤더임을 명시
-   `tbody`: 테이블 바디임을 명시
-   `tfoot`: 테이블 합계표시

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

- `rowspan=""`,` colspan=""`: 셀이 차지하는 영역이 확장된다.
- `scope="row | col"`: `thead`에서 사용하는 속성이며, 스크린 리더에서 읽는 순서를 결정한다.

## 13. `audio`, `iframe`

- 미디어 파일 태그
```html
<audio src="" autoplay loop></audio>
```
- `controls`: 컨트롤 패널 표시
- `autoplay` : 컨트롤 패널 없이 자동재생
- `loop` : 반복 가능

```html
<audio>
    <source src="" type="audio/wav" />
    <source src="" type="audio/wav" />
    <source src="" type="audio/wav" />
    <p>오디오를 플레이할 수 없습니다.</p>
</audio>
```
-  `type`: 소스파일에 맞는 형식을 적는다.
-   `<source>`:
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

## 14. 기타태그

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

-   `address`: 연락처에 관한 마크업

```html
<pre>
    <code>
        console.log("hi")
    </code>
</pre>
```

-   `pre`: preformatted text, 작성한 그대로 화면에 표시된다.
-   `code`: code에 관한 태그
-  `<code>`를 `<pre>` 안에 감싸주는 이유는 코드를 짤 때, 들여쓰기가 가독성에 굉장히 중요한 요소이기 때문에 들여쓰기 한 그대로 표현하기 위해서 `<pre>`로 감싼다.

---