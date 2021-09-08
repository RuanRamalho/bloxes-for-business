import { createGlobalStyle } from 'styled-components';
import { fontFamilies, colors } from '../tokens';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.lightGray};
    font-family: ${fontFamilies.primary};
  }
`;

export default GlobalStyle;
