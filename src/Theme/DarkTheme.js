const { createTheme } = require("@mui/material");
require("@mui/material/styles/createPalette");

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5C2FC2",
    },
    secondary: {
      main: "#5A20CB",
    },

    background: {
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    text: {
      primary: "#ffffff",
    },

    black: {
      main: "#242B2E",
    },
  },
});
