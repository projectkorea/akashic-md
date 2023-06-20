import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body {
  font-family: sans-serif;
  letter-spacing: -0.01em;
  background-color: #F1F5FF ;
}

/* Reset */
p {
  font-size: 16px;
  line-height: 1.5;
}

ul,
ol,
li,
dl,
dt,
dd {
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button:focus,
button:active,
input:focus,
input:active {
  outline: none;
  box-shadow: none;
}

button {
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background-color:transparent ;
}

button,
input,
textarea {
  font-family: 'DM Sans', sans-serif;
}


`;
