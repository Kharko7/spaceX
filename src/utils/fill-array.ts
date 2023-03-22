export const fillArray = (arrayLength: number, dataLength: number) => {
  return new Array(arrayLength - dataLength).fill(null);
};