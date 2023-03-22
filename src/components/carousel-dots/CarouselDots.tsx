import cn from "classnames";

import styles from './CarouselDots.module.scss';

interface CarouselDotsProps {
  currentIdx: number;
  length: number;
  color?: 'white' | 'black';
  onChange: (index: number) => void;
}

const CarouselDots = ({ currentIdx, length, color = 'white', onChange }: CarouselDotsProps) => {
  const elements: JSX.Element[] = [];

  for (let index = 0; index < length; index++) {
    const element =
      <button
        onClick={() => onChange(index)}
        key={index}
        disabled={index === currentIdx}
        data-color={color}
        className={cn(
          styles.carouselSwitches,
          styles[color],
          index === currentIdx && styles.active,
        )}
      />;

    elements.push(element);
  }

  return (
    <div className={styles.carousel}>
      {elements}
    </div>
  );
};

export default CarouselDots;