import { Link, useLocation, useNavigate } from 'react-router-dom';

import { navigationMenu } from 'constants/navigationMenu';
import { RoutesPath } from 'routes/path';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import styles from './AppHeader.module.scss';
import Button from 'components/button';
import IconButton from 'components/icon-button';

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
    <div className={styles.position}>
      <div className={styles.container}>
        <div className={styles.headerBody}>
          <Link
            className={styles.logo}
            to={RoutesPath.home}>
          </Link>
          <nav className={styles.navMenu}>
            <ul >
              {navigationList}
            </ul>
          </nav>
          <div className={styles.navigationButton}>
            <IconButton
              onClick={navigateToFavourites}
              backgroundColor={pathNameToFavourites ? '#DD377D' : ''}
              icon={
                <Heart fill={pathNameToFavourites ? 'white' : ''} />
              }
            />
            <Button
              onClick={navigateToLogin}
              text='sign in'
            />
          </div>
        </div>
      </div>
    </div>

  );

};

export default AppHeader;