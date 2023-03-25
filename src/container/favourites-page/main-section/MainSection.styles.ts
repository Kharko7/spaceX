import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 40px;
  text-align: end;
  & button {
    font-family: "Lato";
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #556b84;
  }
`;

export const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px 40px -12px;
  
  ${({ theme }) => theme.media.small} {
    margin: 0;
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