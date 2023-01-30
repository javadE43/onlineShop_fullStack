import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, List, Toolbar } from '@mui/material'
import {Link} from 'react-router-dom';
import {dataListItem} from '../../data/datamenulist'
import { borderBottom, styled,keyframes } from '@mui/system';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';



export const StyleBox=styled(Box)(()=>({
    background:'#0c0e30',

}))

export const StyleLink=styled(Link)(()=>({
   display:'flex',
   color:'#fff',

}))


export const StyleList=styled(List)(()=>({
   
    '& li a:hover':{
        color:'#fff'
    }
    
 }))

