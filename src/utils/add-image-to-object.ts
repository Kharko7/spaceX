import Image1 from 'assets/cards/image1.jpg';
import Image2 from 'assets/cards/image2.jpg';
import Image3 from 'assets/cards/image3.jpg';
import { RocketData } from 'interface/Rocket';

export const addImageToObject = (rocket: Partial<RocketData>, index: number) => {
  const newObj = { ...rocket };
  if (index % 3 === 0) {
    newObj.image = Image1;

    return newObj;
  }
  if ((index + 1) % 3 === 0) {
    newObj.image = Image3;

    return newObj;
  }
  newObj.image = Image2;

  return newObj;
};