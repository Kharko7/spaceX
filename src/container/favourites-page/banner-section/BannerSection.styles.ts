import styled from 'styled-components';

export const BannerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 440px;
  margin-bottom: 64px;
  background-color: rgb(30, 30, 30);

  ${({ theme }) => theme.media.large} {
    margin-bottom: 34px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  color: white;
  user-select: none;
  transform: translateY(20px);

  ${({ theme }) => theme.media.medium} {
    font-size: 28px;
  }
`;