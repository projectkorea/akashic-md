요약
1. 컴포넌트에 스타일을 적용해 구현하는 방법을 학습했다.
2. styled components에 SCSS 문법을 사용하여 예제를 작성해, Themeprovider 기능에 대해 학습할 수 있었다.

# styled-component

## SCSS 문법도 사용할 수 있다.

#### 1. What is SCSS ?

![1](https://user-images.githubusercontent.com/76730867/154880871-35ea6ff9-3edd-458b-bb8a-7939c8550dab.PNG)
![2](https://user-images.githubusercontent.com/76730867/154880876-11d55b13-aa77-4745-8df1-de0ea2a88450.PNG)



#### 2. nesting 사용하기

```jsx
const FancyDiv = styled.div`
  width: 300px;
  height: 300px;
  text-align: center;
  position: relative;
  padding: 50px 0 0 0;
  font-size: 20px;
  div {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #0066ff63;
    div {
      width: 50px;
      height: 50px;
      background-color: #0066ff;
    }
  }
  background-color: ${(props) =>
    props.active ? 'rgb(134, 231, 180)' : 'rgb(80, 185, 255)'};
`;
```

#### 3. 변수 사용하기

- `$variable-name: variable-value;`
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
```
- 전역범위 때문에 styled-copmonent에서 사용실패

#### 4. ThemeProvider로 사용하자

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

## 시행착오

### 1.  `import styled from 'styled-component';`
- `import styled from 'styled-components';` s를 붙어야함

### 2. `vscode-styled-components`
- visual studio extention, css 문법 하이라이트 제공

