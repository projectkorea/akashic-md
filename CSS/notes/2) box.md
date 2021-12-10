# Box

## Box Model

<img src="https://user-images.githubusercontent.com/76730867/144774009-8488e16c-61a8-4416-bce8-a1271ae0fb3c.png" width="400px">

**구조**
-   content : width, height
-   padding: 안쪽 여백, content와 border 사이의 공간을 나타낸다.
-   border: 테두리를 나타낸다.
    -   `border: 1px(굵기) solid(스타일) #000(색상)` 순서는 무관하다.
    -   박스 모양을 원으로 만들고 싶은 경우: `border-radius: 50%`
-   margin: 바깥 여백, 요소와 요소 사이의 간격을 나타낼 때 사용한다.

**shorthand**

-   시계방향 순서로 사이즈를 정의한다. 
-   `top -> right -> bottom -> left`
-   `padding: 10px 20px (bottom)`
    - bottom에 대한 명시가 없으므로 `top,bottom: 10px`, `right, left: 20px`로 가져간다.
-   `padding: 10px 20px 30px (left)`
    - left에 대한 명시가 없으므로 right과 한짝을 이뤄 20px을 가져간다.
- <img src="https://user-images.githubusercontent.com/76730867/144776321-57b25f5a-6b25-4a83-a927-2a7168da03e7.png" width="300px">

## Box Sizing

-   `box-sizing: content-box` : width, height가 content기준으로 잡힌다.
-   `box-sizing: border-box` : **width, height = content + padding + border** 기준으로 잡힌다.
-   padding 값에 레이아웃이 망가지는 경우가 많아 boilerplate로 아래 코드를 많이 사용한다.

```css
* {
    box-sizing: border-box;
}
```


## Box Type

```css
selector {
    display: block || inline || inline-block || flex
}
```

-   Box type에 따라 Box Model이 달라지기 때문에 종류를 파악하는 것이 중요하다.
    -   1. block
    -   2. inline
    -   3. inline-blcok
    -   4. flex
    <img src='https://user-images.githubusercontent.com/76730867/144802489-32272aba-66b9-4422-b0eb-591de90d2c0f.png' width='200px'>

### 1) block

-   영역을 차지하는 특징이 있다.
-   공간을 차지하는 배치에 적합하다.
-   width 값
    - default: 부모 content-box의 100%
    - width 값을 별도로 선언한 경우, 남은 공간은 margin으로 자동으로 채운다. 
    - <img src="https://user-images.githubusercontent.com/76730867/144780045-25559ae8-6f8e-41bb-8e71-765239830900.PNG" width="500px">
    - 이를 이용해 `margin : 0 auto`로 가운데 배치를 한다.
    

-   height 값
    -   부모 height를 선언하지 않은 경우, 부모 height 값은 자식 요소의 height의 합이 된다.

-   `width`, `height`, `padding`, `border`, `margin` 값을 사용할 수 있다.

### 2) inline

-   컨텐츠를 옆으로 흐르게하는 **흐름**이 있다.
-   가로 배치에 사용된다.
-   다음 property들은 사용할 수 없다.

    -   `width`
    -   `height`
    -   `padding-top`
    -   `padding-bottom`
    -   `border-top`
    -   `border-bottom`
    -   `margin-top`
    -   `margin-bottom`

-   위와 같은 property는 inline 줄간격에서 흐르는 간격을 망치기 때문이다.
-   padding top을 할 때 영역이 생기기는 하지만, 영역으로써 의미가 없다. 왜냐하면 **영역을 차지하지 않고 덮고 있기만** 하기 때문이다.
-   `span`, `a`, `strong`은 `display : inline`이다.

### 3) inline-block

-   block과 inline의 특징을 취합했다.
-   inline처럼 가로로 흐르지만 block처럼 영역을 차지하는 특징도 갖고 있다.
