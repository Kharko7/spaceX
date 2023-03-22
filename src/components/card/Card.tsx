
import Button from 'components/button';
import IconButton from 'components/icon-button';
import styles from './Card.module.scss';

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
    <div className={styles.cardColumn}>
      <img src={img} alt='img' />
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.buttonsBody}>
        <Button
          pressAction={false}
          text='Buy'
          size='large'
          onClick={onClickBuy}
        />
        <IconButton
          icon={icon}
          onClick={onClickIconBtn}
          backgroundColor={backgroundColorIcon}
        />
      </div>
    </div>

  );
};

export default Card;