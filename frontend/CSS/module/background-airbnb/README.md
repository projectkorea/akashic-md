1. `img` vs `div{ background-image:url('') }`

- 유저들이 올린 각기 다른 사이즈의 규격을 맞추려면 `img`태그의 사이즈 조절은 빈 공간이 생기지만, `background-size:cover`을 이용하면 알맞게 사이즈를 채울 수 있다.


2. 가상요소가 눈에 보이기 위한 필수 요소

```css
.property-rate::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
}
```
- `content:''`로 빈 문자열이라도 넣어준다.
-  가상 선택자는 `display:inline`이 default값으로 들어가기 때문에 `display:block | inline-block`으로 넣고, `width`와 `height`을 넣어준다.

3. `sr-only` css 프로퍼티

```css
.sr-only{
position:absolute
z-index:-100
width:1
height:1 
overflow:hidden
opacity:0
}
```
- `position:absoulte`: 부모 요소의 권한에서 벗어난다.
- `width:1`: `width`, `height` 둘 중 하나라도 0 이라면 sr이 읽어주지 않기 때문이다.
- `display:none`: sr도 읽지 않으므로 적절하지 않다.

4. default 값이니까 항상 빼줘야 할 것

```css
.button {
  background-repeat: no-repeat;
  border:none
}
```

5. default CSS로 넣어줄 것을 명심하자

```css
* {
  box-sizing: border-box;
  margin: 0;
}
```

6. 가상 선택자

```css
.class-name::after{

}
```
- 가상요소는 기본적으로 `display:inline`
- `alt` + `0183`(숫자키패드)로 가운데 점을 표시할 수 있다.


7. url()함수

- `url(./a.jpg)`, `url('./a.jpg')` 둘 다 가능하다.

8. `position:realitve` + `top:2px`

- 다른 요소에 영향을 끼치지 않고 위치 조정할 때 쓰인다.

9. `·` 사이에 약간의 공백이 생기는 이슈

- `span`으로 연속된 배치를 하면 사이에 공백이 생긴다. 
-  이는 부모요소의 `font-size:0`으로 설정하여 해결된다.
  
```css
span {
  background-color: tomato;
  font-size: 16px;
}

dd {
  font-size: 0px;
}
```

10.  선택자
```css
.property-detail div:first-child {
  margin-bottom: 20px;
}
```
-  property-detail에 있는 div 중 첫번째 요소만 선택한다.


11. `flex-grow:1`

- 좌우로 쫙 늘어나 남는 영역을 차지한다.