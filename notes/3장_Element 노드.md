# Element 노드

## 1. HTML*Element 객체 개요

- 각 `element`(태그)는 고유한 Javascript 인터페이스/생성자를 통해 만들어진다.
  - `HTMLHtmlElement`
  - `HTMLHeadElement`
  - `HTMLFontElement`
  - `HTMLParagraphElement`
  - `HTMLDivElement`
  - `HTMLButtonElement`
  - `HTMLImageElement`
- 모든 `HTML*Element`는 `HTMLElement`, `Element`, `Node`, `Object`로 부터 속성 및 메서드를 상속받는다.

## 2. `HTML*Element` 객체의 속성 및 메서드

- 주요 속성 및 메서드는 다음과 같다. (상속받은 것도 포함)
  - `createElement()`
  - `tagName`
  - `children`
  - `getAttribute()`
  - `setAttribute()`
  - `hasAttribute()`
  - `classlist()`
  - `dataset`
  - `attributes`

## 3. Element 생성

- Element 노드는 브라우저가 HTML 문서를 해석해서, 문서 컨텐츠를 기반으로 DOM이 만들어질 때 인스턴스화된다.
- `createElement()`를 사용하여 Javascript로 Element 노드를 생성할 수도 있다.

```js
var elementNode = document.createElement('textarea'); // Element 노드 생성 
document.body.appendChild(elementNode); // DOM 트리에 노드 삽입
```

## 4. Element 태그 이름 얻기

- `tagName`속성 사용하여 elemnet의 이름에 접근할 수 있다.
- `nodeName`이 반환하는 것과 동일한 값을 반환한다. 대소문자 여부에 관계없이 대문자로 반환한다.

```html
<a href="#">Hi</a>
```

```js
document.querySelector('a').tagName // A
document.querySelector('a').nodeName // A
```

## 5. Element의 Attribute 및 값에 대한 리스트/컬렉션 얻기

- `attributes`: `Node`로 부터 상속받은 속성. 
- 현재 element에 정의된 Attr 노드의 컬렉션을 얻을 수 있다.
- 반환된 리스트는 `NameNodeMap`이다.
- attribute 컬랙션에 대해 루프를 돌면서, 컬랙션 내에 포함된 각 Attr 노드 객체를 살펴본다.

```html
<a href="#" title="title" data-foo="dataFoo" class="yes" style="margin:0;" foo="boo"></a>
```

```js
var atts = document.querySelector('a').attributes

for(var i=0; i<atts.length ; i++){
  atts[i].nodeName
  atts[i].nodeValue
}
```

- attributes 속성을 통해 반환되는 배열은 라이브 상태이다. 이는 내용물이 언제든지 변결됭 수 있다는 것을 의미한다.
- 반환된 배열이 상속받고 있는 NamedNodeMap은 getNamedItem(), setNamedItem, removeNamedItem과 같이 배열을 조작하기 위한 메서드를 제공한다.
- 이 메서드들을 사용하여 attributes를 조작하는 것보다는 getAtrribute() setAttribute hasAtrribute removeAttribute를 사용하는 것이 좋다.
- attributes 속성은 유사 배열 컬렉션이므로, 읽기 전용인 length 속성을 가진다.
- Boolean attribute가 attributes 목록에 나타나더라도 값을 지정하기 전에는 값이 없는 상태다. `<option selected ></option>` `<option selected="selected"></option>`


## 6.  Element의 Attribute 값 획득, 설정, 제거

- getAttribute()
- setAttribute()
- removeAtrribute()

```html
<a href="#" title="title" data-foo="dataFoo" class="yes" style="margin:0;" foo="boo" hidden="hidden"></a>
```

```js
var atts = document.querySelector('a')

// attribue 제거
atts.removeAttribute('href')

// attribue 재설정
atts.setAttribute('title', 'title')
atts.setAttribute('hidden', 'hidden')
// boolean attribute도 attribute를 값으로 보내야한다.

// attribue 가져오기
atts.getAttribute('href')
atts.getAttribute('class')
```

-  setAttribute()를 사용하거나 attribute 값을 null이나 ''로 설정하지 말고 removeAttribute()를 사용해라
-  일부 element attribute는 element 노드에서 객체 속성으로 존재한다 document.body.id, document.body.className
-  이 속성을 사용하지 말고 attribute에 대한 remobe, set, get 메서드를 사용할 것을 권장한다.

## 7. Element가 특정 attribute를 가지고 있는지 확인하기

- `hasAttribute()`: element가 attribute를 포함하고 있으면 값을 가지지 않더라도 true를 반환한다.

```html
<a href="#" goo></a>
```

```js
atts.hasAttribute('href') // true
atts.hasAttribute('goo') // true
```

## 8. Class Attribute 값 리스트 얻기

- element 노드에 존재하는 classList 속성을 사용하면 className 속성에서 반환되는 공백으로 구분된 문자열 값을 사용하는 것보다 훨씬 쉽게 class attribute 갑 리스트(DOMTokenList)에 접근할 수 있다.

```html
<div class="big brown bear"></div>
```

```js
var elm = document.querySelector('div')
elm.classList // {0="big", 1="brown", 2="bear", length=3, ...}
elm.className // 'big bron bear'
```

- classList는 유사배열컬랙션이며 읽기전용인 length속성을 가진다.
- classList는 읽기 전용이지만 add(), remove(), contains(), toggle() 메서드를 사용해서 변경할 수 있다.
  

## 9. Class attribute에 하위 값 추가 및 제거하기

- `classList.add()`, `classList.remove()`를 사용하면 class attribute의 값을 간단하게 편집할 수 있다.

```html
<div class="dog"></div>
```

```js
var elm = document.querySelector('div')

elm.classList.add('cat')
elm.classList.remove('dog')
elm.className // 'cat'
```

## 10. Class attribute 값 토글

- `classList.toggle()` class attribute 하위 값을 토글시킬 수 있다.
- 값이 누락된 경우 추가하고, 이미 있는 경우 제거한다.

```js
elm.classList.toggle('visivle')
elm.classList.toggle('grow')
```

## 11. Class attribute 값이 특정 값을 가지고 있는지 판별하기

- `classList.contains()`를 사용하면 class attribute 값이 특정 하위 값을 가지고 있는지를 판별할 수 있다.

```html
<div class="big brown bear"></div>
```

```js
elm.classList.contains('brown') // true
```

## 12. data-* attribute를 가져오고 설정하기

- element노드의 dataset 속성은 element에서 data-*로 시작하는 모든 attribute를 가진 객체를 제공한다.
- 이 객체는 Javascript 객체 이므로, dataset을 조작해서 DOM내의 element의 변경 내용을 반영할 수 있다.

```html
<div data-foo="foo" data-bar-bar="bar">
```

```js
var elm = document.querySelector('div')

elm.dataset.fooFoo // 'foo'
elm.dataset.barBar // 'bar'
```

- dataSet은 data attribute들의 camelCase 버전을 갖고 있다. data-foo-foo는 dataSet DOMStringMap 객체 내에 fooFoo라는 속성으로 나열된다. `-`는 camelCasing으로 대체된다.
- DOM내에서 data-* attribute를 제거하려면 dataset 속성에 대해 delete 연산자를 사용하면 된다. `delete dataset.fooFoo`