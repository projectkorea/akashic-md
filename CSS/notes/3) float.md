# float

- `block`이 하지 못하는 **가로 배치**를 하기 위해 사용한다.
- `float : left | right | center`

### 1. float가 적용된 요소는...

#### 1) 접점이 사라진다.

##### (1) `float`된 빨간 요소는 위로 붕 뜬다.
- 부모 요소와 형제 요소와의 접점이 사라져, 노란 요소를 덮게 된다.
<img src="https://user-images.githubusercontent.com/76730867/144777785-79d07824-8980-470f-88a7-b1eaa9c8d8b7.PNG" width="250px">

##### (2) height 값이 0이 된다.
- `float`된 요소는 부모가 인식하지 못하기 때문에 **부모의 height도 줄어들게 된다.**
- 모든 child 요소가 `float`라면 부모 `height` 또한 0이 되어 영역을 차지하지 않게 된다. 이 속성이 레이아웃을 파악하기 힘들게 한다.

#### 2) `display : block`으로 바뀐다.

##### (1) `width`, `padding`등 높이에 관한 프로퍼티를 사용할 수 있다.
##### (2) width는 content 만큼만 늘어난다.
- `display:block`의 `width`는 부모의 content-box의 100%를 상속받지만, ❗ `float`된 요소는 컨텐츠 길이 만큼만 width가 정의되어 margin이 늘어나 영역을 차지하는 **길막하는 특징**이 사라지게 된다. 이런 특징 덕에 부모의 width 값이 여유가 있는 한, child 요소를 가로로 배치할 수 있는 것이다.


#### 3) `inline` 요소는 `float`요소를 존중한다.

<img src="https://user-images.githubusercontent.com/76730867/144802110-1d2df964-12af-4273-8d0c-67c60c310d12.png" width="200px">

- float의 공간 차지를 인식하며, margin 값 등을 통해 공간을 차지할 수 있다.
- 이를 이용해 이미지와 텍스트 배치(인라인 태그)를 자유롭게 할 수 있다.


### 2. float를 고쳐서 사용하는 방법

#### 1) `overflow: hidden`
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

#### 2) clearfix
- `clear: left | right | both`
- div안의 모든 요소가 `float`인 경우, width 값이 0이 되어 영역을 차지 하지 않기 때문에 `clear`프로퍼티를 이용해 공간을 인식한다.
```css
.parent::after {
    content: '';
    display:block;
    clear: left;
}
```
- `clear:left` : `float:left`된 요소를 인지하는 능력이 생긴다.
- **pesudo-element**
  - 자리를 차지하는 block을 만들기 위해, 의미 없는 `div`를 만들고 싶지 않기 때문에 **CSS로 페이크 요소** `::after`를 만들어 `clear` 프로퍼티를 만든다.


---
### reference
1) https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context