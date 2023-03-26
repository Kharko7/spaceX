import { useState } from 'react';

import { bannerImg } from 'constants/bannerSection';
import You from 'assets/text/You.svg';
import SpaceIsWaiting from 'assets/text/The-space-is-waiting-for.svg';
import { getFromLocalStorage, setToLocalStorage } from 'service/local-storage.service';
import CarouselDots from 'components/carousel-dots/CarouselDots';
import { BannerImage, Carousel, TitleAndCarouselPosition } from './BannerSection.styles';
import ScrollTo from 'components/scroll-to/ScrollTo';

const BannerSection = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(getFromLocalStorage('bannerIdx'));

  const handleSwitchBunner = (index: number) => {
    setCurrentIdx(index);
    setToLocalStorage('bannerIdx', index);
  };

  return (
    <BannerImage url={bannerImg[currentIdx].url}   >
      <TitleAndCarouselPosition>
        <img src={SpaceIsWaiting} alt='SpaceIsWaiting' />
        <img src={You} alt='You' />
        <Carousel>
          <CarouselDots
            currentIdx={currentIdx}
            length={bannerImg.length}
            onChange={handleSwitchBunner}
          />
        </Carousel>
      </TitleAndCarouselPosition>
      <ScrollTo to="popularTours">
        Explore tours
      </ScrollTo>
    </BannerImage >
  );
};

export default BannerSection;