import { useQuery } from "@apollo/client";
import { useState } from "react";

import { RocketData } from "interface/Rocket";
import { addImageToObject } from "utils/add-image-to-object";
import { getRockets } from "container/home-page/main-slider-section/operations/rockets-query";
import { fillArray } from "utils/fill-array";

export const useGetRocketCard = (displayedCards: number) => {
  const [rocketsData, setRocketsData] = useState<RocketData[]>([]);
  const [controller, setController] = useState<number[]>([0, displayedCards]);

  const [firstIndex, lastIndex] = controller;

  const { loading, error } = useQuery(getRockets, {
    onCompleted: ({ rockets }) => {
      const data = rockets.map(addImageToObject);
      setRocketsData(data);
    }
  });

  const nextSlide = () => {
    const isLastItem = lastIndex >= rocketsData.length;
    const arrayIsEmpty = rocketsData.length === 0;

    if (isLastItem || arrayIsEmpty) {
      return;
    }

    setController(([firstIdx, lastIdx]) => [firstIdx + 1, lastIdx + 1]);
  };
  const previousSlide = () => {
    if (firstIndex !== 0) {
      setController(([firstIdx, indexLast]) => [firstIdx - 1, indexLast - 1]);
    }
  };

  const handleDotsSwitches = (index: number) => {
    if (index === 0) {
      setController([0, displayedCards]);

      return;
    }
    const firstIdx = index * displayedCards;
    const lastIdx = (index + 1) * displayedCards;

    setController([firstIdx, lastIdx]);
  };

  const displayRocketsData: Array<RocketData | null> = rocketsData.slice(firstIndex, lastIndex);

  if (displayRocketsData.length > 0 && displayRocketsData.length < displayedCards) {
    const restElements = fillArray(displayedCards, displayRocketsData.length);

    displayRocketsData.push(...restElements);
  }

  return {
    displayRocketsData,
    loading,
    error,
    rocketsData,
    lastIndex,
    nextSlide,
    previousSlide,
    handleDotsSwitches,
  };
};