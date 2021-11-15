# 01. 노드 개요

## 1. DOM은 JavaScript Node 객체의 트리다.

-   HTML 문서를 작성할 때 HTML 콘텐츠를 다른 HTML 콘텐츠 내에 캡슐화하게 된다.
-   이를 통해 트리로 표현 가능한 계층 구조가 만들어진다.
-   브라우저는 HTML코드를 해석해서 트리 형태로 구조화된 노드들을 가지고 있는 문서(DOM)을 생성한다.
-   HTML문서가 브라우저에 의해 해석되어, 실제 문서를 나타내는 노드 객체들의 트리 구조로 변환된다.
-   **DOM의 목적은 Javascript를 사용해서 문서에 대한 스크립트 작성을 위한 프로그래밍 인터페이스를 제공하는 것이다.**

## 2. 노드 개체 유형

```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <script>
            console.log(Node.ELEMENT_NODE)
            // element 노드의 숫자 코드 값인 1이 출력됨
            for (var key in Node) {
                console.log(key, Node[key]);
            }
        </script>
    </body>
</html>
```
- ELEMENT_NODE 1
  - ex) `<body>`, `<a>`, `<p>`, `<script>`, `<style>`, `<html>`, `<h1>`
- ATTRIBUTE_NODE 2
  - ex) `class = "funcEdges"`
- TEXT_NODE 3
  - ex) `html 문서 내의 텍스트 문자`
- CDATA_SECTION_NODE 4
- ENTITY_REFERENCE_NODE 5
- ENTITY_NODE 6
- PROCESSING_INSTRUCTION_NODE 7
- COMMENT_NODE 8
- DOCUMENT_NODE 9
  - ex) `window.document`
- DOCUMENT_TYPE_NODE 10
- DOCUMENT_FRAGMENT_NODE 11
- NOTATION_NODE 12
- DOCUMENT_POSITION_DISCONNECTED 1
- DOCUMENT_POSITION_PRECEDING 2
- DOCUMENT_POSITION_FOLLOWING 4
- DOCUMENT_POSITION_CONTAINS 8
- DOCUMENT_POSITION_CONTAINED_BY 16
- DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC 32

