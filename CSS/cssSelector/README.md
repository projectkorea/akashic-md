# Selector

## Type Selector

-   tag 이름을 선택자로 삼는다.

## Class Selector

-   class 이름을 선택자로 삼는다.
-   dot을 붙여 엘리멘트를 선택한다: .className
-   `<div class='box-0 box-1 box-2'></div>`
    -   css 선택자 경우의 수: 각 경우의 수는 독립적이다.
        -   .box-0
        -   .box-1
        -   .box-2
        -   .box-0.box-1 : box-0과 box-1의 클래스네임을 갖고 있는 엘리먼트를 선택함
        -   .box-0.box-2
        -   .box-1.box-2
        -   .box-0.box.-1.box-2: : box-0, 1, 2 모두의 클래스네임을 갖고있는 엘리먼트를 선택함

## ID Selector

-   id이름을 선택자로 삼는다.
-   Hash를 붙여 엘리멘트를 선택한다: #id

```html
<div class="box" id="junha"></div>
```

```css
#junha.box {
}
```

```html
<div class="box active" id="junha">1</div>
```

```css
div.box.active {
}
```

## CSS Combinators

-   CSS combinators are explaining the relationship between two selectors.

-   1. Child selector (자식 선택자, >)

    -   `parent > child `

-   2. Descendant Combinators(자손 선택자, space)

    -   `parent descendant`
    -   아래 level에 있는 모든 엘리먼트 요소 선택

-   3. Sibling Combinators(형제 선택자)

-   Adjecant Sibling selector (+)
    -   `parent + sbling `: parent와 동일 level에 있는 엘리먼트 요소 한 개 선택
-   General Sibling selector (~)
    -   `parent ~ sbling `: parent와 동일 level에 있는 모든 엘리먼트 요소 선택

## Structural Pseudo-classes

-   `element:fist-child`: element인데 첫번째 요소인 경우 선택
-   `element:last-child`: element인데 마지막 요소인 경우 선택

    -   className에 직접 first, last를 쓰지 않아도 되는 장점이 있다.

-   `element:nth-child(n)`
    -   element인데 n번째 요소인 경우 선택
    -   n could be 2n(짝수), 2n-1(홀수)

## User Action Pseudo-classes

-   `element:hover`: 마우스를 올렸을 때 선택
-   `element:active`: 마우스를 눌렀을 때 선택
-   `element:focus`: 엘리먼트를 포커스했을 때 선택

## 선택자 우선순위

-   3순위: type 선택자
-   2순위: class, pesudo-class 선택자
-   1순위: id 선택자
-   항상 높은 우선순위의 선택자가 우선으로 적용된다.

-   Rule Breakers: 왠만하면 사용하지 않는다.
    -   Inline Style : html안에 style을 넣는 것. ID 선택자보다 우선순위가 앞선다. `<p style=""></p>`
    -   !important : 모든 우선순위 중 가장 첫 번째임`*{color: red !important}`
