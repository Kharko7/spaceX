import { useState } from "react";

import { RocketData } from "interface/Rocket";
import { getFromLocalStorage, setToLocalStorage } from "service/local-storage.service";

export const useFavourites = () => {
  const [favouritesItems, setFavouritesItems] = useState<RocketData[]>(getFromLocalStorage('favourites'));

  const handleFavouritesBtn = (rocketData: RocketData) => {
    if (favouritesItems.length === 0) {
      const tour = [rocketData];
      setFavouritesItems(tour);
      setToLocalStorage('favourites', tour);

      return;
    }

    if (isInFavourites(rocketData.id)) {
      const filteredFavouritesData = favouritesItems.filter((rocket) => rocket.id !== rocketData.id);
      setFavouritesItems(filteredFavouritesData);
      setToLocalStorage('favourites', filteredFavouritesData);
    } else {
      const newFavouritesData = [...favouritesItems, rocketData];
      setFavouritesItems(newFavouritesData);
      setToLocalStorage('favourites', newFavouritesData);
    }
  };

  const isInFavourites = (id: string) => {
    return favouritesItems.some((rocketData: RocketData) => rocketData.id === id);
  };

  return {
    isInFavourites,
    handleFavouritesBtn,
  };
};