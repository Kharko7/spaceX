import styled from 'styled-components';
import { Link, } from 'react-router-dom';

import LogoImg from 'assets/Logo.png';

export const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.48);
  z-index: 100;
`;

export const HeaderFlex = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  background: url(${LogoImg});
  background-size: cover;
  background-position: center;
  height: 42px;
  width: 230px;
`;

export const NavMenu = styled.nav`
  ${({ theme }) => theme.media.medium} {
    display: none
  }
 
  & ul {
    display: flex;
    gap: 32px;
  }
  & li {
    text-transform: uppercase;
    color: white;
    font-family: "Lato";
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    cursor: pointer;
    position: relative;

    & a {
      display: inline-block;
      height: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      bottom: 1px;
      left: 0;
      background-color: white;
      opacity: 0;
      transition: all 0.2s ease;
    }
    &:hover::after {
      width: 100%;
      left: 0;
      opacity: 1;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 12px;

  ${({ theme }) => theme.media.large} {
    & > :last-child {
      display: none;
    }
  }
`;