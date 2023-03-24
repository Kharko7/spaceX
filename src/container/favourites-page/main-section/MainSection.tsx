import { RocketData } from 'interface/Rocket';

import styles from './MainSection.module.scss';
import { ReactComponent as Delete } from 'assets/icons/Delete.svg';
import Card from 'components/card';
import { useShowFavouritesFlights } from 'hooks/use-show-favourites-flights';

const MainSection = () => {
  const {
    displayFavoriteFlights,
    removeCard,
    removeAllCards
  } = useShowFavouritesFlights();

  const cards = displayFavoriteFlights.map((tourData: RocketData | null, index: number) => {
    return (
      tourData !== null
        ? <Card
          img={tourData.image}
          title={tourData.name}
          description={tourData.description}
          onClickBuy={() => { }}
          icon={<Delete />}
          onClickIconBtn={() => removeCard(tourData.id)}
          key={tourData.id}
        />
        : <div className={styles.emptyCard} key={index}></div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {displayFavoriteFlights.length > 0 && <button onClick={removeAllCards} >Clear all</button>}
      </div>
      <div className={styles.cardsBlock}>
        {displayFavoriteFlights.length
          ? cards
          : <p className={styles.helperCaption}>You don't have favorite flights</p>
        }
      </div>
    </div>
  );
};

export default MainSection;