# 06. Element 노드 인라인 스타일

## 1. style attribute

```html
<div style="background-color:red; height:100px;">
```

```js
var divStyle = document.querySelector('div').style
// CSSStyleDeclaration {0:"background-color", 1:"height"}
```

- 🎇`element.style`의 리턴값은 `CSSStyleDeclaration`이라는 객체이고, element 인라인 스타일만 포함되고, 스타일 시트에서 단계적으로 내려오면서 계산된 스타일은 포함되지 않는다.

## 2. 개별 인라인 CSS 속성 GET, SET, REMOVE

- CSS 속성명의 **하이픈을 제거하고 카멜케이스를 사용**한다.
- 

```js
var divStyle = document.querySelector('div').style

// 설정하기
divStlye.backgroundColor = 'red'

// 가져오기
divStyle.backgroundColor // red

// 제거하기
divStyle.backgroundColor ='';
```

- `setPropertyValue()`, `getPropertyValue()`, `removeProperty()`을 이용해서도 element 노드의 개별 CSS 속성을 조작할 수 있다.
- 이때의 속성명은 **하이픈이 포함된 CSS 속성명**을 사용한다.

```js
var divStyle = document.querySelector('div').style

divStyle.setProperty('background-color',)
divStyle.getPropertyValue('background-color')
divStyle.removeProperty('background-color')
```

## 3. 모든 인라인 CSS 속성 GET, SET, REMOVE

- `cssText`속성과 `getAttribute()`, `setAttribute()` 메서드를 사용하여 Javascript 문자열을 사용하여 style attribute 전체 값(인라인 한정)을 가져올 수 있다.

```js
var divStyle = document.querySelector('div').style

// 인라인 CSS 설정
divStyle.cssText = 'background-color:red; height:100px;'

// 가져오기
divStyle.cssText

// 지우기
divStyle.cssText = ''
```

```js
var div = document.querySelector('div')

div.setAttribue('style','background-color:red; height:100px;')
div.getAttribue('style')
div.removeAttribute('style')
```

## 4. `getComputedStyle()`를 사용하여 element의 계산된 스타일 가져오기

- element의 계층화된 CSS 즉, 외부 스타일 시트를 포함하여 최종 적용된 CSS를 가져오기 위해 사용한다.

```js
var div = document.querySelector('div')

window.getComputedStyle(div).backgroundColor
window.getComputedStyle(div).height
```

- `getComputedStyle()`에서 반환된 `CSSStyleDeclaration` 객체는 읽기 전용이므로 값을 설정할 수 없다.
- 색상은 `rgb(#,#,#)`으로 반환한다.

## 5. class 및 id attribute를 사용하여 element의 CSS 속성 적용 및 제거하기

```js
var div = document.querySelector('div')

// 설정
div.setAttribute('id', 'bar')
div.classList.add('foo')/

// 제거
div.removeAttribute('id')
div.classList.remove('foo')
```