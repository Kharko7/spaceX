import { RocketData } from 'interface/Rocket';
import { useState } from 'react';

import { getFromLocalStorage, setToLocalStorage } from 'service/local-storage.service';
import styles from './MainSection.module.scss';
import { ReactComponent as Delete } from 'assets/icons/Delete.svg';
import Card from 'components/card';
import { fillArray } from 'utils/fill-array';
import { getLengthDisplayedCards } from 'utils/get-length-displayed-cards';

const MainSection = () => {
  const [favouritesData, setFavouritesData] = useState<RocketData[]>(getFromLocalStorage('favourites'));
  const lengthCards = getLengthDisplayedCards(favouritesData.length);

  if (favouritesData.length > 0 && favouritesData.length < lengthCards) {
    const restElements = fillArray(lengthCards, favouritesData.length);
    setFavouritesData((prevArray) => [...prevArray, ...restElements]);
  }

  const handleClearAll = () => {
    setFavouritesData([]);
    setToLocalStorage('favourites', []);
  };

  const removeCard = (id: string) => {
    const filterStorageData = favouritesData.filter((rocketData: RocketData | null) => {
      if (rocketData === null) {
        return false;
      }
      return rocketData.id !== id;
    });

    setFavouritesData(filterStorageData);
    setToLocalStorage('favourites', filterStorageData);
  };

  const cards = favouritesData.map((tourData: RocketData | null, index: number) => {
    return (
      <div
        className={styles.cardBody}
        key={tourData ? tourData.id : index}
      >
        {tourData !== null
          ? <Card
            img={tourData.image}
            title={tourData.name}
            description={tourData.description}
            onClickBuy={() => { }}
            icon={<Delete />}
            onClickIconBtn={() => removeCard(tourData.id)}
          />
          : null
        }
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {lengthCards > 0 && <button onClick={handleClearAll} >Clear all</button>}
      </div>
      <div className={styles.cardsBlock}>
        {lengthCards
          ? cards
          : <p className={styles.helperCaption}>You don't have favorite flights</p>
        }
      </div>
    </div>
  );
};

export default MainSection;