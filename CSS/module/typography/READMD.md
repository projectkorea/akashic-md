1. font-family 속성은 body에 넣자

1. 적용된 폰트 확인
- computed에 font-family보지 말고 맨 밑에 rendered를 볼 것

2. 일관된 네이밍

- `fs-` 접두사를 붙여 폰트에 관한 이름을 일관되게 설정한다.
- `text-dark`, `text-light`: 글씨에 관한 속성을 설정한다.

3. 폰트 스타일링 VS 줄 띄우기 스타일링

- 폰트 스타일링은 `typography.css`에 `fs-`, `text-` 글씨색상, 크기, 줄간격에 관한 속성을 넣고
- 줄 띄우기 스타일링은 `style.css`에 `margin-bottom`을 통해 태그간 간격을 조절한다.