
export const resizeSlides = () => {
  if (window.innerWidth > 1160) {
    return 3;
  } else if (window.innerWidth <= 1160 && window.innerWidth > 800) {
    return 2;
  } else {
    return 1;
  }
};