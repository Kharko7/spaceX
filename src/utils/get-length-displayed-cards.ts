export const getLengthDisplayedCards = (currentLength: number) => {
  if (currentLength % 3 === 0) {

    return currentLength;
  }

  return 3 - (currentLength % 3) + currentLength;
};