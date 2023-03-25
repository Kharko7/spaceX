import { ReactComponent as Delete } from 'assets/icons/Delete.svg';
import { RocketData } from 'interface/Rocket';
import { useShowFavouritesFlights } from 'hooks/use-show-favourites-flights';
import Card from 'container/card/Card';
import { CardsBlock, Header } from './MainSection.styles';
import EmptyCard from 'components/styles/EmptyCard.styles';
import NotificationText from 'components/styles/NotificationText';
import Container from 'components/styles/Container.styles';

const MainSection = () => {
  const {
    displayFavoriteFlights,
    removeCard,
    removeAllCards
  } = useShowFavouritesFlights();

  const cards = displayFavoriteFlights.map((tourData: RocketData | null, index: number) => {
    return (
      tourData !== null
        ? <Card
          img={tourData.image}
          title={tourData.name}
          description={tourData.description}
          onClickBuy={() => { }}
          icon={<Delete />}
          onClickIconBtn={() => removeCard(tourData.id)}
          key={tourData.id}
        />
        : <EmptyCard key={index} />
    );
  });

  return (
    <Container>
      <Header>
        {displayFavoriteFlights.length > 0
          && <button onClick={removeAllCards} >Clear all</button>}
      </Header>
      <CardsBlock>
        {displayFavoriteFlights.length
          ? cards
          : <NotificationText>You don't have favorites flights</NotificationText>
        }
      </CardsBlock>
    </Container>
  );
};

export default MainSection;