# Grid System

- 디자인의 의도를 파악하여 코드를 구현하는 것이 핵심이다.

## 그리드 시스템의 필수 3개념

1. container: 그리드 시스템이 적용된느 범위
2. column: 12칸은 매직 넘버로 많이 사용한다.
3. gutter: 간격 담당 영역

<img src="https://user-images.githubusercontent.com/76730867/147864330-10a5146f-c361-4e09-8105-594ccf6996c4.png" width="400px">

## Bootstrap

-  그리드 시스템을 반응형으로 맞춰준 framework

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

- 12칸의 그리드 시스템으로 잡히며, `container > row > col-n` 규칙을 맞춰야한다.

```html
<div class="container">
      <div class="row">
        <div class="col-1">
      </div>
      <div class="row">
        <div class="col-4">
      </div>
      <div class="row">
        <div class="col-12">
      </div>
</div>
```
- 반응형으로도 작성할 수 있다.


```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
```

- 540px
- 720px
- 960px
- 1140px