import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';
import {Typography}from '@mui/material';
import {colors}from '../../../theme/index'
import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { Button} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';

// CONTAINER
export const AppBarContainer=styled(Box)(()=>({
display:'flex',
marginTop:'4',
justifyContent:'center',
alignItems:'center',
padding:'2px 3px'
}));

// HEADER
export const AppBarHeader=styled(Typography)(()=>({
 padding:'4px',
 color:colors.primary,
 fontSize:'4rem',
}));

// 
export const StyledAppbar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    color:theme.palette.common.black
  }));

// 
export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
//   
  export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    border:`1px solid #c4c4c4`,
    borderRadius:"25px",
    overflow:'hidden',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '40%',
    },
  }));

//   
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f6f9fc',
    color:'#7d879c',
  }));
//   
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width:'100%',
    padding:`0 1rem`,
    color:'#7d879c',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
      color:'#7d879c',
    },
  }));

  export const StyleButton=styled(Button)(({theme})=>({
          color:'#4a5260',
          border:`1px solid #c4c4c4`,
          
          '&:hover':{
            color:'#4a5260',
            border:`1px solid #c4c4c4`,
          }
  }))

export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

  export const StyleDrawer=styled(Drawer)(({})=>({
     
    '&>div.MuiPaper-root':{
      bottom:'50%',
      overflow:'hidden',

    }
  }));