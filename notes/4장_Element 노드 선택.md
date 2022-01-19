# 04. Element 노드 선택

## 1. 특정 Element 노드 선택하기

- 단일 element 노드에 대한 참조를 얻는데 가장 많이 사용한다
  - `querySelector()`
    1. CSS selecor 문법 형식의 매개변수를 허용한다. `#scope>tbody>tr>td:n th-of-type(2)`
    2. 문서 내에서 발견되는 첫 번째 노드 element만 반환한다. 
    3. `quertSelector()`는 element 노드에도 정의되어 있어, 메서드의 결과를 DOM 트리의 특정 부분에 한정할 수 있어서 상황에 맞는 쿼리를 할 수 있게 해준다.

```html
<ul>
  <li>Hello</li>
  <li id="last">world!</li>
</ul>
```

```js
document.querySelector('li').textContent // Hello
document.getElementById('last').textContent // world!
```

## 2. Element 노드 리스트 선택 및 생성

- 선택한 elements들의 노드 리스트(NodeList)를 생성한다.
  - `querySelectorAll()`
  - `getElementsByTagName()`
  - `getElementsByClassName()`

```js
document.querySelectorAll('li')
document.getElementsByTagName('li')
document.getElementsByClassName('liClass')
```
- `getElementsByTagName()`, `getElementsByClassName()`으로 생성된 NodeList는 라이브상태로 간주되며, 리스트를 생성하고 선택한 후에 문서가 업데이트된 경우에도 문서의 상태를 항상 반영한다.
- querySelectorAll메서드는 리스트 생성 시점의 문서 스냅샷이며, 이는 문서 변경 내용을 반영하지 않는 다는 것을 의미하며 정적이다.
- 위 세 메서드 또한 element 노드에도 정의 되어 있다. 

## 3. 직계 자식 Element 노드를 모두 선택하기

- element 노드에서 children 속성을 사용하면, element 노드의 직계 자식 노드 전체 리스트(HTMLCollection)를 얻을 수 있다. 
- children은 직계 element 노드만을 제공하며, element가 아닌 노드는 제외된다. 

- HTMLCollection은 element를 문서 내의 순서대로 가진다. 라이브 상태다. 문서 변경시 동적으로 컬렉션에 반영된다. element가 DOM에 나타나는 순서대로 배열내에 위치한다.

# 4. 컨텍스트 기반 Element 선택

- 해당 메서드의 결과를 DOM 트리의 특정 부분으로 제한 할 수 있게 해준다.
- element 노드 객체에서 이 메서드를 호출하면, element 노드를 검색하고자 하는 특정 컨텍스트를 선택할 수 있다.

```js
// div콘텐츠에 대해서만 선택 메서드를 실행하기 위해 div를 컨텍스트로 선택
var div = document.querySelector('div')

div.querySelector('ul')
div.getElementsByTagName('li')
```
- 메서드들은 랄이브 상태의 DOM에서만 동작하는 것이 아니라, 코드로 생성한 DOM 구조에서도 동작한다.

```js
var divElm = document.createElement('div')
var ulElm = document.createElement('ul')
divElm.appendChild(ulElm)
divElm.querySelector('ul')
```

## 5. 사전에 구성된 Element 노드 선택/리스트

- HTML문서에서 element 노드를 포함하고 있는 사전 구성된 유사 배열 리스트가 몇 개 존재한다.

- HTML 문서 내의 모든 
  - `document.all`: element
  - `documnet.forms`: `<form>` element
  - `document.images`: `<img>` element
  - `document.links`: `<a>` element
  - `document.scripts`: `<script>` element
  - `document.styleSheets`: `<link>` 또는 `<stlye>` element

## 6. 선택될 Element를  검증하기
- Element.matches()
- var result = element.matches(selectorString); 
- `matches()`: element가 selector 문자열에 들어있는지 판별할 수 있다.

```js
document.querySelector('li').matches('ul:first-child')
```
- <ul> 내의 첫번째 li를 선택한 후 이 element가 selector인 li:first-child에 들어 맞는지 확인한다.

