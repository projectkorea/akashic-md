# Position

1) 기준 잡기: `position: *static || relative || absolute || fixed || sticky`
2) 옮기기: `top || left || bottom || right : 0px`

## position의 종류 & 기준점

<img src='https://user-images.githubusercontent.com/76730867/144812056-d5f0d3e4-67c6-4dde-9c6f-bfd71c5dddad.png' width='500px'>

1) `static`
2) `relative`
   - 본래 있던 자리를 기준점으로 삼는다.
   -   `display: float` 처럼 붕뜬 상태로 옮겨다니지만, 영역은 처음 자리 그대로를 차지하고 있다.
3) `absolute`
     -  부모 요소가 `position: static`이 아닌 경우, **부모 요소의 모서리 `top, bottom, right left`를 기준점으로 삼는다.**
     -  부모 요소가 `position: static`인 경우, 그 다음 부모 요소의 `position`을 확인한다. 
     -  `position`이 따로 정의되어 있지 않으면, 화면(0,0)을 기준으로 삼는다.
     -  기준점을 잡는 부모 요소는 보통 다른 레이아웃에 영향을 끼치지 않는 `relative`로 설정한다.
   -  붕뜨게 되며, `display:block`으로 바뀌지만, 영역 차지를 못한다
4) `fixed`
-   `abosulte`와 동일하다.
-   한 가지 차이점은 기준점이 `viewport size`로 명확히 정해진다.
- 부모의 속성에 상관없이 항상 화면에서 절대적인 위치가 된다. 스크롤시에도 항상 그자리이다.
- Navigation을 구현할 때 fixed속성을 많이 사용한다. 


### 옮기기

#### 1) `top, left, bottm, right`

- 기준은 x축에서 하나, y축에서 하나를 잡는 것이 효율적이다.

```css
selector {
    top : 0px;
    left : 0px;
}
```
```css
selector {
    top : 0px;
    right : 0px;
}
```
```css
selector {
    bottom : 0px;
    left : 0px;
}
```
```css
selector {
    bottom : 0px;
    right : 0px;
}
```

#### 2) `z-index`

- `position : static`을 제외한 값은 위로 붕 뜨기 때문에 `앞으로 보내기`, `뒤로 보내기`와 같은 기능을 수행한다.

```css
selector {
    z-index : 1;
}
```
