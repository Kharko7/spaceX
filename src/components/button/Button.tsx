import { StyledButton } from "./Button.styles";

interface ButtonProps {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  pressAction?: boolean;
  onClick: () => void;
}

const Button = ({ size = 'md', children, pressAction = false, onClick }: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      onClick={onClick}
      pressAction={pressAction}
    >
      {children}
    </StyledButton>
  );
};

export default Button;