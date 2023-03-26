import { useState } from 'react';

import { bannerImg } from 'constants/bannerSection';
import You from 'assets/text/You.svg';
import SpaceIsWaiting from 'assets/text/The-space-is-waiting-for.svg';
import { getFromLocalStorage, setToLocalStorage } from 'service/local-storage.service';
import CarouselDots from 'components/carousel-dots/CarouselDots';
import { Carousel, TitleAndCarouselPosition, Wrapper, } from './BannerSection.styles';
import ScrollTo from 'components/scroll-to/ScrollTo';
import BannerImage from 'components/styles/BannerImage';

const BannerSection = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(getFromLocalStorage('bannerIdx'));

  const handleSwitchBunner = (index: number) => {
    setCurrentIdx(index);
    setToLocalStorage('bannerIdx', index);
  };

  return (
    <Wrapper>
      <BannerImage
        opacity={0.48}
        src={bannerImg[currentIdx].url}
        alt='Banner'
      />
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
    </Wrapper>
  );
};

export default BannerSection;