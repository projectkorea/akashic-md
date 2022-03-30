# styled-components

- `styled-components`로 랜더링된 엘리먼트는 `className`이 random string으로 생성되기 때문에 선택자 이름이 겹치지 않는다.


### 1. 기본 사용

```css
const FancyDiv = styled.div`
  width: 300px;
  height: 300px;
`;
```

```css
const FancyButton = styled.button`
  background-color: red;
  padding: 10px;
  :hover{
    background-color: yellow;
  }
  ::after{
    content:'';
    display:block;
    width:10px;
    height:10px;
    background-color: blue;
  }
`;
```
- `styled.`뒤에 스타일을 입힐 태그 이름을 적어 사용한다.
- 가상선택자, hover 등을 사용할 수 있다.


### 2. `props` 사용하기

```scss
const FancyDiv = styled.div`
  color: ${(props) => props.isActive ? 'red' : 'gray'};
`
```

```jsx
return(
  <FancyDiv isActice={true}/>
)
```
- CSS `value`를 `props`를 인자로 받는 콜백함수의 **리턴 값**으로 작성한다.


### 3. 스타일 컴포넌트 확장하기

- 기존에 존재하는 `styled component`를 바탕으로 디자인을 확장할 수 있다.
- 대신 `styled.tagName`이 아닌, `styled(확장할 컴포넌트명)`을 사용한다.

```css
const PrimaryButton = styled(Button)`
  background-color: #007bff;
  :hover {
    background-color: #0069d9;
  }
`
```

---

```css
const SCSSStyledDiv = styled.div`
  background-color: orange;
  div {
    background-color: red;
  }
  .purple {
    background-color: purple;
  }
`
```

```jsx
function Test() {
  return (
    <SCSSStyledDiv>
    orange
      <div>red</div>
      <div className={'purple'}>purple</div>
    </SCSSStyledDiv>
  );
}
```

### 2. `styled-components`에서 SCSS 변수 개념을 사용해보자

- SCSS개념: `$variable-name: variable-value;`
```js
const FancyButton = styled.button`
  $blue-sky: #0066ff
  width: 100px;
  height: 50px;
  border: 0px none;
  background-color: $blue-sky
`;
```

```scss
$blue-sky: #0066ff

button{
  background-color: $blue-sky
} 
???
```
- 전역범위 때문에 `styled-copmonents`에서 사용하지 못했다.

### 3. ThemeProvider로 사용하자

```js
import { ThemeProvider } from 'styled-components';
```

```jsx
const theme = {
  colors: {
    '--blue-sky-light': ' rgb(80, 185, 255)',
    '--blue-sky-basic': '#0066ff',
    '--blue-sky-dark': '#003a92',
  },
};
```
```js
function App() {
  return (
    <ThemeProvider theme={theme}>
      ...Components
    </ThemeProvider>
  );
}
```

```jsx
const FancyDiv = styled.div`
  background-color: ${(props) => props.theme.colors['--blue-sky-light']};
`
```


---
### 주의! JSX에서 엘리먼트의 style 속성은 `Object`로 적는다.

```js
<div style={
  {
    backgroundColor:"red",
    paddingLeft: 20,
    display: "flex",
    justifyContent: "space-between",
    border: "none",
    color: "#000000",
    cursor: "pointer",
    padding : "8px, 16px"
    }}>
```

- `JSX`에서 `CSS`의 `key`는 `camelCase`를 원칙으로 적는다.
- `value`는 `string`을 원칙으로 하되, `number`가 들어갈 수도 있다.
---

## 시행착오

### 1.  `import styled from 'styled-component';`
- `import styled from 'styled-components';` s를 붙어야함

### 2. `vscode-styled-components`
- visual studio extention, css 문법 하이라이트 제공
