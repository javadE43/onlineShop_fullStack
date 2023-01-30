import React from 'react'
import {useMediaQuery}from '@mui/material'
import {useTheme}from '@mui/material/styles'
import { AppBarDesktop } from '../../subComponents/Appbar/AppBarDesktop/AppBarDesktop';
import { AppBarMobile } from '../../subComponents/Appbar/AppBarMobile/AppBarMobile';

 const Header = () => {
  const theme=useTheme();
  const matches =useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>{matches?<AppBarDesktop/>:<AppBarMobile/>}</>
  )
}


export default React.memo(Header)