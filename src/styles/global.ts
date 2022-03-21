import * as styled from 'styled-components'

import { colors } from '@/styles';

export const GlobalStyle = styled.createGlobalStyle`
html,
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${colors.primary};
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;
