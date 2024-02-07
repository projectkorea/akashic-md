# 07. Text 노드

## 1. `Text` 객체 개요

- HTML 문서에서 텍스트는 text노드를 만들어내는 `Text()` 생성자 함수의 인스턴스로 표현된다.
- HTML 문서가 해석될 때, HTML 페이지의 element 사이에 섞여있는 텍스트는 text 노드로 변환된다.

```html
<p>Hi</p>
```

```js
var textHi = document.querySelector('p').firstChild

textHi.constructor // Text()
textHi // Text {textContent="hi", length=2, wholeText="hi", ...}
```

- `Text`는 `CharacterData`, `Node`, `Object`로부터 상속받는다.

## 2. `Text` 객체의 메소드 및 속성

- `textContent`
- `splitText()`
- `appendData()`
- `deleteData()`
- `insertData()`
- `replaceData()`
- `subStringData()`
- `normalize()`
- `data`
- `document.createTextNode()`

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
- `#p2` → `#p1`: 아무 내용 없이 공백문자만 들어가 있는 경우, 공백문자는 제거된다.

## 4. Text 노드 생성 및 삽입하기

- 브라우저가 HTML문서를 해석해서 문서 내용을 기반으로 DOM이 구축될 때, text노드는 자동적으로 생성된다. 자동으로 생성된 이후에는 `createTextNode()` 메소드를 사용해서 text 노드를 생성할 수도 있다. 

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

## 5. `.data`나 `nodeValue`로 text 노드 값 가져오기
- Text 노드로 표현되는 텍스트 값과 데이터는 `.data`, `nodeValue` 속성을 사용하여 노드에서 추출할 수 있다. 두 속성 모두 **Text 노드에 포함된 텍스트를 반환**한다.

```html
<p>Hi, <strong>cody</strong><p>
```

```js
document.querySelector('p').firstChild.data // Hi
document.querySelector('p').firstChild.nodeValue  // Hi

document.querySelector('p').firstChild.length // 2
document.querySelector('p').firstChild.data.length// 2
document.querySelector('p').firstChild.nodeValue.length // 2
```

- `<p>`태그가 두개의 Text 노드와 `<strong>`태그를 가지고 있지만, `<p>`의 첫 번째 자식 노드 값만 가져오고 있다.
- Text 노드에 포함된 문자의 길이를 가져오려면, 노드 자체 또는 노드의 실제 텍스트 값/데이터의 lenght 속성에 접근하면 된다


## 6. text 노드 조작하기

- `appendData()`
- `deleteData()`
- `insertData()`
- `replaceData()`
- `subStringData()`
- Text 노드는 가 위와 같은 메서드를 `CharacterData`로 부터 상속받는다. `CharacterData`객체는 Text 노드의 하위 값을 조작하고 추출하기 위한 메서드를 제공한다. 조작 및 부분 추출은 Comment 노드에서도 활용할 수 있다.

```html
<p>Go big Blue</p>
```

```js
var pElementText = document.querySelector('p').firstChild // #text

pElementText.appendData('!') // Go big Blue!

// characterData.deleteData(offset, count)
pElementText.deleteData(7,5) // Go big

pElementText.insertData(7,'Blue '), // Go big Blue

pElementText.replaceData(7,5,'Bunny') // Go big Bunny

pElementText.substringData(7,5) // Bunny
```

## 7. 복수의 형제 텍스트 노드가 발생하는 경우

- 브라우저에서 생성한 DOM트리가 지능적으로 텍스트 노드들을 결합하기에, 통상적으로는 형제 Text노드가 인접해서 나타나지 않는다. 하지만 형제 텍스트 노드가 발생 가능한 두 가지 경우가 존재한다.

1. 텍스트 노드가 Element 노드를 포함하면 텍스트가 적절한 노드 그룹으로 분할된다.

```html
<p>Hi, <strong>cody</strong><p>
```

```js
pElement.firstChild.data // Hi
pElement.firstChild.nextSibling // Element 노드 <strong>
pElement.lastChild.data // cody
```

