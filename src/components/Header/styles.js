import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const HeaderContent = styled.div`
  background: ${colors.white};
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lg} {
    margin-left: 25%;
  }
`;

export const HeaderTitle = styled.div`
  h1 {
    font-size: ${fontSizes.large}px;
    font-weight: bold;
    color: ${colors.primary};
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
  }

  img {
    width: 45px;
    border-radius: 8px;
  }
`;
