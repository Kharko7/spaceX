import { resizeSlides } from "./resize-slides";

export const getLengthDisplayedCards = (currentLengthData: number) => {
  const lengthDisplayedCards = resizeSlides();

  if (currentLengthData % lengthDisplayedCards === 0) {

    return currentLengthData;
  }

  return lengthDisplayedCards - (currentLengthData % lengthDisplayedCards) + currentLengthData;
};