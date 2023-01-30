import { styled } from "@mui/system";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  OutlinedInput,
  outlinedInputClasses,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

export const StyleImg = styled("img")(() => ({
  maxWidth: "100%",
  height: "100%",
}));

export const StyleContainer = styled("div")(() => ({
  padding: "0.7rem 0.5rem",
  borderRadius: "5px",
  boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px`,
}));

export const StyleButtonRemove = styled(Box)(() => ({
  position: "absolute",
  top: "7%",
  right: "0",
}));

export const StyleIncrement = styled(Box)(() => ({
  display: "flex",

  "& button": {
    minWidth: "35px",
    padding: "4px 0",
  },
  "& div": {
    margin: "0 0.5rem",
  },
}));

export const StylePrice = styled(Box)(() => ({
  display: "flex",
}));

export const StyleOutlinedInput = styled(OutlinedInput)(() => ({
  "&>input": {
    padding: "8.5px 14px",
  },
}));

export const StyleFormControl = styled(FormControl)(() => ({
  "&>div": {
    margin: "1rem 0 0.2rem",
  },
}));
