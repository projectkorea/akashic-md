# Selector

- CSS는 1) 선택자와 2) 선언으로 구성되어 있다.
  - 선택자: 규칙을 적용할 **요소**를 나타낸다.
  - 선언: 적용될 **기능**을 나타낸다.

```css
selector {
    property : value;
}
```


## 선택자의 종류

### 1) Type Selector

```css
h1, h2 {
    property : value;
}
```

- `h1{}`: tag 이름을 선택자로 삼는다.
- `,`를 활용하여 동시에 여러개 지정이 가능하다.


### 2) Class Selector


-   `.className{}`: `dot`을 붙여 class 이름을 선택자로 삼는다.
-   class를 여러개 선언할 경우 
    - **공백으로 구분**한다.
    - `<div class='box-0 box-1 box-2'></div>`
- 특정 클래스 2개 이상을 가진 요소에 적용할 경우
  -  **`.classNAme`을 붙여서** 선택자로 삼는다.
    -   `.box-0.box-1{}` : box-0과 box-1의 클래스네임을 갖고 있는 엘리먼트
    -   `.box-0.box-2{}`: box-0과 box-2의 클래스네임을 갖고 있는 엘리먼트
    -   `.box-1.box-2{}`: box-1과 box-2의 클래스네임을 갖고 있는 엘리먼트
    -   `.box-0.box.-1.box-2{}`: : box-0, 1, 2 클래스네임을 갖고있는 엘리먼트를 선택

### 3) ID Selector

-   `#idName`: id 이름을 선택자로 삼는다.
-   특정 태그, 클래스네임, ID를 만족하는 선택자는 아래와 같다.

```html
<div class="box active" id="junha">1</div>
```

```css
div.box.active#junha {
    property : value;
}
```

###  4) CSS Combinators

-   CSS combinators are explaining the **relationship between two selectors**.

-   1. Child selector (자식 선택자)
    - `>`를 사이에 붙여 정의한다.
    -   `parent > child {} `

-   2. Descendant Combinators(자손 선택자)
    -   아래 level에 있는 모든 엘리먼트 요소 선택
    - `space`를 사이에 붙여 정의한다.
    -   `parent descendant {}`

-   3. Sibling Combinators(형제 선택자)

    -   Adjecant Sibling selector (+)
        -   `brother + sbling `: brother과 동일 level에 있는 엘리먼트 요소 **한 개** 선택
    -   General Sibling selector (~)
        -   `brother ~ sbling `: brother과 동일 level에 있는 **모든 엘리먼트** 요소 선택

### 5) Pseudo-class(가상 클래스)

- 선택자 뒤에 `:`를 붙여 정의한다.

#### (1) Structural Pseudo-classes

-   `element:fist-child`: element인데 첫번째 요소인 경우 선택
-   `element:last-child`: element인데 마지막 요소인 경우 선택

    -   className에 직접 first, last를 쓰지 않아도 되는 장점이 있다.

-   `element:nth-child(n)`
    -   element인데 n번째 요소인 경우 선택
    -   n could be 2n(짝수), 2n-1(홀수)

```css
li:nth-child(3){
    property : value;
}
```

#### (2) User Action Pseudo-classes

-   `element:hover`: 마우스를 올렸을 때 선택
-   `element:active`: 마우스를 눌렀을 때 선택
-   `element:focus`: 엘리먼트를 포커스했을 때 선택

```CSS
.btn:hover{
    property : value;
}
```

## 선택자 우선순위

-   항상 높은 우선순위의 선택자가 우선으로 적용된다.
    -   3순위: type 선택자
    -   2순위: class, pesudo-class 선택자
    -   1순위: id 선택자
-   Rule Breakers
    -    `id 선택자`보다 우선순위가 앞선다.   
    -   왠만하면 사용하지 않는 것을 권장한다.
         1) Inline Style
             -    `<p style=""></p>`
        1) `!important` 
           -   `{color: red !important}`
           -   다른 곳에서 값을 바꿔도 **우선순위가 가장 높기 때문에** 오버라이딩 해버려 **해당 속성이 변경되지 않도록** 한다.
    
