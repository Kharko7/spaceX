import styles from './MainSliderSection.module.scss';
import Card from 'components/card';
import IconButton from 'components/icon-button';
import { useGetRocketCard } from 'hooks/use-get-rocket-cards';
import { RocketData } from 'interface/Rocket';
import CarouselDots from 'components/carousel-dots';
import { useFavourites } from 'hooks/use-favourites';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import ArrowSwitches from './arrow-switches';

const MainSliderSection = () => {
  const {
    displayRocketsData,
    loading,
    rocketsData,
    lastIndex,
    nextSlide,
    previousSlide,
    handleDotsSwitches
  } = useGetRocketCard(3);

  const { handleFavouritesBtn, isInFavourites } = useFavourites();

  const cards = displayRocketsData.map((rocketData: RocketData | null, index: number) => {
    let active = false;
    if (rocketData !== null) {
      active = isInFavourites(rocketData.id);
    }

    return (
      <div
        className={styles.cardBody}
        key={rocketData ? rocketData.id : index}
      >
        {rocketData !== null
          ? <Card
            img={rocketData.image}
            title={rocketData.name}
            description={rocketData.description}
            icon={<Heart fill={active ? 'white' : ''} />}
            backgroundColorIcon={active ? '#DD377D' : ''}
            onClickIconBtn={() => handleFavouritesBtn(rocketData)}
            onClickBuy={() => { }}
          />
          : null
        }
      </div>
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
          currentIdx={Math.floor((lastIndex - 1) / 3)}
          length={Math.ceil(rocketsData.length / 3)}
          color='black'
          onChange={handleDotsSwitches}
        />
      }
    </div >
  );
};

export default MainSliderSection;