import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),

    "body-xsmall": {
      fontSize: "0.875rem", // 14px
      display: "inline-block",
    },
    "body-small": {
      fontSize: "1rem", // 16px
      display: "inline-block",
    },
    "body-medium": {
      fontSize: "1.125rem", // 18px
      display: "inline-block",
    },
    "body-regular": {
      fontSize: "1.25rem", // 20px
      display: "inline-block",
    },
    "body-large": {
      fontSize: "2.75rem", // 44px
      display: "inline-block",
    },
  },

  palette: {
    primary: {
      main: "#52A79D",
      contrastText: "#6D6D6D",
    },
    common: {
      white: "#FFFFFF",
      black: "#494949",
    },
    custom: {
      black: "#202020",
      teal: "#48a197",
      lightGrey: "#bcbcbc",
      borderGrey: "#DFDFDF",
      primaryGrey: "#F4F4F4",
      primaryDark: "#303030",
    },
  },
  spacing: (factor) => `${0.125 * factor}rem`, // factor of 1 means 2px or 0.125rem
});
