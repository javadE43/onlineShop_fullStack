
import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, List, ListItemButton, Toolbar } from '@mui/material'
import { borderBottom, styled,keyframes } from '@mui/system';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';



export const StyleListItemText=styled(ListItemText)(({theme})=>({
    display:'inline-block',
    flex: 'initial',
  }));
  
 export const StyleListitemButtonMain=styled(ListItemButton)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    position:'static',
    paddingTop:'0',
    
  }));
  
  
export const StyleListMain=styled(List)(({theme})=>({
   position:'relative',
    
  }));
  
export const StyleListItem=styled(ListItem)(({theme})=>({
    position:'static',
    paddingTop:'0',
   }));
  
  
export const StyleListSubheader=styled(ListSubheader)(({theme})=>({
   textAlign:'center',
  
     
   }));
  
const animationSHowSubMenu=keyframes`

  0% {
    left:-305px;
  }
  100% {
    left:0;
  }
`
export const StyleBox = styled(Box)(({ theme }) => ({
    background:'#fff',
    position:'absolute',
    width:'100%',
    height:'auto',
    zIndex:'1000',
    top:'-21%',
    left: '0',
    bottom:'0',
    // animation:`${animationSHowSubMenu}1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
}));


export const StyleListitemButton=styled(ListItemButton)(({theme})=>({
  display:'flex',
  justifyContent:'space-between',
  position:'static',
   
  '& a':{
    textDecoration:'none',
    color:'#000',
    textTransform:'capitalize',

  }
  
}));


export const StyleList=styled(List)(({theme})=>({
  position:'relative',
   width:'100%',
   padding:'0'
 }));


 export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
