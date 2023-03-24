import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from 'recoil';

import { RocketData } from "interface/Rocket";
import { getLengthDisplayedCards } from "utils/get-length-displayed-cards";
import { fillArray } from "utils/fill-array";
import { favouritesFlightsAtom } from "recoil/atom/favouritesFlightsAtom";

export const useShowFavouritesFlights = () => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState(favouritesFlightsAtom);
  const [lengthCards, setLengthCards] = useState<number>(0);

  const handleResize = useCallback(
    () => {
      const length = getLengthDisplayedCards(favoriteFlights.length);
      setLengthCards(length);
    }, [favoriteFlights.length]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const removeAllCards = () => {
    setFavoriteFlights([]);
    setLengthCards(0);
  };

  const removeCard = (id: string) => {
    const filterStorageData = favoriteFlights.filter((rocketData: RocketData | null) => {
      if (rocketData === null) {
        return false;
      }
      return rocketData.id !== id;
    });

    setFavoriteFlights(filterStorageData);
    setLengthCards(filterStorageData.length);
  };

  const displayFavoriteFlights = [...favoriteFlights];

  if (displayFavoriteFlights.length > 0 && displayFavoriteFlights.length < lengthCards) {
    const emptyElements = fillArray(lengthCards, favoriteFlights.length);
    displayFavoriteFlights.push(...emptyElements);
  }

  return {
    displayFavoriteFlights,
    removeCard,
    removeAllCards,
  };
};