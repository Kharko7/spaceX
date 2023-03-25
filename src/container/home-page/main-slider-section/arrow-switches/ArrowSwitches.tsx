import styles from './ArrowSwitches.module.scss';
import { ReactComponent as ArrowLeft } from 'assets/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/ArrowRight.svg';
import IconButton from 'components/icon-button/IconButton';

interface ArrowSwitchesProps {
  next: () => void;
  previous: () => void;
}

const ArrowSwitches = ({ previous, next }: ArrowSwitchesProps) => {

  return (
    <div className={styles.arrowSwitches}>
      <IconButton
        children={<ArrowLeft />}
        size='44'
        onClick={previous}
      />
      <IconButton
        children={<ArrowRight />}
        onClick={next}
        size='44'
      />
    </div>
  );
};

export default ArrowSwitches; 