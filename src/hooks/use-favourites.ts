import { useRecoilState } from 'recoil';

import { RocketData } from "interface/Rocket";
import { favouritesFlightsAtom } from 'recoil/atom/favouritesFlightsAtom';

export const useFavourites = () => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState(favouritesFlightsAtom);

  const isInFavourites = (id: string) => {
    return favoriteFlights.some((rocketData: RocketData) => rocketData.id === id);
  };

  const handleFavouritesBtn = (rocketData: RocketData) => {
    isInFavourites(rocketData.id)
      ? setFavoriteFlights(currVal => currVal.filter((rocket) => rocket.id !== rocketData.id))
      : setFavoriteFlights(currVal => [...currVal, rocketData]);
  };

  return {
    isInFavourites,
    handleFavouritesBtn,
  };
};