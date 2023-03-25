import styled, { css } from 'styled-components';

interface StyledCarouselDotsProps {
  color: 'white' | 'black';
  active: boolean;
}

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const StyledCarouselDots = styled.button<StyledCarouselDotsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  ${({ active, color }) => active && css`
    &::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: auto;
      background-color: ${color};
    }
  `}
  ${({ color }) => css`
    border: solid 1px ${color};
  `}
`;
