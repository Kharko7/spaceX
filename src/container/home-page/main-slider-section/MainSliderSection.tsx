import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useSlider } from 'hooks/use-slider';
import { RocketData } from 'interface/Rocket';
import { useFavourites } from 'hooks/use-favourites';
import { ReactComponent as Heart } from 'assets/icons/Heart.svg';
import { addImageToObject } from 'utils/add-image-to-object';
import CarouselDots from 'components/carousel-dots/CarouselDots';
import Card from 'container/card/Card';
import ArrowSwitches from 'components/arrow-switches/ArrowSwitches';
import EmptyCard from 'components/styles/EmptyCard.styles';
import Container from 'components/styles/Container.styles';
import NotificationText from 'components/styles/NotificationText';
import { CardsBlock, HeaderTour, TitleTour, Wrapper } from './MainSliderSection.styles';
import { getRockets } from './operations/rockets-query';

const MainSliderSection = () => {
  const [rocketsData, setRocketsData] = useState<RocketData[]>([]);

  const { loading, error } = useQuery(getRockets, {
    onCompleted: ({ rockets }) => {
      const data = rockets.map(addImageToObject);
      setRocketsData(data);
    }
  });

  const {
    displayRocketsData,
    lastIndex,
    displayedCards,
    nextSlide,
    previousSlide,
    handleDotsSwitches
  } = useSlider(rocketsData);

  const { handleFavouritesBtn, isInFavourites } = useFavourites();

  const cards = displayRocketsData.map((rocketData: RocketData | null, index: number) => {
    let active = false;
    if (rocketData !== null) {
      active = isInFavourites(rocketData.id);
    }

    return (
      rocketData !== null
        ? <Card
          img={rocketData.image}
          title={rocketData.name}
          description={rocketData.description}
          icon={<Heart fill={active ? 'white' : ''} />}
          backgroundColorIcon={active ? '#DD377D' : ''}
          onClickIconBtn={() => handleFavouritesBtn(rocketData)}
          onClickBuy={() => { }}
          key={rocketData.id}
        />
        : <EmptyCard key={index} />
    );
  });

  return (
    <Wrapper id='popularTours'>
      <Container>
        <HeaderTour>
          <TitleTour>popular tours</TitleTour>
          {displayRocketsData.length > 0
            && rocketsData.length > displayRocketsData.length
            && <ArrowSwitches
              previous={previousSlide}
              next={nextSlide}
            />
          }
        </HeaderTour>
        {loading || error
          ? <NotificationText>
            {loading ? 'Loading....' : `Error: ${error?.message}`}
          </NotificationText>
          : <CardsBlock>
            {displayRocketsData.length
              ? cards
              : <NotificationText>Popular tours not found</NotificationText>
            }
          </CardsBlock>
        }
        {displayRocketsData.length > 0 &&
          <CarouselDots
            currentIdx={Math.floor((lastIndex - 1) / displayedCards)}
            length={Math.ceil(rocketsData.length / displayedCards)}
            color='black'
            onChange={handleDotsSwitches}
          />
        }
      </Container >
    </Wrapper>
  );
};

export default MainSliderSection;