import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0px;
  font-family: "Syne";
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
  & :visited {
    text-decoration: none;
  }
  & :focus,
  :active {
    outline: none;
  }
  & :hover {
    text-decoration: none;
  }
}

ul li {
  list-style: none;
  font-size: inherit;
}

button {
  cursor: pointer;
  background-color: transparent;
}

`;