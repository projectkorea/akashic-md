# `JSX` vs `HTML`

## 1. 태그에 속성(Attribute) 설정

```jsx
// camelCase로 작성
// data-type, aria-label는 예외
<div  className = "header"        // class=""
      style = {{display:"flex"}} // style="color:blue;"
      key = "1"                  // key 없음 
      data-id = "3">
</div>

<input type="checkbox" value="" defaultValue="" checked="false" defaultChecked="" checked={isChecked} />
// value, checked는 현재값, default~는 초기값이다.
// `checked` 값을 `false`같이 고정된 값을 주면, checkbox를 클릭해도 값이 변하지 않음

<label for="name">Name:</label>
<label htmlFor="name">Name:</label> // JavaScript의 예약어 for와 충돌을 피하기 위함
```

## 2. 자주하는 실수

```js
//Component <-> html 혼동
<button onUpdate={onUpdate}/>           // ❌
<Component className ="doesn't work" /> // ❌ 

// 최상위 컴포넌트로 감싸야 한다.
return { listView }            // ❌
return { <div>안녕</div> }      // ❌
return <div>{listView}</div>   // ✅
return <>                      // ✅
    {<li></li>}
    {[<textarea></textarea>, <h1></h1>, <button></button>]}
  </>

// 숫자를 전달할 때는 {}로 감싸자
<Component num=2/>     // ❌ error
<Component num="2"/>   // ❌ "2" is string
<Component num={2}/>   // ✅

// {} 로 감싸면 Javascript다.
// 공백은 `&nbsp` 뿐만아니라 **템플릿 리터럴** 방법으로도 구현할 수 있다.
<div>{&nbsp `${money}`}</div> // ❌
<div>{` ${money}`}</div>      // ✅
```
