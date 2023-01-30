import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Toolbar } from '@mui/material'
import {Link} from 'react-router-dom';
import {dataListItem} from '../../data/datamenulist'
import { borderBottom, styled,keyframes } from '@mui/system';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';


export const StyleLink=styled(Link)(()=>({
    textDecoration:"none",

}))


export const StyleImage=styled(Box)(()=>({

    marginBottom: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',

    '& >span':{
        boxSizing: 'border-box',
        display: 'block',
        overflow: 'hidden',
        width: 'initial',
        height: 'initial',
        background: 'none',
        opacity: '1',
        border: '0',
        margin: '0',
        padding: '0',
        position: 'relative',
        '& span':{
            boxSizing:' border-box',
            display: 'block',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0',
            margin: '0',
            padding: '0',
            paddingTop: '0px',
            paddingTop: '100%',
        },
        '& img':{
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            boxSizing: 'border-box',
            padding: '0',
            border: 'none',
            margin: 'auto',
            display: 'block',
            width: '0',
            height: '0',
            minWidth:' 100%',
            maxWidth:' 100%',
            minHeight:' 100%',
            maxHeight:' 100%',
            objectFit: 'cover',
            // padding: '1rem',
        },
    },
    '&::after':{
        position: 'absolute',
        content:'""',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '1',
        // -webkitTransition: 'all 250ms ease-in-out',
        transition: 'all 250ms ease-in-out',
    },
  '&:hover::after':{
    background:' rgba(0, 0, 0, 0.3)',
  }

}));