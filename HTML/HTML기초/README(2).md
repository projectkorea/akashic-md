# HTML 팁

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

## Sectioning Element
