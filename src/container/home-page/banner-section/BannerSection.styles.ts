import styled, { css } from 'styled-components';

interface BannerImageProps {
  url: string;
}

export const BannerImage = styled.div<BannerImageProps>`
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
  
  ${({ url }) => css`
    background-image: url(${url});
  `} 

  &::after {
    content: "";
    display: block;
    background-color: rgb(0 0 0 / 41%);
    height: 100%;
  }
`;

export const TitleAndCarouselPosition = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  max-width: 1162px;
  padding: 0 20px;
  width: 100%;
  transform: translate(-50%, -50%);

  & img {
    width: 100%;
    margin-bottom: 25px;

  }
`;

export const Carousel = styled.div`
  position: absolute;
  top: 55%;
  left: 47%;
  transform: translate(-51%, -50%);
  z-index: 10;

  @media (max-width: 900px) {
    top: 110%;
    left: 47%;
  }
`;