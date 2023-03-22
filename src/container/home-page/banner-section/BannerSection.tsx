import { useState } from 'react';
import { Link } from 'react-scroll';

import styles from './BannerSection.module.scss';
import { bannerImg } from 'constants/bannerSection';
import CarouselDots from 'components/carousel-dots';
import You from 'assets/text/You.svg';
import SpaceIsWaiting from 'assets/text/The-space-is-waiting-for.svg';
import { getFromLocalStorage, setToLocalStorage } from 'service/local-storage.service';

const BannerSection = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(getFromLocalStorage('bannerIdx'));

  const handleSwitchBunner = (index: number) => {
    setCurrentIdx(index);
    setToLocalStorage('bannerIdx', index);
  };

  return (
    <div
      className={styles.bannerImage}
      style={{ backgroundImage: `url(${bannerImg[currentIdx].url})` }}
    >
      <div className={styles.bannerTitle}>
        <img src={SpaceIsWaiting} alt='SpaceIsWaiting' />
        <img src={You} alt='You' />
      </div>
      <div className={styles.carouselPosition}>
        <CarouselDots
          currentIdx={currentIdx}
          length={bannerImg.length}
          onChange={handleSwitchBunner}
        />
      </div>
      <Link
        className={styles.scrollDown}
        to="popularTours"
        offset={3}
        smooth={true}
        duration={500}
      >
        Explore tours
      </Link>
    </div >
  );
};

export default BannerSection;