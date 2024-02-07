1. position absolute 가운데 정렬 transform

```css
 #next {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
```

2. 이미지 크기 조절

```css
.card-carousel img {
  display: block;
  width: 100%;
  /* 부모 width를 따름 */
  height: auto;
  /* 높이는 비율을 따름 */
}

```