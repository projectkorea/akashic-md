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
<p id="p2"> </p>
```

```js
document.querySelector('#p1').firstChild // null
document.querySelector('#p2').firstChild // #text, 공백 문자
document.querySelector('#p1').nextSibling // #text  줄바꿈 문자
```

- HTML문서를 최소화하거나 압축되지 않는 한, 일반적인 HTML페이지는 상당한 수의 공백과 줄 바꿈 text노드를 가진다.
- 아무 내용 없이 공백문자만 들어가 있는 경우(#p2) 공백문자는 제거된다.(#p1)

## 4. Text 노드 생성 및 삽입하기

- 브라우저가 HTML문서를 해석해서 문서 내용을 기반으로 DOM이 구축될 때, text노드는 자동적으로 생성된다. 
- 자동으로 생성된 이후에는 `createTextNode()`를 사용해서 text 노드를 생성할 수도 있다. 

```js
var textNode = document.createTextNode('Hi')
document.querySelector('div').appendChild(textNode)

document.querySelector('div').innerText // hi
```

- 프로그래밍적으로 생성된 DOM 구조에도 text 노드를 삽입할 수 있다.

```js
var elementNode = document.createElement('p')
var textNode = document.createTextNode('hi')
elementNode.appendChild(textNode)

document.querySelector('div').innerHTML // <div>Hi</div>
```

# 5. `.data`나 `nodeValue`로 text 노드 값 가져오기
- Text 노드로 표현되는 텍스트 값과 데이터는 `.data`, `nodeValue` 속성을 사용하여 노드에서 추출할 수 있다. 두 속성 모두 Text 노드에 포함된 텍스트를 반환한다.

```html
<p>Hi, <strong>cody</strong><p>
```

```js
document.querySelector('p').firstChild.data // Hi
document.querySelector('p').firstChild.nodeValue  // Hi

document.querySelector('p').firstChild.length // 2
document.querySelector('p').firstChild.data.lengt// 2
document.querySelector('p').firstChild.nodeValue.length // 2
```

- `<p>`태그가 두개의 Text 노드와 `<strong>`태그를 가지고 있지만, `<p>`의 첫 번째 자식 노드 값만 가져오고 있다.
- Text 노드에 포함된 문자의 길이를 가져오려면, 노드 자체 또는 노드의 실제 텍스트 값/데이터의 lenght 속성에 접근하면 된다


# 6. `appendData()`, `deleteData()`, `insertData()`, `replaceData()`, `subStringData()`로 text 노드 조작하기

- Text노드가 메서드를 상속받는 `CharacterData` 객체는 Text노드의 하위 값을 조작하고 추출하기 위함 메서드를 제공한다.
- 조작 및 부분 추출은 Comment 노드에서도 활용할 수 있다.
- `characterData.deleteData(offset, count)`

```html
<p>Go big Blue</p>
```

```js
var pElementText = document.querySelector('p').firstChild

pElementText.appendData('!') // Go big Blue!

pElementText.deleteData(7,5) // Go big

pElementText.insertData(7,'Blue '), // Go big Blue

pElementText.replaceData(7,5,'Bunny') // Go big Bunny

pElementText.substringData(7,5) // Bunny
```

## 7. 복수의 형제 텍스트 노드가 발생하는 경우

- 브라우저에서 생성한 DOM트리가 지능적으로 텍스트 노드들을 결합하기에, 통상적으로는 형제 Text노드가 인접해서 나타나지 앟는다.