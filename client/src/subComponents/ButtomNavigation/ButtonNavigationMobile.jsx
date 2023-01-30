import  React,{useState} from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import { Login } from '../login/Login';
import {useNavigate}from 'react-router-dom'

export const ButtonNavigationMobile = () => {
    const navigate=useNavigate()
    const [value, setValue] = useState('login');
    const [openModal, setOpenModal] =useState(false);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleClose = (e) => {
      setOpenModal(true)
      // console.log(openModal)
    }
    return (
      <BottomNavigation sx={{
         width: 500,
         position:'fixed',
         bottom:"0",
         right:"0",
         left:"0",
         width:'100%',
         zIndex:'1000',
         background:'#d32f2f' 
         }} 
         
         value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="login"
          icon={<PersonOutlinedIcon color='white'/>}
          onClick={handleClose}
          
        />
        <BottomNavigationAction
          value="home"
          icon={<HomeIcon color='white'/>}
          onClick={()=>navigate('/')}
        />
        <BottomNavigationAction 
        value="Cart" 
        icon={<ShoppingCartIcon color='white'/>} 
        onClick={()=>navigate('/cart')}
        />
  
        <Login setOpenModal={setOpenModal} openModal={openModal}/>
      </BottomNavigation>
    );
}





   