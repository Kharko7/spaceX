import styled  from 'styled-components';

export const Wrapper = styled.div`
  flex: 1 1 33.333%;
  padding: 0 12px;
  position: relative;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.extraLarge} {
     flex: 1 1 50%;
  }
  ${({ theme }) => theme.media.large} {
     flex: 1 1 100%;
  }
  ${({ theme }) => theme.media.small} {
     padding: 0;
  }

  &::after {
    content: "";
    border: 1px solid #d3eaff;
    height: 100%;
    width: Calc(100% - 24px);
    position: absolute;
    top: 0;
    left: 12px;
    z-index: -1;

    ${({ theme }) => theme.media.small} {
      left: 0;
      width: 100%;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  height: 100%;
  
  & img {
    height: 296px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  padding: 32px 32px 64px;
  flex-grow: 1;

  ${({ theme }) => theme.media.small} {
      padding: 32px 10px 40px;
    }

  & h2 {
    font-weight: 700;
    line-height: 29px;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    margin-bottom: 16px;
  }

  & p {
    font-family: "Lato";
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #556b84;
    padding: 0 22px;
    max-height: 260px;
    overflow: auto;

    ${({ theme }) => theme.media.large} {
      height: 190px;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #cfcfcf;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 7px;
      background-color: #89c7ff;
      &:hover {
        background-color: #5db2ff;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 16px;
`;


