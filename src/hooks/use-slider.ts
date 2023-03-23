import { useState, useEffect } from "react";

import { RocketData } from "interface/Rocket";
import { fillArray } from "utils/fill-array";
import { resizeSlides } from "utils/resize-slides";

export const useSlider = (rocketsData: RocketData[]) => {
  const [displayedCards, setdDisplayedCards] = useState<number>(3);
  const [controller, setController] = useState<number[]>([]);

  const [firstIndex, lastIndex] = controller;

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    const length = resizeSlides();
    setdDisplayedCards(length);
    setController([0, length]);
  };

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
    const emptyElements = fillArray(displayedCards, displayRocketsData.length);

    displayRocketsData.push(...emptyElements);
  }

  return {
    displayRocketsData,
    lastIndex,
    displayedCards,
    nextSlide,
    previousSlide,
    handleDotsSwitches,
  };
};