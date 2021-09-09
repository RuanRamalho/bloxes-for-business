import styled from 'styled-components';
import { colors, fontSizes } from '../../tokens';

export const NewsContent = styled.div`
  background: ${colors.white};
  padding: 40px;
  border-radius: 8px;
  margin: 40px 0;

  h1 {
    font-size: ${fontSizes.xlarge}px;
    font-weight: bold;
    margin-bottom: 60px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      border-top: 1px dashed ${colors.purple};
      bottom: -27px;
      left: 0px;
    }
  }
`;
