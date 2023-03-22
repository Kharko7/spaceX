
import BannerSection from 'container/home-page/banner-section';
import MainSliderSection from 'container/home-page/main-slider-section';
import styles from './Home.module.scss';

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <BannerSection />
      <MainSliderSection />
    </div >
  );
};

export default Home;