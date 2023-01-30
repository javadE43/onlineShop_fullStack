import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, TextField } from "@mui/material";
import { colors } from "../../theme";
import { alpha } from "@mui/material/styles";

export const StyleDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "103%",
  width: "100%",
  height: "300px",
  maxHeight: "300px",
  boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
  overflow: "hidden",
  overflowY: "scroll",
  zIndex: "1000",
  background: "#fff",
  "& ul": {
    height: "auto",
    width: "100%",
    listStyle: "none",
    padding: "1rem",
    zIndex: "1000",
    "& li": {
      padding: "0.5rem",

      "& a": {
        textDecoration: "none",
        color: "#333",
        display: "flex",
        justifyContent: "space-between",
      },
    },
  },
}));

export const StyleImgSearch = styled("span")(({ theme }) => ({
  display: "inline-block",
  width: "20px",
  "& img": {
    width: "100%",
    height: "auto",
  },
}));

export const SearchB = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border: `1px solid #c4c4c4`,
    borderRadius: "25px",
    // overflow:'hidden',
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
    },
  },
}));

//
export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  left: 0,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f6f9fc",
  color: "#7d879c",
  borderRadius: " 25px 0 0 25px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: `0 1rem`,
  color: "#7d879c",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
    color: "#7d879c",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//
export const StyleTextField = styled(TextField)(({ theme }) => ({
  display: "flex",
  width: "90%",
  margin: "auto",

  "&>div>input:foucs": {
    color: "#4a5260",
    border: `1px solid #c4c4c4`,
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const UlSearchBar = styled("ul")(({ theme }) => ({
  "&>li>a": {
    display: "flex",
    justifyContent: "space-between",
    
    "&>span":{
      marginLeft:"0.5rem",
    },
    "&>p": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
}));
