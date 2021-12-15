# Selector

- CSS는 1) 선택자와 2) 선언으로 구성되어 있다.
  - 선택자: 규칙을 적용할 **요소**를 나타낸다.
  - 선언: 적용될 **기능**을 나타낸다.

```css
selector {
    property : value;
}
```

### 1. 선택자의 종류

#### 1) Type Selector: `tagName` 

- `<h1>`와 같은 태그를 말한다.
- `,`를 활용하여 동시에 여러개 지정이 가능하다.
```css
h1, h2 {
    property : value;
}
```

#### 2) Class Selector: `.`

```css
.className {
    property : value;
}
```

-  class를 여러개 가진 HTML을 선언할 경우, **공백으로 구분**한다.
```html
<div class='box-0 box-1 box-2'></div>
```
- 클래스 2개 이상을 가진 요소에 CSS를 적용할 경우, **띄어쓰기 없이 붙여서** 선언한다.
    - `.box-0.box-1{}` : box-0과 box-1의 클래스네임을 갖고 있는 엘리먼트
    - `.box-0.box-2{}`: box-0과 box-2의 클래스네임을 갖고 있는 엘리먼트
    - `.box-1.box-2{}`: box-1과 box-2의 클래스네임을 갖고 있는 엘리먼트
    - `.box-0.box.-1.box-2{}`: : box-0, 1, 2 클래스네임을 갖고있는 엘리먼트

#### 3) ID Selector: `#`

- **예시) 특정 type, class, id를 가진 요소를 선택할 경우**

```html
<div class="box active" id="junha"></div>
```
```css
div.box.active#junha {
    property : value;
}
```

####  4) CSS Combinators: `>`, ` `, `+`, `~`

-   CSS combinators are explaining the **relationship between two selectors**.

##### (1) Child selector (자식 선택자): `>` 
```css
parent > child {
  property:value;
}
```

##### (2) Descendant Combinators(자손 선택자): ` `
-   아래 level에 있는 모든 엘리먼트 요소 선택을 한다.
```css
parent descendant {
  property:value;
}
```

##### (3) Sibling Combinators(형제 선택자): `+`, `~`
###### i) Adjecant Sibling selector: `+`
-  앞에서 지정한 요소의 **바로 다음에 위치하는 형제 요소** 한개만 선택한다.
```css
brother + sibling{
  property:value;
}
```
###### ii) General Sibling selector: `~`
- `brother ~ sbling `: brother과 **동일 level에 있는 모든 sbling**이 선택된다.
```html
<p>not be selected</p>
<img/>
<p>be selected</p>
<p>be selected</p>
```
```css
img ~ p {
  propery:value;
}
```

#### 5) Pseudo-class(가상 클래스): `:`

- 선택자 뒤에 `:`를 붙여 정의한다.
- HTML에 class 네임을 거듭 추가하지 않고 선택자를 삼을 수 있다는 장점이 있다.

##### (1) Structural Pseudo-classes

-   `element:fist-child`: element인데 첫번째 요소인 경우 선택
-   `element:last-child`: element인데 마지막 요소인 경우 선택
-   `element:nth-child(n)`
    -   element인데 n번째 요소인 경우 선택
    -   n could be 2n(짝수), 2n-1(홀수)
```css
li:nth-child(3){
    property : value;
}
```

##### (2) User Action Pseudo-classes

-   `element:hover`: 마우스를 올렸을 때 선택
-   `element:active`: 마우스를 눌렀을 때 선택
-   `element:focus`: 엘리먼트를 포커스했을 때 선택

```CSS
.btn:hover{
    property : value;
}
```

#### 6) 범용 선택자
- 문서에 있는 모든 요소에 대해 스타일을 적용한다.
```css
 * {
     property : value;
  }
```

## 2. 선택자 우선순위

#### 1) 항상 높은 우선순위의 선택자가 우선으로 적용된다.
```
3순위: type 선택자
2순위: class, pesudo-class 선택자
1순위: id 선택자
```
#### 2) Rule Breakers
- `id 선택자`보다 우선순위가 앞서지만, 왠만하면 권장하지 않는다.
##### (1) Inline Style
- `<p style=""></p>`
##### (2) `!important` 
   - `{color: red !important}`
   - **우선순위가 가장 높기** 때문에, 다른 곳에서 값을 바꿔도 오버라이딩하여 **해당 속성이 변경되지 않도록** 한다.