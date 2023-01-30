import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import {useTheme}from '@mui/material/styles'
import {StyleButton,StyledAppbar,StyleDrawer} from './index'
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

import { DraweMenu } from '../../menuMobile/DraweMenu';
import { CartShopping } from '../../cartShopping/CartShopping';
import { ButtonNavigationMobile } from '../../ButtomNavigation/ButtonNavigationMobile';
import  SignUp  from '../../signup/SignUp';
import { Login } from '../../login/Login';
import { SearchBar } from '../../searchbar/SearchBar';

export const AppBarMobile = () => {

  const theme=useTheme();
  const [openSh, setOpenSh] = useState(false);
  const [open, setOpen] = useState(false);

 const handleDrawerOpen=()=>{
  setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerShOpen=()=>{
    setOpenSh(true)
  }
  const handleDrawerShClose = () => {
    setOpenSh(false);
  };
return (
  <>
  <Paper elevation={7} component='div'>
    <StyledAppbar sx={{maxHeight:'100px',justifyContent:'center',height:'98px'}} position="static">
      <Toolbar sx={{justifyContent:'space-between'}}>
        <Box>
          <Toolbar>
            <CartShopping/>             
          </Toolbar>
        </Box>
          <Box>
            <Button sx={{color:`${theme.palette.text.secondary}`}} onClick={handleDrawerShOpen}><SearchIcon/></Button>
            <StyleDrawer
              anchor='top'
              open={openSh}
              onClose={handleDrawerShClose}
              sx={{bottom:'50%'}}
              >
              <SearchBar/>
            </StyleDrawer>  
          </Box>        
            <TitleNavbar/>    
            <ButtonNavbar handleDrawerOpen={()=>handleDrawerOpen()}open={open}/>    
      </Toolbar>
    </StyledAppbar>
    <DraweMenu onClose={handleDrawerClose} open={open}/>    
  </Paper>
  <ButtonNavigationMobile/>
  </>
)
}

export const TitleNavbar = () => {
  return (
    <>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },color:'#4a5260' }}
          >
            <Link to='/'>
                Mojstar
            </Link> 
          </Typography>
        </Box>
    </>
  )
}

export const ButtonNavbar = ({handleDrawerOpen,open}) => {
  return (
    <>
       <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
    </>
  )
}

export const SignInMobile = () => {
  const [openModal, setOpenModal] =useState(false);
  const [type, setType] =useState('');
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenModal(true)
    setType(e.target.textContent)
  };
  return (
    <>
        <React.Fragment>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <StyleButton onClick={handleClick} variant="outlined" endIcon={<PersonSharpIcon />} color='white'>
                Sigin in
              </StyleButton>   
           </Typography>
          <Menu 
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>rejester</MenuItem>
            <MenuItem onClick={handleClose}>login</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
        {type == 'rejester' &&  <SignUp setOpenModal={setOpenModal} openModal={openModal}/>}
        {type == 'login' &&  <Login setOpenModal={setOpenModal} openModal={openModal}/>}

    </>
  )
}



