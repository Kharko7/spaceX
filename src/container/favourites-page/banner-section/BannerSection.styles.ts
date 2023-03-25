import styled from 'styled-components';

import Img from 'assets/banner/BannerCropped.jpg';

export const BannerBlock = styled.div`
  position: relative;
  height: 440px;
  margin-bottom: 64px;

  ${({ theme }) => theme.media.large} {
    margin-bottom: 34px;
  }
`;

export const Image = styled.div`
  height: 100%;
  background-image: url(${Img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &::after {
    content: "";
    display: block;
    background-color: rgb(0 0 0 / 41%);
    height: 100%;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;  
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: white;
  user-select: none;
  
  transform: translate(-50%, 0);

  ${({ theme }) => theme.media.medium} {
    font-size: 28px;
  }
`;