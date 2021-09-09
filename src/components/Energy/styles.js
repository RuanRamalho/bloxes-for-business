import styled from 'styled-components';
import { fontSizes, colors, media } from '../../tokens';

export const CarouselContent = styled.div`
  .splide__arrows {
    opacity: 0;
  }

  &:hover {
    .splide__arrows {
      opacity: 1;
    }
  }
`;

export const ImageContent = styled.div`
  height: 250px;

  .splide__slide__container {
    height: 100%;
  }

  ${media.xl} {
    height: 350px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

export const DescriptionContent = styled.div`
  margin-top: 10px;

  h3 {
    font-size: ${fontSizes.medium}px;
    font-weight: bold;
  }

  p {
    color: ${colors.purple};
  }
`;
