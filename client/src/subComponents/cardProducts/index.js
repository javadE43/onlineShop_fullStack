import { styled } from "@mui/system";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import Chip from "@mui/material/Chip";

export const StyleContainer = styled(Box)(() => ({
  position: "relative",
  padding: "1rem",
  width: "100%",
  //   height:'250px',
}));

export const StyleIconsHeader = styled(Box)(() => ({
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "column",
  "& button": {
    color: "#0f3460",
    "& span": {
      color: "#0f3460",
    },
  },
}));

export const StyleChip = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
}));

export const StyleImageCartd = styled("div")(() => ({
  width: "100%",
  height: "250px",
  padding: "0 1rem",
  "& a": {
    display: "bolck",
    maxWidth: "100%",
    height: "100%",
    "& img": {
      minWidth: "70%",
      maxWidth: "70%",
      minHeight: "70%",
      maxHeight: "70%",
      opjectFit: "contain",
    },
  },
}));

export const StyleContent = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  //    alignItems:"start",
}));

export const StyleContentItem = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  flexDirection: "column",
  width: "80%",
}));

export const StyleContentItemIcone = styled("div")(() => ({
  "& button": {
    color: "#d32f2f",
    "& span": {
      color: "#d32f2f",
    },
  },
}));

export const StyleContentItemAddProduct = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
}));
