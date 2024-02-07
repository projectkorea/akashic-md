## 12월 14일

1) `p`태그 : `dislay:block`
2) `<input value="단독태그인 경우 여기에 이름을 쓴다."/>`
3) `position: absoulte;` 인라인 태그로 쓰니까, 오타 발견이 어려웠다.
4) `fieldset` 태그 쓰니까 default 속성값 없애느라 바쁘다.

5) 상위 태그 `fieldset`, `form`이 두 개 있으니까 어디에다 적용해야할지 햇갈렸다.
6) `form` 태그 안에 넣어야하는 이유가 뭐였지?
7) border radius 하면 배경이 살짝 보이는 것: border: hidden; overflow: hidden;
8) `form { width: 500px;}` width 값을 넣으면 사이즈 조절이 안되는 이유
9)  `label {display: inline-block;`: 인라인은 크기 조절이 안됨.
10) 인풋값 입력할 때 창이 흔들림. 글자크기를 조절해보자?
11) `.submit {   <!-- width: 330px; -->    margin: 0 auto;    }`
            이게 왜 마진오토 했는데 가운대배치 안되지? display block은 영역을 다 먹는 특징이 있었음
12) width 값을 넣고 마진 0 auto해야지
```css
div {
    margin: 0 auto;
    <!-- width: 900px; -->
}
```
13) p태그 세로축을 가운데로 정렬하는 방법?
  - 1) absolute in relative
  - 2) height값과 line-height값을 동일시 하면 가운데 배치가 가능함
  - line-height: 300px;이게 백그라운드 까지 먹으니까 padding값과 border-box:content 를 이용해서 가운데 배치했음. 이건 가운데 배치라고 하기엔 애매한데 난 또 뭐가 있다고 ㅡㅡ;

13) 확대 축소 하려면 hover아닌 엘레멘트에 trasition을 넣을 것
```css
img {
    position: absolute;
    top: 200px;
    width: 200px;
    transition: all 1000ms;
}
img:hover {
    transform: scale(1.5);
    transition: ease-in 1000ms;
}
```