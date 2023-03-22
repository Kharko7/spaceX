import styles from './Favourites.module.scss';
import BannerSection from 'container/favourites-page/banner-section';
import MainSection from 'container/favourites-page/main-section';

const Favourites = () => {
  return (
    <div className={styles.wrapper}>
      <BannerSection />
      <MainSection />
    </div >
  );
};

export default Favourites;