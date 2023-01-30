import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const Slider = styled("div")(() => ({
  overflow: "hidden",
  width: "100%",
  height: "auto",
  padding: "50px 0px",
  backgroundColor: "rgb(231, 231, 231)",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
}));

export const CartSlide = styled("div")(() => ({
  // boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  width: "100%",
  height: "400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  "& img": {
    borderRadius: "7px",
    width: "100%",
    height: "100%",
  },
}));

export const Description = styled("div")(({theme}) => ({
  textAlign: "start",
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",

  '&>a': {
    // marginTop: "4rem",
    [theme.breakpoints.down("md")]:{
      display:'flex',
      justifyContent:"center"
    },
    [theme.breakpoints.up("md")]:{
      display:'flex',
      justifyContent:"start"
    }
  },
  " & h4": {
    fontSize: "24px",
    lineHeight: "1",
    color: " #333",
    fontWeight: "600",
  },
  " & h3": {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "700",
    color: theme.palette.text.secondary,
  },
  "& p": {
    color: "#333",
    maxWidth: "470px",
  },
}));
export const StyleButton = styled(Button)(({theme}) => ({
  boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
  display: "ininie-block",
  marginTop: "2rem",
  background: "#d23f57",

  "&:hover": {
    background: "#d23f57",
  },
}));
