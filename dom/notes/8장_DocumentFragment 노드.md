# 08. DocumentFragment 노드

## 1. DocumentFragment 객체

- DocumentFragment 노드를 생성해서 사용하면 라이브 DOM 트리 외부에 경량회된 문서 DOM을 만들 수 있다. DocumentFragment는 마치 라이브 DOM 트리처러 ㅁ동작하되, 메모리상에서만 존재하닌 빈 문서 템플릿으로 생각하면 된다. 자식 노드를 메모리상에서 손쉽게 조작한 후 라이브 DOM에추가하는것독 ㅏ능하디

## 2. createDocumentFragment()를 사용하여 DocumentFragment를 생성하기

```js
var docFrag = document.createDocumentFragment();

[1,2,3,4,5].forEach((el)=>{
    var li = document.createElement('li')
    li.textContent = el
    docFrag.appendChild(li) 
  }
)

docFrag.textContent //12345
```

- 메모리상에서 노드 구조를 만들고 이를 라이브 노드 구조에 삽입하면 매우 효율적이다.

## 3. DocumentFragment를 라이브 DOM에 추가하기

```js
var ulElm = document.querySelector('ul')
var docFrag = document.createDocumentFragment()

[1,2,3,4,5].forEach((el)=>{
    var li = document.createElement('li')
    li.textContent = el
    docFrag.appendChild(li) 
  }
)
ulElm.appendChild(docFrag)
document.body.innerHTML

// <ul>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
//   <li>1</li>
// <ul>

```
- 노드를 사입하는 메서드에 DocumentFragment를 인수로 전달하면, 자식 노드 구조 전체가 삽입되며 DocumentFragment노드 자체는 무시된다. 