# float

- `block`이 하지 못하는 **가로 배치**를 하기 위해 사용한다.
- `float : left | right`

### 1. float가 적용된 요소는...

#### 1) 접점이 사라진다.

- 부모 요소와 형제 요소와의 접점이 사라지게 된다.
<img src="https://user-images.githubusercontent.com/76730867/144777785-79d07824-8980-470f-88a7-b1eaa9c8d8b7.PNG" width="250px">

- 접점이 사라지므로, 부모의 height도 줄어들게 된다.
- 위로 붕 떠, 노란 요소를 덮게 된다.

#### 2) `display : block`으로 바뀐다.

- `inline`, `inline-block`, `block`  => `block`
- `width`, `padding`등의 높이에 관한 프로퍼티를 사용할 수 있게 된다.

#### 3) width는 content 만큼만
- `display : block`의 `width`는 부모의 content-box의 100%를 상속받지만, `float`된 요소는 컨텐츠 길이 만큼만 width가 정의된다. margin이 쭉 늘어나 영역을 차지하는 **길막하는 특징**도 사라지게 된다.
-  따라서 부모의 width 값이 여유가 있는 한, child 요소들이 가로로 배치할 수 있게 된다.
*  parent의 모든 child 요소가 float라면 그 parent의 height는 0이 되어 영역을 하나도 차지하지 않게 된다. 이 속성이 레이아웃을 파악하기 힘들게 한다.

#### 4) `inline`속성은 `float` 속성들을 파악할 수 있다. 

<img src="https://user-images.githubusercontent.com/76730867/144802110-1d2df964-12af-4273-8d0c-67c60c310d12.png" width="200px">

- float의 공간 차지를 인식하며, margin 값 등을 통해 공간을 차지할 수 있다.
- 이를 이용해 이미지와 텍스트 배치를 자유롭게 할 수 있다.


### 2. float를 고쳐서 사용하는 방법

#### 1. `overflow: hidden`
```css
.parent{
    overflow : hidden;
}
```
- 부모가 float된 자식을 인식할 수 있다.
- 이유
  1) `overflow` property에 `visible` 이외의 값을 넣으면 BFC(Block formatting context)를 생성한다.
  2) BFC는 자신이 포함하고 있는 float된 자식 요소들을 강제로 포함시킨다.
  3) 스타일에 아무 영향이 없는 `hidden` 값을 이용한다.
- `overflow`는 overflowing content를 다루기 위해 BFC를 생성하는 것이므로, float된 요소의 레이아웃을 고치기 위해선 그 목적에 맞게 설계된 `clear` 프로퍼티를 사용하는 것을 권장하고 있다.

#### 2. `clear: left || right || both`
- div안의 모든 요소가 float인 경우, width 값이 0이 되어 영역을 차지 하지 않기 때문에 `clear`프로퍼티를 이용해 공간을 인식한다.
```css
.parent::after {
    content: '';
    clear: left;
    display:block;
}
```
- `clear:left` : `float:left`된 요소를 인지하는 능력이 생긴다.

- 자리를 차지하는 block을 만들기 위해 의미 없는 `div`를 만들고 싶지 않다.
- **pesudo-element**
  - CSS로 페이크 요소를 만들어 clear 프로퍼티를 만든다.
  - `selector::before`, `selector::after`


---
### reference
1) https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context