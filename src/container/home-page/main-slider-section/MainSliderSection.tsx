import { useState } from 'react';
import { useQuery } from '@apollo/client';

import styles from './MainSliderSection.module.scss';
import Card from 'components/card';
import { useSlider } from 'hooks/use-slider';
import { RocketData } from 'interface/Rocket';
import CarouselDots from 'components/carousel-dots';
import { useFavourites } from 'hooks/use-favourites';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import ArrowSwitches from './arrow-switches';
import { addImageToObject } from 'utils/add-image-to-object';
import { getRockets } from './operations/rockets-query';

const MainSliderSection = () => {
  const [rocketsData, setRocketsData] = useState<RocketData[]>([]);

  const { loading } = useQuery(getRockets, {
    onCompleted: ({ rockets }) => {
      const data = rockets.map(addImageToObject);
      setRocketsData(data);
    }
  });

  const {
    displayRocketsData,
    lastIndex,
    displayedCards,
    nextSlide,
    previousSlide,
    handleDotsSwitches
  } = useSlider(rocketsData);

  const { handleFavouritesBtn, isInFavourites } = useFavourites();

  const cards = displayRocketsData.map((rocketData: RocketData | null, index: number) => {
    let active = false;
    if (rocketData !== null) {
      active = isInFavourites(rocketData.id);
    }

    return (
      rocketData !== null
        ? <Card
          img={rocketData.image}
          title={rocketData.name}
          description={rocketData.description}
          icon={<Heart fill={active ? 'white' : ''} />}
          backgroundColorIcon={active ? '#DD377D' : ''}
          onClickIconBtn={() => handleFavouritesBtn(rocketData)}
          onClickBuy={() => { }}
          key={rocketData.id}
        />
        : <div className={styles.emptyCard} key={index}></div>
    );
  });

  if (loading) {
    return <h1 className={styles.loading}>Loading....</h1>;
  }

  return (
    <div id='popularTours' className={styles.container}  >
      <div className={styles.headerTours}>
        <h2 className={styles.toursTitle}>popular tours</h2>
        {displayRocketsData.length > 0 &&
          <ArrowSwitches
            previous={previousSlide}
            next={nextSlide}
          />
        }
      </div>
      <div className={styles.cardsBlock}>
        {displayRocketsData.length
          ? cards
          : <p className={styles.notFoundText}>Popular tours not found</p>
        }
      </div>
      {displayRocketsData.length > 0 &&
        <CarouselDots
          currentIdx={Math.floor((lastIndex - 1) / displayedCards)}
          length={Math.ceil(rocketsData.length / displayedCards)}
          color='black'
          onChange={handleDotsSwitches}
        />
      }
    </div >
  );
};

export default MainSliderSection;