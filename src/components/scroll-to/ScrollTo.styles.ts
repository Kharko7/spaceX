import styled from 'styled-components';
import Arrow from 'assets/icons/ArrowDown.svg';

export const StyledScrollTo = styled.a`
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

