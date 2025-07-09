1. 반응형 웹은 작은 사이즈 모바일부터 만들어가기

2. 마진 값은 바텀과 탑중 하나를 골라 일관성있게 쓴다.
```css
 .landing-title {
  margin-bottom: 20px;
}
```

3. a 태그의 자식 요소가 글자라고도 할 수 있으므로 display flex의 정렬값이 먹는다.

```html
<a href="#" class="landing-link"> 민박 둘러보기 </a>
```

```css
.landing-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 52px;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  border: 2px solid oldlace;
}

```

4. 미디어쿼리

- 차이가 나는 값만 바꿔주기
- `bottom: auto;`: 바텀 값 효력 없애기 위함

