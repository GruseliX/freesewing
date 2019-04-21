const asTitle = {
  fontFamily: "Roboto Condensed",
  fontWeight: "bold"
};

const theme = {
  props: {
    MuiButtonBase: {
      //disableRipple: true // Disabling ripple everywhere
    }
  },
  overrides: {
    MuiButton: { root: asTitle },
    MuiMenuItem: { root: asTitle },
    MuiListItemText: { primary: asTitle }
  }
};

const darkBg = "#212529";
const lightBg = "#f8f9fa";

const palettes = {
  dark: {
    primary: { main: lightBg },
    secondary: { main: darkBg },
    type: "dark"
  },
  light: {
    primary: { main: darkBg },
    secondary: { main: lightBg },
    type: "light"
  }
};

export const dark = { ...theme, palette: palettes.dark, themeName: "Dark" };
export const light = { ...theme, palette: palettes.dark, themeName: "Light" };
