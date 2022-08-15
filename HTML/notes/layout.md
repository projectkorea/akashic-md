# HTML 설계

## Semantic Markup
- 문서의 구조와 정보 위계가 명확하게 들어나게 마크업하는 것.
- HTML은 **SEO 평가의 기준**이 된다. 사람의 언어를 직접 이해한 후 중요도를 파악하는 것이 아니라, 마크업한대로 중요도가 검색엔진에 반영되기 때문이다.
-  의미에 맞게 HTML을 작성하기 위해선 **논리적**으로 작성해야한다.
-  **핵심**: 마크업은 결국에 **브라우저한테 내가 작성한 정보가 어떤 성격의 정보인지 전달하는 것**이다.

---

## 1. 마크업 우선 순위: 의미있는 단위로 나누기

-   `<h1><img /></h1>` 도 가능
-   특수문자는 브라우저가 랜더링할 때 혼란의 여지가 있으므로 escape code로 대체한다.

## 2. 마크업 할때는 의미에 맞게 할 것!

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

## 3. WAI-ARIA

-   It's stands for **Web Accessibility Initiative – Accessible Rich Internet Applications**
-   사용자 인터페이스 구성 요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술 사양이다.
-   `class="sr-only"`
    -   컨벤션 네임으로 사용하며, 스크린리더에만 읽히게 할 때 사용한다.
-   의미없는 태그 | 스타일적인 요소는 `aria-hidden = true` 로 attr을 적는다.
-   스크린 리더로 읽힐 때 사용하는 attr) aria-label=""
-   텍스트 값 대신 아리아 레이블 값이 읽힌다.

## 4. 구조적인 문서 설계

-   글의 구조를 쉽게 파악할 수 있게 태그를 작성한다는 말
-   정리
    -   페이지 작업의 시작은 구획 나누기 부터 시작
    -   논리적 집합체에 따라 구획을 나누고 구획에 적합한 sectioning element을 고른 후 종합적으로 붙여나간다.

## 5. Sectioning Element
- `section`, `article`, `nav`, `aside`
1. section
    -   div vs section
        -   section은 element를 모아줄 때 논리적 관계가 좀 더 명확할 때 사용한다.
        -   div는 미관상, 혹은 단순히 요소를 모아줄 때 사용한다.
2. article
    -   블로그, 뉴스기사, 피드 등에 사용
    -   정보컨텐츠로써 완결성이 있는 독립적인 컨텐츠인 경우 article이 뉘앙스를 전달하기 쉽다.
3. nav
4. aside
    -   본문내용과 직접적인 연관이 없는 분리된 내용을 마크업할 때 사용한다.
    -   배너광고, 위젯
-   위와 같은 Section Elemtnt 태그들은 단원을 뜻하므로, 주제가 언급되어야 하기 때문에 반드시 **`h1` tag를 반드시 작성**한다.
-   섹셔닝 엘리먼트의 header, footer로 의미를 나눌 수 있다.

## 6. header, footer, main

-   `header`: 도입부를 표현할 떄 묶어주는 태그
-   `footer`: 하단부
-   `main`: 단 한 번밖에 못쓴다.
    -   `main` 태그는 sectioning element가 아니기 때문에 h1 tag를 반드시 적어줄 필요는 없다.
    -   `Header Main Footer` `서론, 본론, 결론`과 같은 구조

### 기타) 버튼을 눌렀을 때 나오는 모달창

```html
<button></button>
<div>
    <button></button>
    <button></button>
    <button></button>
</div>
```

-   버튼을 눌렀을 때 나오는 모달창은 주로 병렬적으로 배치한다.
---