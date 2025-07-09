# 04. Element 노드 선택

## 1. 특정 `Element 노드` 선택

### 1) `document.getElementById()`
  
   - `getElementById()`는 `document`의 메서드로만 사용할 수 있다.  
   - ID 값은 문서 전체에서 유일해야 하며 "국지적"인 버전을 쓸 이유가 없기 때문이다.

### 2) `querySelector()`
  
  1. 단일 element 노드에 대한 참조를 얻는데 가장 많이 사용한다
  2. `CSS selector` 문법 형식을 따른다.
     - `document.querySelector('#scope>tbody>tr>td:nth-of-type(2)')`
  3. 문서 내에서 발견되는 **첫 번째 노드 반환**
  4. **element 노드**도 메서드 갖고 있어, DOM 트리의 특정 부분에 한정해 **상황에 맞는 쿼리**를 할 수 있다.
  5. **속성 값**을 선택자로도 사용할 수 있다. 
- `document.querySelector('[name="title"]')`



## 2. 다중 `Element 노드` 선택

- `NodeList`와 `HTMLCollection`은 element들의 모음을 갖고 있는 `유사배열객체`이다.
- `iterable`하기 때문에 둘 다 `length` 프로퍼티를 가지므로 객체를 배열처럼 접근할 수 있고 반복문을 돌 수 있다. 
- 그러나 유사배열객체이기 때문에 자바스크립트에서 제공하는 배열 객체의 메소드는 사용할 수 없다. (ex. map, forEach, reduce 등등)


### 1) return `HTMLCollection`

- `HTMLCollection`은 문서가 바뀔 때 실시간으로 업데이트되는 **live DOM** 컬렉션 객체다.

  1. `getElementsByTagName()`
  2. `getElementsByClassName()`
  3. `getElementsByName()`: `name` 속성 값으로 선택한다.

### 2) return `NodeList`

- `NodeList` 객체는 리스트 생성 시점의 문서 스냅샷이기에, 노드 객체의 상태 변화를 반영하지 않는 **non-live DOM** 컬렉션 객체인데 비해, `childNodes` 프로퍼티는 **live DOM** 컬렉션 객체를 반환한다.

1. `querySelectorAll()`: **non-live DOM**
2. `childNodes`: **live DOM**

#### `childNodes` 예시코드


```html
<ul>
  <li>hi</li>
  <li>money</li>
</ul>
```

```js
var ulElementChildNodes = document.querySelector('ul').childNodes;

ulElementChildNodes 
// NodeList(5) [text, li, text, li, text]
// 줄바꿈도 text노드로 인식되어 ul의 자식으로 들어갔다.
```
- `childNodes`에서 반환되는 `NodeList`는 **직계 자식**만을 가진다.
- `childNodes`는 Element노드 뿐만 아니라 `Text`, `Comment` 노드도 포함한다.

- `querySelectorAll` : 노드리스트, forEach 가능
- `getElement..S`: 컬레션 `Array.from().forEach`


#### `array`로 바꾸어 사용하는 것이 바람직하다.

- `NodeList`는 `HTMCollection`과 다르게 **`NodeList.prototype.forEach`** 메서드를 상속받아 사용할 수 있다. 그러나 `forEach` 외의 `Array.prototype`에서 제공하는 `map`, `reduce`, `filter` 등의 메서드는 사용할 수 없다.
- 따라서 `HTMLCollection`과 `NodeList` 모두 `Array.prototype.slice.call()`를 통해 `array`로 변환하면 현재DOM에 국한되지 않은 **리스트 스냅샷**을 만들 수 있다.
1. `Array`객체가 제공하는 메서드들 접근할 수 있다.
2. live 객체는  반복문을순회하면서 **노드가 변경**되어, 개발자의 의도와는 다른 결과가 발생할 수 있지만 이를 예방할 수 있다. 

```js
Array.isArray(document.querySelectorAll('a')) // false
Array.isArray(Array.prototype.slice.call(document.querySelectorAll('a'))) // true
```

## 3. 직계 자식 Element 노드를 모두 선택하기

- element 노드에서 children 속성을 사용하면, element 노드의 직계 자식 노드 전체 리스트(HTMLCollection)를 얻을 수 있다. 
- children은 직계 element 노드만을 제공하며, element가 아닌 노드는 제외된다. 

- HTMLCollection은 element를 문서 내의 순서대로 가진다. 라이브 상태다. 문서 변경시 동적으로 컬렉션에 반영된다. element가 DOM에 나타나는 순서대로 배열내에 위치한다.

## 4. 컨텍스트 기반 Element 선택

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
- `Element.matches()`
- `var result = element.matches(selectorString); `
- `matches()`: element가 selector 문자열에 들어있는지 판별할 수 있다.

```js
document.querySelector('li').matches('ul:first-child')
```
- `<ul>` 내의 첫번째 `<li>`를 선택한 후 이 element가 selector인 `li:first-child`에 들어 맞는지 확인한다.

### 참고) 가상 요소는 DOM에 표현되는가?

- **No!** `::before`과 `::after` 선택자를 사용하여 생성된 가상 요소는 CSSOM과 렌더 트리의 일부를 구성하지만 DOM은 오직 원본 HTML 문서로부터 빌드 되고, 요소에 적용되는 스타일을 포함하지 않기 때문에 기술적으로 DOM의 일부는 아니다.
- 따라서 CSS 선택자인 `querySelector`를 이용을 하더라도 가상 요소는 DOM API로는 조작할 수 없다.

```css
.button-current {
  border: 1px solid white;
}

.button-current::after {
  background-color: #fff;
}
```

- `button-current`클래스에 `::after`라는 가상요소를 DOM API를 통해 추가/제거 할 수는 없다. 따라서 가상요소까지 적용된 `button-current`클래스 자체를 추가/제거하여 기능 구현하는 방법으로 코드를 작성해야한다.