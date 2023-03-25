import { Link, useLocation, useNavigate } from 'react-router-dom';

import { navigationMenu } from 'constants/navigationMenu';
import { RoutesPath } from 'routes/path';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import Button from 'components/button/Button';
import IconButton from 'components/icon-button/IconButton';
import {
  HeaderFlex,
  Logo,
  NavButtons,
  NavMenu,
  Position
} from './AppHeader.styles';
import Container from 'components/styles/Container.styles';

const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathNameToFavourites = location.pathname === RoutesPath.favourites;

  const navigateToFavourites = () => {
    const path = RoutesPath.favourites;
    navigate(path);
  };
  const navigateToLogin = () => {
    const path = RoutesPath.login;
    navigate(path);
  };

  const navigationList = Object.entries(navigationMenu).map(([name, path]) => (
    <li key={name}>
      {path.length ?
        <Link
          to={path}>
          {name}
        </Link>
        : name
      }
    </li>
  ));

  return (
    <Position>
      <Container>
        <HeaderFlex>
          <Logo to={RoutesPath.home} />
          <NavMenu>
            <ul >
              {navigationList}
            </ul>
          </NavMenu>
          <NavButtons>
            <IconButton
              onClick={navigateToFavourites}
              backgroundColor={pathNameToFavourites ? '#DD377D' : ''}
              children={
                <Heart fill={pathNameToFavourites ? 'white' : ''} />
              }
            />
            <Button
              pressAction
              onClick={navigateToLogin}
            >
              sign in
            </Button>
          </NavButtons>
        </HeaderFlex>
      </Container>
    </Position>
  );
};

export default AppHeader;