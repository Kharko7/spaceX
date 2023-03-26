import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  background-color: rgb(30, 30, 30);
  padding-bottom: 33px;
  position: relative;
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