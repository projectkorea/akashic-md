1. FORM과 관련한 태그는 `body{font-family}`를 해도 적용되지 않으므로, 따로 선언한다.

```CSS
button,
input,
textarea{
  font-family:''
}
```

2. width값을 0으로 적어줄 때 0px 적지 말고 0 적는게 정석이다.

3. 가상요소를 활용하여 트랜지션, 에니메이션을 활용하자.

4. hover시 가상 요소를 움직이게 하려면 가상요소를 나중에 쓰자.

```css
.class-name:hover::after{

}
```
- class-name이 hover 되었을 때 가상요소는~ 이라는 뜻이다.

5. transition 속성을 어디에 넣어야 할까?

1) 입히는 속성
```css
.line-button:hover::after {
  width: 100%;
  transition: width 250ms ease-out;
}
```
- hover시 transition이 작동하기 때문에 마우스를 땠을 때 트랜지션이 먹지 않는다.

2) 입혀지는 속성
```css
.line-button::after {
  width:0;
  transition: width 250ms ease-out;
}
```
- 가상요소 자체에 transition이 작동하기 때문에 hover in and out 시에 트랜지션 모두 먹기 때문에 좀 더 자연스럽다.