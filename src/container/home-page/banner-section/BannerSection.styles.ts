import styled, { css } from 'styled-components';
import Arrow from 'assets/icons/ArrowDown.svg';
import { Link } from 'react-scroll';

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

export const ScrollTo = styled(Link)`
  background: url(${Arrow}) right 7px no-repeat;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  padding-right: 40px;
  cursor: pointer;
  font-family: "Lato";
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: white;
  -webkit-text-stroke: 0.4px black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ theme }) => theme.media.small} {
    font-size: 22px;
    padding-right: 30px;
  }
`;