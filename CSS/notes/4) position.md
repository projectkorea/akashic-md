# Position

1) **종류**: `position: *static | relative | absolute | fixed | sticky`
2) **옮기기**: `top | left | bottom | right : 0px`, `z-index : 1`

### 1. `position` 종류에 따른 기준점

<img src='https://user-images.githubusercontent.com/76730867/144812056-d5f0d3e4-67c6-4dde-9c6f-bfd71c5dddad.png' width='500px'>

- `position:static`을 제외한 모든 속성은 **붕뜬다**: 옮기기 속성(top, left)을 적용할 수 있다.

1) `static`
   - 붕뜨지 않는다. = 옮기지 못한다.

2) `relative`: **붕뜸**
   - 영역: **처음에 있던 자리**를 그대로 차지한다. ⭐
   - 기준점: **처음에 있던 자리**를 기준잡고 움직인다.

3) `absolute`
     - 영역: `display:block`으로 바뀌긴하지만, **영역 차지를 못한다.** 
       - ⭐별도로 `widht`,`height`값을 설정하거나, `relative`안에 들어가 영역을 확보해야한다.
     - 기준점: 부모 요소가 `position: static`이 아닌 경우, **부모 요소를 기준점으로 삼는다.** 부모 요소가 `position: static`인 경우, 그 다음 부모 요소의 `position`을 확인한다. 조상 `position`이 따로 정의되어 있지 않으면, **화면(0,0)을 기준**으로 삼는다.
     - **relative in absolute 패턴**: 보통 기준을 잡는 부모 요소는 다른 레이아웃에 영향을 끼치지 않는 `relative`로 설정한다. 
4) `fixed`
   - 기준이 항상 `viewport size`인 점을 제외하면, `abosulte`와 동일하다.
   - 부모의 속성에 상관없이 항상 화면에서 절대적인 위치가 된다. 스크롤시에도 항상 그자리이다. Navigation을 구현할 때 많이 사용한다. 


### 2. 옮기기

#### 1) `top, left, bottm, right`

- x축, y축 중 하나를 각각 기준 잡는다.

```css
selector {
    top : 0px;
    left : 0px;

    /* or */

    top : 0px;
    right : 0px;

    /* or */

    bottom : 0px;
    left : 0px;

    /* or */

    bottom : 0px;
    right : 0px;
}
```

#### 2) `z-index`

- `position : static`을 제외한 값에서 사용할 수 있다.
-  붕 뜨기 때문에 `앞으로 보내기`, `뒤로 보내기`와 같은 기능을 이용할 수 있다.

```css
selector {
    z-index : 1;
}
```
