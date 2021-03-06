import { DefaultTheme } from "styled-components";

export const myTheme: DefaultTheme = {
  colors: {
    main: "blue",
    secondary: "red",
  },
};

const minWidth = {
  tablet: "481px",
  laptop: "769px",
};

export const device = {
  tablet: `(min-width: ${minWidth.tablet})`,
  laptop: `(min-width: ${minWidth.laptop})`,
};
