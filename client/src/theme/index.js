import { createTheme } from "@mui/material";

export const colors = {
  primary: "#d32f2f",
  secondary: "#f6f9fc",
  white: "#fff",
  bg: "#0c0e30",
  buttton: "#0c2a4d",
  colorTextHeader: "#2b3445",
  colorText: "#7d879c",
};

const theme = createTheme({
  // breakpoints:{

  //     values:{
  //         xl:1280,
  //     }
  // },

  palette: {
    primary: {
      main: colors.primary,
      secondary: colors.bg,
    },
    secondary: {
      main: colors.secondary,
    },
    white: {
      main: colors.white,
    },
    text: {
      primary: colors.colorTextHeader,
      secondary: colors.primary,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
});

export default theme;
