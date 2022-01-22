# 07. Text 노드

## 1. `Text 객체` 개요

- HTML 문서에서 텍스트는 text노드를 만들어내는 Text() 생성자 함수의 인스턴스로 표현된다.
- HTML 문서가 해석될 때, HTML 페이지의 element 사이에 섞여있는 텍스트는 text 노드로 변환된다.

```html
<p>Hi</p>
```

```js
var textHi = document.querySelector('p').firstChild

textHi.constructor // Text()
textHi // Text{textContent="hi", length=2, wholeText="hi", ...}
```

- Text는 CharacterData, Node, Object로부터 상속받는다.

## 2. Text 객체의 메소드 및 속성

- textContent
- splitText()
- appendData()
- deleteData()
- insertData()
- replaceData()
- subStringData()
- normalize()
- data
- document.createTextNode()

## 3. 공백 문자, 줄 바꿈 문자도 Text 노드를 생성한다.

```html
<p id="p1"></p>
<p id="p2">a a</p>
```

```js
document.querySelector('#p1').firstChild // null
document.querySelector('#p1').nextSibling // #text
document.querySelector('#p2').firstChild.nodeName // #text
```