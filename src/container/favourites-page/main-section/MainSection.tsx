import { RocketData } from 'interface/Rocket';
import { useState, useEffect, useCallback } from 'react';

import { getFromLocalStorage, setToLocalStorage } from 'service/local-storage.service';
import styles from './MainSection.module.scss';
import { ReactComponent as Delete } from 'assets/icons/Delete.svg';
import Card from 'components/card';
import { fillArray } from 'utils/fill-array';
import { getLengthDisplayedCards } from 'utils/get-length-displayed-cards';

const MainSection = () => {
  const [favoriteFlightsData, setFavoriteFlightsData] = useState<RocketData[]>(getFromLocalStorage('favourites'));
  const [lengthCards, setLengthCards] = useState<number>(0);

  const handleResize = useCallback(
    () => {
      const length = getLengthDisplayedCards(favoriteFlightsData.length);
      setLengthCards(length);
    }, [favoriteFlightsData.length]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const removeAllCards = () => {
    setFavoriteFlightsData([]);
    setLengthCards(0);
    setToLocalStorage('favourites', []);
  };

  const removeCard = (id: string) => {
    const filterStorageData = favoriteFlightsData.filter((rocketData: RocketData | null) => {
      if (rocketData === null) {
        return false;
      }
      return rocketData.id !== id;
    });

    setFavoriteFlightsData(filterStorageData);
    setLengthCards(filterStorageData.length);
    setToLocalStorage('favourites', filterStorageData);
  };

  const displayFavoriteData = favoriteFlightsData.map(data => ({ ...data }));

  if (displayFavoriteData.length > 0 && displayFavoriteData.length < lengthCards) {
    const emptyElements = fillArray(lengthCards, favoriteFlightsData.length);
    displayFavoriteData.push(...emptyElements);
  }

  const cards = displayFavoriteData.map((tourData: RocketData | null, index: number) => {
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
        {displayFavoriteData.length > 0 && <button onClick={removeAllCards} >Clear all</button>}
      </div>
      <div className={styles.cardsBlock}>
        {displayFavoriteData.length
          ? cards
          : <p className={styles.helperCaption}>You don't have favorite flights</p>
        }
      </div>
    </div>
  );
};

export default MainSection;