2. 코드로 생성한 element에 프로그래밍적으로 Text 노드를 추가할 때 

```js
var pElementNode = document.querySelector('p')
var textNodeHi = document.createTextNode('Hi')
var textNodeCody = document.createTextNode('Cody')

pElementNode.appendChild(textNodeHi);
pElementNode.appendChild(textNodeCody);
```

## 8. 모든 자식 텍스트 노드 반환하기: `textContent`

- `textContent`는 두 가지 기능을 갖고 있다.

1. **반환**: 모든 자식 텍스트 노드를 가져온다.
   - **노드에 포함된 모든 텍스트 노드의 문자열을 합쳐서** 반환한다. 이 기능을 통해 HTML 문서에서 모든 텍스트 노드를 매우 쉽게 추출할 수 있게 해준다.
   - 직계 자식 텍스트 뿐만 아니라, **모든 자식 텍스트 노드를 취합한다**는 점에 유의한다.

2. **재할당**: 노드의 내용을 특정 Text 노드로 설정할 수 있다. 
   - **모든 자식 노드가 제거되고 단일 Text 노드로 바뀐다.**

```html
<body>
  <div>
    <h1>dude</h1>
    <p>fly high!<strong>!!</strong></p>
  </div>
</body>
```

```js
//1번 예시
document.querySelector('div').textContent // dude fly high!!

//2번 예시
document.querySelector('div').textContent  = 'dude fly more higher!!'
document.querySelector('div') // <div>dude fly more higher!!</div>
```

## 9. `textContent` vs `innerText`

[1장 7번 참고]()

## 10. 텍스트 노드로 결합하기: `normalize()` 

- 형제 Text 노드들은 텍스트를 DOM에 프로그래밍적으로 추가한 경우에만 나타난다. **Element 노드를 포함하고 있지 않은 형제 Text 노드들을 단일 Text 노드로 결합하기위해** normalize() 메서드를 사용한다. 

```js
var pElementNode = document.querySelector('p')
var textNodeHi = document.createTextNode('Hi')
var textNodeCody = document.createTextNode('Cody')

pElementNode.appendChild(textNodeHi);
pElementNode.appendChild(textNodeCody);

document.querySelector('p').childNodes.length // 2
document.querySelector('p').normalize()
document.querySelector('p').childNodes.length // 1
```

## 11. 텍스트 노드 분할하기: `splitText()` 
- `replacementNode = textnode.splitText(offset)`
- Text 노드를 지정된 오프셋에서 두 노드로 분리한다. 두 노드는 sibling으로써 트리에 유지된다.

```js
var str = document.querySelector('p') // <p>Hey Yo!</p>
str.firstChild.splitText(4).data // Yo! 새로운 Text 노드 반환
str.firstChild.textContent // Hey DOM에 남아 있는 것

// <p>
// "Hey"
// "Yo"
//</p>
```

## 12. `nodeValue` vs `textContent`

- `nodeValue`는 `Text` 노드, `Comment` 노드, `characterData` 객체인 경우, 그 안의 **텍스트 값을 반환**한다. 만약 `element` 노드인 경우에는 `null`을 반환한다.

```js
document.querySelector('p').nodeValue // null
document.querySelector('p').childNodes[0].nodeValue // hi!
```

- `textContent`는 **모든 자식노드의 텍스트 노드를 결합하여 텍스트를 반환**한다.

```
element.텍스트노드.nodeValue = 텍스트
element.textContent = 텍스트
```

## 13. textContent을 이용해서 값을 수정

```js
var pElem = document.querySelector('p')
var pElemText = document.querySelector('p').textContent

pElem.textContent = '수정사항이 DOM에 반영된다.'
pElemText = '수정사항이 DOM에 반영되지 않는다.'
```
- `pElem`은 element 객체이기 때문에 `textContent` 메소드를 이용해서 값을 재할당했던 반면, `PElemText`는 `document.querySelector('p').textContent`의 반환값인 text 값만 갖고 있기 때문이다.