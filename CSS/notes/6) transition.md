# transition

- 요소의 속성값을 바꿀 때 **자연스럽게 바뀌게** 전환할 때 사용한다.
- `transition: property(all) duration [timing-function] [delay]`

### transition 사용 예시

```css
.box{
  font-size:18px;
  background-color:orange;
  transition: font-size 1000ms ease-out,
   background-color 2000ms cubic-bezier(0.08, 0.57, 0.97, -0.72) 1000ms;
}

.box.active{
  font-size:16px;
  background-color:red;
}
```

### timing-function
1) ease-in
2) ease-out
3) ease-in-out
4) cubic-bezier(): 함수

# animation

## animation vs transition

-   transition: 엘리먼트 **css 속성의 값이 전환할 때 부드럽게 바뀌게** 할 수 있게 사용한다.
-   animation: **그냥 에니메이션을 주고 싶을 때**, 좀 더 자유도가 높게 사용한다.

### `animation-property`
- animation의 property는 다양하기 때문에 `animation-property`를 사용하여 개별 선언한다.

#### 1. animation-name 만들기

- keyframes을 이용하여 만든다.

```css
@keyframes name{
from{
  /* Rules */
  }
    to{
  /* Rules */
  }
}
```
```css
@keyframes name{
    0%{
  /* Rules */
  }
    20%{
  /* Rules */
  }
    100%{
  /* Rules */
  }
}
```

#### 2. animation-duration
- same with `trasition-duration`

#### 3. animation-delay
- same with `trasition-delay`

#### 4. animation-timing-function
- same with `trasition-timing-funtion`

#### 5. animation-iteration-count
- `animation-iteration-count : countNumber | infinite`

#### 6. animation-dirtection
- 교대로 왔다갔다 하기
- `animation-direction : alternate | reverse`

### 사용 예시
```css
.box{
  width:50px;
  height:50px;
  position: relative;
  background-color:#0066ff;
  animation-name: move-box;
  animation-duration:1000ms;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}

@keyframes move-box{
  from {
    top: 0;
    background-color:#0066ff;
  }
  to{
    top:200px;
    background-color:#ff4949;
  }
}
```