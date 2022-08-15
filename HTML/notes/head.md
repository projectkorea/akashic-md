# `<head>` 안에 들어가는 태그

## 1. DocType

```html
<!DOCTYPE html>
```
-   html5 웹 표준으로 버전으로 작성된 문서임을 알려주는 태그다.
-   DTD, 문서 형식 선언: Document Type Decalaration

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

## 2. `title`, `link`, `style`, `script` 태그

### 1) title

-   작성요령/검색최적화에 강한 상관관계
-   키워드 단순 나열은 비추
-   페이지 마다 그에 맞게 변경
-   무엇에 관한 내용인지 함축적으로

### 2) link

-   `<link rel="stylesheet" href="style.css" `
-   css 스타일 시트
-   자동완성: `link:css + tab`

### 3) `style`, `script` 태그

-   html 문서내에서 css, js코드를 작성할 때 사용하지만 권장하지 않는다.

```html
<style>
    h1 {
        color: red;
    }
</style>

<script>
    console.log("js in html")
</script>
```

## 3. `meta` 태그
- 메타 데이터를 정의하는 태그
-   attr) name : 메타데이터 종류
-   attr) content : 메타데이터 값

```html
<meta charset="UTF-8">
```

- chracter setting의 약자로, UTF-8 인코딩 방식으로 문자를 표시하겠다는 의미다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- 화면의 가로 사이즈는 디바이스의 가로에 맞추고, 처음보여줄 때 1.0배율로 보여준다.

```html
<meta name="author" content="junha" />
<meta name="keywords" content="junha, practice, html, markup" />
<meta name="description" content="This is the site where i pracice HTML " />
```

-   사이트 설명
-   검색어에 도움이 되는 키워드 작성

---