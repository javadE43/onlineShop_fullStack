import React, { useContext, useState } from "react";

//
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import Paper from "@mui/material/Paper";

//
import { StyleButton, StyledAppbar,ContainerAppbarDesktop,TypegraphyTitleHNavbar } from "./index";
import { useFormContext } from "../../../context/formContext";
import { CartShopping } from "../../cartShopping/CartShopping";
import SignUp from "../../signup/SignUp";
import { Login } from "../../login/Login";
import { Link } from "react-router-dom";
import { MenuDesktop } from "../../menuDesktop/MenuDesktop";
import { SearchBar } from "../../searchbar/SearchBar";
import { titleNavbar,boxAuhNavbar } from "../../../data/textSite";

//
export function AppBarDesktop() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ContainerAppbarDesktop>
      <Paper elevation={7} component="div">
        <StyledAppbar>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <TitleNavbar />
            <Box>
              <SearchBar />
            </Box>
            <Box>
              <Toolbar>
                <SignIn />
                <CartShopping />
              </Toolbar>
            </Box>
          </Toolbar>
        </StyledAppbar>
      </Paper>
      <MenuDesktop />
    </ContainerAppbarDesktop>
  );
}

export const TitleNavbar = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <TypegraphyTitleHNavbar
          variant="h6"
          noWrap
          component="div"
        >
          <Link to="/">{titleNavbar}</Link>
        </TypegraphyTitleHNavbar>
      </Box>
    </>
  );
};

export const SignIn = () => {
  const { state, dispatch } = useContext(useFormContext);
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e,T) => {
    setAnchorEl(null);
    setOpenModal(true);
    setType(T);
    if (T == "Logout") {
      localStorage.removeItem("formdata");
      dispatch({ type: "Logout", payload: [] });
    }
  };
  return (
    <>
      <>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <StyleButton
            onClick={handleClick}
            variant="outlined"
            endIcon={<PersonSharpIcon />}
            color="white"
          >
            {state.data.username ? <>{state.data.username}</> : <>ورود</>}
          </StyleButton>
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ width: "100%" }}
        >
          <MenuItem sx={{ width: "110px" }} onClick={(e)=>handleClose(e,"rejester")}>
          {boxAuhNavbar.register}
          </MenuItem>
          <MenuItem sx={{ width: "110px" }} onClick={(e)=>handleClose(e,"login")}>
          {boxAuhNavbar.login}
          </MenuItem>
          <MenuItem sx={{ width: "110px" }} onClick={(e)=>handleClose(e,"Logout")}>
          {boxAuhNavbar.logout}
          </MenuItem>
        </Menu>
      </>
      {type == "rejester" && (
        <SignUp setOpenModal={setOpenModal} openModal={openModal} />
      )}
      {type == "login" && (
        <Login setOpenModal={setOpenModal} openModal={openModal} />
      )}
    </>
  );
};
