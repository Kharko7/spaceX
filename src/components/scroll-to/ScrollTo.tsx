import { StyledScrollTo } from "./ScrollTo.styles";

interface ScrollToProps {
  children: string;
  to: string;
  smooth?: boolean;
  offset?: number;
}

const ScrollTo = ({ children, to, smooth = true, offset = 0 }: ScrollToProps) => {

  const handleClick = () => {
    const element = document.getElementById(to);

    if (element) {
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: smooth ? 'smooth' : 'auto'
      });
    };
  };

  return (
    <StyledScrollTo onClick={handleClick}>
      {children}
    </StyledScrollTo >
  );
};

export default ScrollTo;