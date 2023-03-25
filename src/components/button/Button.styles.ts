import styled, { css } from 'styled-components';

interface StyledButtonProps {
  size: 'sm' | 'md' | 'lg';
  pressAction: boolean;
}

const sizes = {
  sm: css`
    height: 40px;
    width: 120px;
    font-size: 18px;
  `,
  md: css`
    width: 163px;
  `,
  lg: css`
    width: 278px;
    ${({ theme }) => theme.media.small} {
      width: 220px;
    } 
  `
};

export const StyledButton = styled.button<StyledButtonProps>`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  height: 53px;
  text-transform: uppercase;
  background-color: #d3eaff;
  ${({ pressAction }) => pressAction && css`
    &:active {
      transform: scale(0.97);
    }
  `}

  ${({ size }) => sizes[size]}
`;

