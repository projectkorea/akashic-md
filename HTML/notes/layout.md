# HTML 설계

## # Semantic Markup

- **구조와 정보 위계**가 명확하게 들어나게 마크업하는 것을 말한다.
- 검색 엔진은 웹 페이지의 구조와 정보를 판단하고 **SEO**를 평가하여 상위 노출 여부에 반영된다.
- 마크업은 결국에 **브라우저한테 내가 작성한 정보가 어떤 성격의 정보인지 전달하는 작업**이다.


## # Tips for Semantic Markup

- 문서 구조를 쉽게 파악할 수 있게 태그를 작성하자
- 논리적 집합체에 따라 의미있게 구획을 나누는 게 핵심
- Sectioning element을 고른 후 종합적으로 붙여나간다.
- 화면에 보여지는 대로 마크업을 하는 것 말고, 의미의 중요성대로 마크업한 이후에 스타일링 작업으로 유연함을 가지면 된다.
- 특수문자는 브라우저가 랜더링할 때 혼란의 여지가 있으므로 escape code로 대체한다.

## # Sectioning Element

- Sectioning Element 태그들은 단원을 뜻하며, 주제가 언급되어야기에 **`h1` tag를 포함해야한다.**
- `Header Main Footer`
  - `서론, 본론, 결론`과 같은 구조
  - `header`: 도입부를 표현할 떄 묶어주는 태그
  - `footer`: 하단부
  - `main`
    - 단 한 번밖에 못쓴다.
- `section`
- `article`
  - 블로그, 뉴스기사, 피드 등에 사용
  - 정보 컨텐츠로써 완결성이 있는 독립적인 컨텐츠인 경우 article이 뉘앙스를 전달하기 쉽다.
- `nav`
- `aside`
  - 본문과 직접적인 연관이 없는 분리된 내용
  - 배너광고, 위젯
- `div` vs `section`
  - `section`은 element를 모아줄 때 논리적 관계가 좀 더 명확할 때 사용
  - `div`는 미관상, 혹은 단순히 요소를 모아줄 때 사용

## # WAI-ARIA

- **Web Accessibility Initiative – Accessible Rich Internet Applications**
- W3C가 출판한 기술 사양
- 사용자 인터페이스 구성 요소의 접근성을 증가시키는 방법에 대한 규정
- `class="sr-only"`
  - 컨벤션 네임으로 사용하며, 스크린리더에만 읽히게 할 때 사용한다.
- 의미없는 태그, 스타일적인 요소는 `aria-hidden = "true"`
- 스크린 리더로 읽힐 때 사용하는 `aria-label="검색 버튼"`
  - 텍스트 값 대신 아리아 레이블 값이 읽힌다.
