# flex box

-   `float`, `position`을 사용하지 않아도 쉽게 정렬할 수 있다.
- 구성 요소: 
  - `container`: item들의 배치를 책임지는 속성값을 가진다.
  - `item`: 

<img src="https://user-images.githubusercontent.com/76730867/146141031-daedb4ce-5146-4733-8a6b-8e8846a8ae56.png" width="600px">

### 1. flex box 이용 순서

#### 1) flex box 선언
  - `display : flex | inline-flex`
  - 정렬하고 싶은 요소를 감싸고 있는 **부모**에게 선언 한다.

#### 2) 정렬 방향 설정
   - `flex-direction: *row, column, row-reverse, column-reverse`

#### 3) 여러 줄 정렬 : 한 줄 정렬
-   `flex-wrap : *wrap | nowrap`
-   `wrap`: 모두 정렬할 수 없는 공간이면 **여러 줄**로 만든다.
-   `nowrap`: 자식의 사이즈를 줄여서라도 **한 줄**로 정렬한다.
    - 강제로 사이즈를 줄이기 때문에 한 줄로 만들어야 할 때 유용하다.
    - 여러 줄로 형성되어 전체 영역을 감싸는 듯한 `wrap`과 달리, 한 줄로 만들기 때문에 **no**wrap이라고 부르는 듯하다.

#### 4) 플렉스 박스 사용

- `justify-content`: main-axis를 가리키며 `flex-direction`과 같은 축이다.
- `align-items | align-content`: cross-axis를 가리키며 main-axis의 반대 축이다.

```css
container {
  flex-direction:column;
  justify-content:flex-start;
}
```
❤ 예시한번 써보자
![2](https://user-images.githubusercontent.com/76730867/146141036-804d5dfa-a5d1-4ef9-bc64-0315dd802d08.png)

##### `align-items` vs `align-content`

-   `flexwrap: wrap`인 경우에만 차이가 있다.
-   `align-items`: **한 축**에 배치되어 있는 각 item들의 배치에 관한 속성
-   `align-content`: **cross 축들**의 배치에 관한 속성
-   팁: 선 align-items 후 align-content를 통해 화면을 보고 사용


### 2. container 속성
<img src="https://user-images.githubusercontent.com/76730867/146140705-6b8a58f5-4fa5-4601-a873-a065ed640827.png" width=600px>

### 3. item 속성
<img src="https://user-images.githubusercontent.com/76730867/146140813-d78b9b92-6da4-463f-9605-0bd684809969.png" width=600px>


- **order**: 마크업 된 순서와 무관하게 스타일만으로도 순서를 조정할 수도 있다.

```css
.red {
    order: 1;
}
.red {
    order: 3;
}
.red {
    order: 2;
}
```



-   space-between: 요소의 사이의 공백이 같음
-   space-around: 모든 요소의 양 옆이 공백이 각가 나누어 가짐

container속성
1) flex-wrap : norwrap(Default) wrap: 꽉차면 다음 줄로 찍힌다. wrap-reverse으로 순서를 거꾸로 나타낼수도 있다.
2) flex-flow: flex-direaction과 flex-wrap을 한 번에 찍을 수 있다.
3) justify content: 중심축에서 배치방법
4) align items: 서브축에서 배치방법
5) flex start: 왼쪽부터 순서대로 배치

container width를 고정했을 때 
display를 flex로 했는데, width와 height를 고정시키면

1) 크기가 화면에 따라 유동적으로 변하지 않는다.

2) position이 고정이 되버린다.