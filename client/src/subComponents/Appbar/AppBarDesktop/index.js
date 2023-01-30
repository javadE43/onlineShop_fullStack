import { styled } from "@mui/material/styles";
import { colors } from "../../../theme";
import AppBar from "@mui/material/AppBar";
import { Box, Button, Typography } from "@mui/material";


//
export const ContainerAppbarDesktop=styled(Box)(({theme})=>({
position:"static",
}))


//
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  maxHeight: "100px",
  justifyContent: "center",
  height: "98px",
  position: "static",
}));

//

export const StyleButton = styled(Button)(({ theme }) => ({
  color: "#4a5260",
  border: `1px solid #c4c4c4`,
  marginRight:"1.2rem",
  "&:hover": {
    color: "#4a5260",
    border: `1px solid #c4c4c4`,
  },
}));

//
export const TypegraphyTitleHNavbar=styled(Typography)(({theme})=>({

  [theme.breakpoints.down("sm")]:{
    display:"block",
  },
  [theme.breakpoints.down("xs")]:{
    display:"none",
  },
  color: theme.palette.text.secondary,
  '&>a':{
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    fontSize: "1.5rem",
  }
}))