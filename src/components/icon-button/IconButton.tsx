import { StyledIconButton } from "./IconButton.styles";

interface IconButtonProps {
  children: React.ReactNode;
  size?: string;
  backgroundColor?: string;
  onClick: () => void;
}

const IconButton = ({ children, size = '', backgroundColor = '', onClick }: IconButtonProps) => {
  return (
    <StyledIconButton
      size={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;