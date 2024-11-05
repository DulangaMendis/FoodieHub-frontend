const { createTheme } = require("@mui/material");
require("@mui/material/styles/createPalette");

export const darkTheme=createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: "#5C2FC2", // Correct primary color
        },
        secondary: {
          main: "#5A20CB", // Correct secondary color
        },
        // Replace `black` with a custom name or use `text` directly
        background: {
          default: "#0D0D0D", // Correct default background color
          paper: "#0D0D0D",   // Paper background color
        },
        text: { // Use the standard `text` key
          primary: "#111111", // Correct primary text color
        },
        // If you want to use custom colors, you can add them under the `palette` object:
        black: { 
          main: "#242B2E", // Correct black color
        },
      },
}
  
)