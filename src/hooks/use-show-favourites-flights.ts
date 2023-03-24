import { useState, useEffect, useCallback } from "react";

import { RocketData } from "interface/Rocket";
import { getLengthDisplayedCards } from "utils/get-length-displayed-cards";
import { getFromLocalStorage, setToLocalStorage } from "service/local-storage.service";
import { fillArray } from "utils/fill-array";

export const useShowFavouritesFlights = () => {
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

  return {
    displayFavoriteData,
    removeCard,
    removeAllCards,
  };
};