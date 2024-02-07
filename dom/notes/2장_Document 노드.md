# 02. Document 노드

## 1. document 노드 개요

- `document` 노드는 `DOCUMENT_NODE` 노드 객체를 뜻하며, `HTMLDocument`생성자를 통해 `window.document`를 생성한다.

```js
window.document.constructor  // function HTMLDocument() {[native code]}
window.document.nodeType     // DOCUMENT_NODE = 9
```

- HTML문서 로드 시 브라우저에 의해 `HTMLDocument`를 통해 인스턴스가 만들어진다. 
- `document.implementation.createHTMLDocument()`를 사용하여 브라우저 내에 현재 로드된 문서 외부에 직접 HTML문서를 생성할 수도 있다. 

## 2. `HTMLDocument`의 속성 및 메서드

- `document` 노드에 존재하는 주요 속성 및 메서드는 다음과 같다.
  - doctype
  - documentElement
  - implementation
  - activeElement
  - body
  - head
  - title
  - lastModified
  - referrer
  - URL
  - defaultview
  - compatMode
  - ownerDocument
  - hasFocus()

## 3. 일반적인 HTML 문서 정보 얻기

```js
document.title // 제목
document.URL // url
document.referrer // referrer
document.lastModified // 최종 수정일
```

## 4. document 자식 노드

- `document` 노드는 `DocumentType` 노드 객체 하나, `Element`노드 객체 하나를 가질 수 있다.

```js
document.childNodes[0] // doctype
document.childNodes[1] // html element
```

- `HTMLDocument` 생성자에서 생성되는 `window.document` 객체와 `Document` 객체를 혼동해서는 안된다. `window.documnet`는 DOM 인터페이스의 시작점이며 `Documnet.childNodes`가 자식 노드를 가지고 있는 이유가 바로 이 때문이다.

## 5. document는 각 노드에 대한 바로가기 참조를 얻을 수 있다.

```js
document.doctype // <!DOCTYPE>
document.documentElement // <html lang="en">
document.head // <head> 
document.body // <body>
```

## 6. `documnet.implementation.hasFeature()`를 사용하여 DOM 사양/기능 탐지

- 현재 문서에 대해 브라우저가 구현/지원하는 기능 및 수준에 대해 물어볼 수 있다. 

```js
document.implementation.hasFeature('Core','3.0') // true
// 브라우저가 Core 3.0 사양을 구현했는지 물어본다.

element.isSupported(featre,version) // true
// 특정 선택된 노드에 대한 구현 정보도 수집할 수 있다.
```

## 7. 문서 내에서 포커스를 가지고 있거나 활성 상태인 노드에 대한 참조 얻기

- `document.activeElement`: element를 반환한다.
  
```js
document.querySelector('textarea').focus();
document.activeElement // <textarea>가 출력된다.
```

## 8. 문서 혹은 문서 내의 특정 노드가 포커스를 가지고 있는지 판별하기

- `document.hasFocus()`: 사용자가 현재 해당 HTML문서가 로드된 창/탭에 포커스를 두면 ture를 반환한다.

```js
documnet.hasFocus() // true
```

## 9. `document.defaultView`는 최상위/전역 객체에 대한 바로가기다.

- 웹 브라우저에서 최상위 객체는 `window`이다.
- 최상위 객체가 없는 DOM이나 웹 브라우저 내에서 실행되지 않는 `Node.js`와 같은 환경에서 이 속성은 최상위 객체 영역에 접근할 수 있게 해준다.
  
```js
document.defaultView // window
```

## 10. Element에서 ownerDocument를 사용하여 Document에 대한 참조얻기

- 노드에서 `ownerDocument` 속성을 호출하면, 노드가 포함된 document에 대한 참조를 반환한다.

```html
<iframe src=""></iframe>
```

```js
document.body.ownerDocument // window.document
window.frames[0].document.body.ownerDocument // iframe내의 winodw.document를 얻는다.

document.ownerDocument // null
```

