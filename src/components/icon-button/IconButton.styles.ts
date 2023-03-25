import styled, { css } from 'styled-components';

interface StyledIconButtonProps {
  size: string;
  backgroundColor: string;
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  width: 53px;
  height: 53px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => size && css`
    width: ${size}px;
    height: ${size}px;
  `}
  ${({ backgroundColor }) => backgroundColor && css`
     background-color: ${backgroundColor};
  `}
`;

