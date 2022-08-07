
## CSS vs SCSS 비교하기

## 1. SCSS란?

- `react-components`는 `SCSS` 문법도 지원한다

#### What is SCSS ?

![1](https://user-images.githubusercontent.com/76730867/154880871-35ea6ff9-3edd-458b-bb8a-7939c8550dab.PNG)
![2](https://user-images.githubusercontent.com/76730867/154880876-11d55b13-aa77-4745-8df1-de0ea2a88450.PNG)

### from CSS 코드
```css
.name.red {
color: red;
}
.name .blue {
color: blue;
}
.name .green {
color: green;
}
.name .child .yellow {
color: yellow;
}
.name + .name {
color: purple;
}
```

### to SCSS 코드
```scss
.name {
  &.red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .green {
    color: green;
  }
  .child {
    .yellow {
      color: yellow;
    }
  }
  + .name {
    color: purple;
  }
}
```
- SCSS에서는 선택자 중복 회피 가능하다
- SCSS variable 등 여러 추가 기능 가능하다.
- `+`, `&` 등 여러 선택자를 사용하여, 중첩 선택자 스타일링 가능하다.
