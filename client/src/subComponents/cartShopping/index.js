import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { dataListItem } from "../../data/datamenulist";
import { borderBottom, styled, keyframes } from "@mui/system";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export const StylePaper = styled(Paper)(({ theme }) => ({
  maxWidth: "400px",
  maxHeight: "300px",
  overflow: "hidden",
  // width:'400px',
  overflowY: "auto",
  minWidth: "300px",
}));
export const StylePaperItem = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.5rem",
  padding: "0.5rem",
  height: "auto",
  alignItems: "center",
}));

export const StyleListCartShoping = styled(List)(({ theme }) => ({
  height: "auto",
  width: "100%",
  padding: "0.5rem",
}));

export const StyleImageItemCartShoping = styled("div")(({ theme }) => ({
  maxWidth: "40px",
  height: "40px",
  overflow: "hidden",

  "& img": {
    maxWidth: "100%",
    height: "auto",
  },
}));

export const StyleIconButton = styled(IconButton)(({ theme }) => ({
  color: "#7d879c",
  background: "#f3f5f9",
}));
