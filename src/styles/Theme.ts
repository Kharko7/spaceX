export const theme = {
  media: {
    extraLarge: '@media (max-width: 1160px)',
    large: '@media (max-width: 800px)',
    medium: '@media (max-width: 650px)',
    small: '@media (max-width: 500px)',
  },

  sizes: {
    header: 80,
    container: 1280,
  },
};

export type Theme = typeof theme