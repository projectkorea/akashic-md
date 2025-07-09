# Element 노드

- 브라우저가 HTML 문서를 해석해서, DOM이 만들어질 때 `Element` 노드가 생성된다.

## 1. Element 객체

- `Element` 객체는 아래와 같은 생성자들로 만들 수 있다.
  1. `HTMLHtmlElement`
  2. `HTMLHeadElement`
  3. `HTMLFontElement`
  4. `HTMLParagraphElement`
  5. `HTMLDivElement`
  6. `HTMLButtonElement`
  7. `HTMLImageElement`

- 모든 `HTML*Element`는 `HTMLElement`, `Element`, `Node`, `Object`로 부터 속성 및 메서드를 상속받는다.


## 2. `HTML*Element` 주요 프로퍼티, 메서드

  - `createElement()`
  - `tagName`
  - `children`
  - `getAttribute()`
  - `setAttribute()`
  - `hasAttribute()`
  - `classList()`
  - `dataset`
  - `attributes`


## 3. Element 생성

- `createElement()`

```js
var elementNode = document.createElement('textarea');
```

## 4. Element 태그 이름

- `tagName`, `nodeName`
- 태그 이름을 대문자로 반환

```html
<div>Hi</div>
```

```js
document.querySelector('div').tagName 
// 'DIV'
document.querySelector('div').nodeName
// 'DIV'
```

---

## 5. Element의 Attribute 리스트 얻기

- `.attributes`
- 유사 배열 컬렉션 (라이브 돔) `NameNodeMap` 반환

```html
<a href="#" title="title" data-foo="dataFoo" class="yes" style="margin:0;" foo="boo"></a>
```

```js
var attrs = document.querySelector('a').attributes
// { 0: href, 1: title, 2: data-foo, 3: class, 4: style, 5: foo, href:...}
```

- `NamedNodeMap`은  배열을 조작하기 위한 메서드를 제공한다.
  - `getNamedItem()`, `setNamedItem`, `removeNamedItem`
- 하지만 `getAttribute()` `setAttribute`, `hasAttribute`, `removeAttribute`를 권장한다.
- `Boolean attribute`는 attributes 목록에 나타나더라도 값을 지정하기 전에는 값이 없는 상태다. 
  - `<option selected ></option>`
  - `<option selected="selected"></option>`


## 6.  Element의 Attribute 값 접근, 설정, 제거

```html
<a href="#" title="title" class="yes"></a>
```

- `getAttribute()`
```js
a.getAttribute('href')
a.getAttribute('class')
```

- `setAttribute()`
```js
a.setAttribute('title', 'change-title')
a.setAttribute('hidden', 'hidden') 
```

- `removeAttribute()`
```js
a.removeAttribute('href')
```

1.  `setAttribute('title','')`로 설정하지 말고 `removeAttribute()` 사용 권장
2. 일부 `attribute`는 element 노드에서 객체 속성 바로 존재
   -  `document.body.id`, `document.body.className`
   -  하지만 이 속성보단 `attribute`에 대한 remove, set, get 메서드를 사용 권장

## 7. Element의 특정 attribute 포함 유무 확인

- `hasAttribute()`: `boolean` 반환

```html
<a href="#" goo></a>
```

```js
atts.hasAttribute('href') // true
atts.hasAttribute('goo') // false
```

---

## 8. `.classList` 

- 유사배열 `DOMTokenList`를 반환

```html
<div class="big brown bear"></div>
```

```js
document.querySelector('div').classList
// {0="big", 1="brown", 2="bear", length=3, value="big brown bear"}

document.querySelector('div').className
// 'big brown bear'
```



## 9. `.classList.add()`, `.classList.remove()`

```js
elm.classList.add('pretty')
elm.classList.remove('big')
```

## 10. `.classList.toggle()`

- 값이 누락된 경우 추가하고, 이미 있는 경우 제거한다.

```js
elm.classList.toggle('visible')
```


## 11. `classList.contains()`

- `true` / `false` 반환

```js
elm.classList.contains('brown') // true
elm.classList.contains('purple') // false
```

---

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