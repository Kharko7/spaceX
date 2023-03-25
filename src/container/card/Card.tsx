import Button from "components/button/Button";
import IconButton from "components/icon-button/IconButton";
import { ButtonContainer, Column, Description, Wrapper } from "./Card.styles";

interface CardProps {
  img: string;
  title: string;
  description: string;
  icon: JSX.Element;
  backgroundColorIcon?: string;
  onClickBuy: () => void;
  onClickIconBtn: () => void;
}

const Card = ({ img, title, description, icon, backgroundColorIcon = '', onClickBuy, onClickIconBtn }: CardProps) => {

  return (
    <Wrapper>
      <Column>
        <img src={img} alt='img' />
        <Description>
          <h2>{title}</h2>
          <p>{description}</p>
        </Description>
        <ButtonContainer>
          <Button
            size='lg'
            onClick={onClickBuy}
          >
            Buy
          </Button>
          <IconButton
            children={icon}
            onClick={onClickIconBtn}
            backgroundColor={backgroundColorIcon}
          />
        </ButtonContainer>
      </Column>
    </Wrapper>
  );
};

export default Card;