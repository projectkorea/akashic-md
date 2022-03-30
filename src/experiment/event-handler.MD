# 1장 이벤트

## 1. JSX 이벤트 핸들러

- **이벤트 핸들러**는 `event` 객체를 **매개변수**로 받아서 사용해야한다.

```jsx
// ❌
<input onChange ={
  ()=>{
    setInputValue(event.target.value)
  }}>
</input>
```

```jsx
// ✅
onChange ={
  (event)=>{
    setInputValue(event.target.value)
  }}
```


## 2. `prop`으로 전달한 함수와 햇갈리지 말자

```jsx
// ❌
<InsertForm onInsert={(event) => console.log(event.target.value)}/>
```
- 이벤트 핸들러와 혼동하지 말자.
- `onInsert`는 함수를 전달하는 `prop`이다.


## 3. 많이 쓰는 이벤트 핸들러

- `onClick`: 클릭했을 때
- `onChange`: input의 텍스트를 변경, 파일 선택 등의 변화가 생길 때
- `onKeyDown`, `onKeyUp`, `onKeyPress`: 키보드 입력이 일어났을 때
- `onDoubleClick`: 더블 클릭했을 때
- `onFocus`: Element에 `Focus` 되었을 때
- `onBlur`: Element가 `Focus`를 잃었을 때
- `onSubmit`: `Form` Element에서 `Submit` 했을 때

### 커스텀 이벤트 명명법

- `on + 동사`,  `on + 명사 + 동사` 형태로 작성한다.
- `onClick`, `onButtonClick`, `onInputChange`
- 핸들링 함수의 경우, `handle + 동사`, `“handle” + 명사 + 동사` 의 형태로 작성하며, “handle” 대신 이벤트명과 동일한 `on`을 앞에 붙여도 무방하다.