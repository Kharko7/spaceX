import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 90px 0;

  ${({ theme }) => theme.media.large} {
    padding: 40px 0;
  }

  ${({ theme }) => theme.media.small} {
    padding: 30px 0;
  }
`;

export const HeaderTour = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 43px;

  ${({ theme }) => theme.media.small} {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const TitleTour = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  padding-right: 40px;

  ${({ theme }) => theme.media.small} {
    margin-bottom: 15px;
  }
`;

export const CardsBlock = styled.div`
  display: flex;
  margin: 0 -12px 40px -12px;
  
  ${({ theme }) => theme.media.small} {
    margin: 0 0 40px 0;
  }
`;