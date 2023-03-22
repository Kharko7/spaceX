import cn from "classnames";
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  pressAction?: boolean;
  onClick?: () => void;
}

const Button = ({ text, size = 'medium', pressAction = true, onClick }: ButtonProps) => {

  return (
    <button
      className={cn(
        styles.button,
        styles[size],
        pressAction && styles.action
      )}
      onClick={onClick}
    >
      {text}
    </button >
  );
};

export default Button; 