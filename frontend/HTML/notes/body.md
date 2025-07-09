# `<body>` 안에 들어가는 태그

- 태그란?
  - `<>`로 둘러싸인 HTML 문법

---


## 글자 태그

### `<h1>` ~ `<h6>`

  - 제목을 표현할 때 사용
  - `<h1><img /></h1>` 도 가능

### `<p>`

  - 단락을 표현할 때 사용


### `a` 

- 링크 표시
- `<a href = "https://www.naver.com">`
    1) 절대 경로: `https://www.naver.com`
    2) 상대 경로: 코드를 작성하고 있는 파일 기준 
       - `./` 현재 위치
       - `../` 상위 위치
- `href=""`: hypertext(문서, 웹페이지) reference(주소값)
  - 엘리먼트: `href="#hello`: id가 hello인 태그로이동
  - 메일: `href="mailto:projectkorea@gamil.com`
  - 전화: `href="tel:01023456789"`: 모바일에서 가능
  - 새로운 페이지에서 열 때: `target="\_blank">`


### `<pre>`
   - 띄어쓰기, 줄 바꿈 태그 없이, 입력한 대로 나타낼 수 있음(엔터 줄 바꿈 가능)


### CSS 이용 추천 태그
  - `<br>`: 줄바꿈
  - `<hr>`: 단락 구분 용도로 사용. 직선이 그어짐.
  - `<b>`, `<strong>`: 굵은 글씨 
  - `<i>` `<em>`: 이탤릭체 글씨
  - `<sup>` `<sub>`: 윗첨자, 아랫첨자
  - `<mark>` : 형광펜 표시
  -   어떤 태그든 일관되게 사용하는 것이 중요하다.



---

## 그룹 태그


### `<div>` 태그

- 상자
- 영역 표현
- 레이아웃 나누는 용도

### `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`

-  `<div>`의 파생상품들
- `Semantic MarkUp`을 위해 나눠놨지만,0 결국은 `<div>`와 같다.



### `<ul>`, `<ol>` 태그

-   unordered list, ordered list, list item
-   목록 태그의 자식요소는 항상 `li`가 되야한다.
-   `<ol type="1 / a / A / i / I">`

```html
// ✅올바른 예시
<ol>
    <li>
        <a> 내용 </a>
    </li>
</ol>
```
```html
// ❌잘못된 예시
<ol>
    <a>
        <li>내용</li>
    </a>
</ol>
```


## `<dl>` 태그

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


---

## `<form>` 태그

```
<form>
  <input />
  <input />
  <input />
  <input />
  <input />
</form>
```
-   입력받은 정보를 **처리**하기 위한 태그
-   ex) 회원가입 페이지, 설문조사 페이지


```html
<form action="API주소" method="GET|POST"></form>
```

- `action` : 데이터를 전송할 API 주소
- `method` : 데이터 전달 방식 (get, post)
- `name` : 폼 이름 (백단에서 사용)


### `input` 태그

- 정보를 입력할 수 있는 공간을 만드는 태그


```html
<input type="text" />
```


#### `<input type="">`  종류

  - 입력 내용에 따라 입력창이 달라진다.
- `text`, `password`: 글자
- `number`, `range`: 숫자
- `checkbox`, `radio` : 버튼 종류
- `month`, `week`, `date`, `datetime`: 날짜
- `url`, `email`: 형식 지켜야 제출 가능
- `button` : `<input type="button">`은 `HTML4` 이후 `<button> 태그가 됌` 
- `<hidden>`: 사용자가 변경해서는 안 되는 데이터를 함께 보낼 때 (토큰)
- `submit` : 데이터 전송 버튼
- `image`,  `search`, `color`, `file`, `reset` ...등등




#### `<input>` 속성

```html
<input type="radio" id="" name="" />
```
- `name`, `value` : 서버로 전달될 때 `key`의 역할을 한다.
  - `name = value`식으로 서버에 전송된다.
