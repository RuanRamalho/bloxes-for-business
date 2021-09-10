import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const MenuContent = styled.div`
  background: ${colors.secondary};
  font-size: ${fontSizes.medium};
  width: 30%;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  overflow-y: scroll;
  display: none;

  &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: ${colors.lightGray};
        border: 1px solid ${colors.lightGray};
        border-radius: 8px;
      }

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 8px;
      }
    }


  ul {
    width: 100%;

    h2 {
      color: #4c4e70;
      font-size: ${fontSizes.medium}px;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    a {
      text-decoration: none;
      color: ${colors.purple};
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;

      &:hover {
        background: ${colors.primary};
      }
    }
  }

  ${media.lg} {
    display: block;
    width: 30%;
  }

  ${media.xxl} {
    width: 25%;
  }
`;

export const MenuList = styled.li`
  background: ${(props) => (props.active ? colors.primary : 'none')};
  color: ${(props) => (props.active ? colors.white : 'none')};
`;

export const LogoContent = styled.div`
  background: ${colors.primary};
  position: relative;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    position: absolute;

    &:first-child {
      width: 200px;
    }

    &:last-child {
      right: 30px;
    }
  }
`;

export const HomeContent = styled.div`
  margin-top: 30px;
`;

export const EntrepreneurContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const CommunityContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  button {
    padding: 10px 25px;
    background: blue;
    bottom: 10px;
    border: none;
    border-radius: 4px;
    color: ${colors.white};
  }

  ${media.xl} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
