1. 글자 가운데

- `text-align: center;`를 통해 글자가 왼쪽으로 치우쳐져 있는 것을 가운데로 배치했다.

```css
.profile-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  text-align: center;
}
```

2. 전체 배치 가운데

- `flex`해주는 부모가 `height`값이 있어야 전체 기준에 대한 정렬이 가능하다.
- `100vh`로 설정해 화면 정가운데로 배치해보자.

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```
