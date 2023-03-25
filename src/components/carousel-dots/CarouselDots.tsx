import { StyledCarouselDots, Flex } from "./CarouselDots.styles";

interface CarouselDotsProps {
  currentIdx: number;
  length: number;
  color?: 'white' | 'black';
  onChange: (index: number) => void;
}

const CarouselDots = ({ currentIdx, length, color = 'white', onChange }: CarouselDotsProps) => {
  const elements: JSX.Element[] = [];

  for (let index = 0; index < length; index++) {
    const isActive = index === currentIdx;

    const element =
      <StyledCarouselDots
        onClick={() => onChange(index)}
        key={index}
        disabled={isActive}
        color={color}
        active={isActive}
      />;

    elements.push(element);
  }

  return (
    <Flex>
      {elements}
    </Flex >
  );
};

export default CarouselDots;