- `name`: `form`안에 있는 여러 `input`들을 구별하는 용도
  - `radio` 타입 지정 시 필수로 적용해야함
- `readonly`: 읽기 전용, 수정 불가
- `placeholder`: 안내 문구
- `maxlength | minlength="13"`: 최대 | 최소 글자 설정
- `required`: 필수 입력
- `disabled`: 입력이 안되게함
- `value`: 초기값
- `pattern="정규표현식"`: 값의 입력 범위 설정
- `autofocus`: 웹 페이지 로딩 시 이 속성을 지정한 태그로 포커스가 바뀜
- `type='num'` 일 때 `min`, `max` 사용 가능
- `type='file'` 일 때 `accept =".png, .jpg"` 사용 가능




### 8-2) `label` 태그

- `<input>`태그에 이름을 붙이는 태그
- `label for` = `input id`

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
<textarea cols="50" rows="5" placeholder="내용을 입력해주세요"></textarea>
```

-   여러줄에 걸쳐서 많은 양의 글을 받을 때 사용
-   `rows="" cols=""` 인풋의 창을 조절 가능, 주로 css로 조절한다.

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



`<table>`: 표 생성
`<tr>:` 행을 나눔

`<td>`: `<tr>`태그로 나눈 행에서 셀을 분리할 때 사용
`<th>`행, 열의 머리말을 나타냄

`<colspan> <rowspan>` :** 셀 병합
`<thead> <tbody> <tfoot>` 각각 머리글, 본문, 바닥 고정시킴

```html
<table width= "600" height="250" align="center"
 border-"2" background="sample.png" cellspadding="1" cellspacing="5">

<tr>
<th> 번호 </th> ㄹ
<th> 이름 </th>
<th> 나이 </th>
</tr>
<tr>
<td>1</td>
<td>홍길동</td>
<td>91</td>
</tr>

</table>
```




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


---

## 미디어 태그

### `img` 태그

- `<img src='이미지주소' alt="alternative text" />`
- img가 정보로써 큰 의미가 없을 경우, `alt="` 빈 string이라도 적어둔다. (접근성 트리에서 제외)
- src 속성 : 가져올 이미지의 주소
- alt 속성 : 이미지 불러오기 실패시 보여줄 문자열
- width 속성 : 이미지의 가로의 길이
- height 속성 : 이미지의 세로의 길이
    `<img src="data:image/jpeg;base64,/9j/Z" alt="영웅사진" width="200px" height="auto">`

### `audio` 태그

```html
<audio src="" autoplay loop></audio>
```
- `controls`: 컨트롤 패널 표시
- `autoplay` : 컨트롤 패널 없이 자동재생
- `loop` : 반복 가능
- `<audio src = " 오디오 경로 " conrtols(컨트롤러) autoplay(자동 재생) loop(반복) />`  

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

- html파일을 embed한다.
- ex) embedded html을 하고 싶을 때 사용, 유튜브 동영상 embed 링크로 삽입

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




# 기타

```
<html>:html 파일 전체를 감싸는 태그
<title>: html의 제목을 정해주는 태그
<body>:본문, 실제 보여지는 화면
<head>:머리말에 해당함. css나 javascript를 연결해줌, 문자열 인코딩과 같은 문서정보 제공
<meta>:<head>요소 안에 존재하여 해당 페이지에 대한 정보를 나타낸다. 검색엔진이 검색을 할 때 중요한 키워드가 된다.

<link> 주로 외부 css 파일을 연결할 때 사용
<script> 외부 js 파일을 연결하거나 javascript 코드를 입력할 때 사용
<sapn> 요소 일부만 디자인이나 기능을 변경할 때 사용
<select> 셀렉트 박스 창을 만드는 태그, OPTION 태그: 여러 내용을 입력

<select>
    <option value="전체">전체</option>
    <option value="제목">제목</option>
    <option value="내용">내용</option>
</select>
```