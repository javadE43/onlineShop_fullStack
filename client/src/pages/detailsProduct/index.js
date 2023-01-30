import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Toolbar } from '@mui/material'
import {Link} from 'react-router-dom';
import {dataListItem} from '../../data/datamenulist'
import { borderBottom, styled,keyframes } from '@mui/system';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';




export const StyleImage=styled(Box)(()=>({

    display: 'flex',
    justifyContent: 'center',
    marginBottom: '48px',

    '& >span':{
        boxSizing: 'border-box',
        display: 'inline-block',
        overflow: 'hidden',
        width: 'initial',
        height: 'initial',
        background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
        opacity: '1',
        border: '0px none',
        margin: '0px',
        padding: '0px',
        position: 'relative',
        maxWidth: '100%',
        '& span':{
            boxSizing:' border-box',
            display: 'block',
            width: 'initial',
            height: 'initial',
            background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%',
            opacity: '1',
            border: '0px none',
            margin: '0px',
            padding: '0px',
            maxWidth: '100%',
            width:'300px',
            height:'300px',
        },
        '& img':{
            position: 'absolute',
            inset: '0px',
            boxSizing:' border-box',
            padding: '0px',
            border: 'medium none',
            margin: 'auto',
            display: 'block',
            width: '0px',
            height: '0px',
            minWidth:' 100%',
            maxWidth:' 100%',
            minHeight:' 100%',
            maxHeight:' 100%',
            objectFit: 'contain',
        },
    },

}));

export const StyleGallary=styled('div')(()=>({
     display:'flex',
     overflow:'hidden',

     '& >div':{
        cursor:'pointer',
        height: '64px',
        width: '64px',
        minWidth: '64px',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        // -moz-box-pack: 'center',
        justifyContent: 'center',
        // -moz-box-align: 'center',
        alignItems: 'center',
        // border: '1px solid rgb(210, 63, 87)',
        // marginLeft: 'auto',
        // marginRight: '10px',

        '&>div':{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: '0',
            width: '40px',
            fontFamily: 'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontSize:' 1.25rem',
            lineHeight: '1',
            borderRadius: '0px',
            overflow: 'hidden',
            userSelect: 'none',
            height: '40px',
            '&>img':{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                objectFit: 'cover',
                color: 'transparent',
                textIndent: '10000px',
            },
        },
     },

     '& :last-child':{
        marginLeft: '10px',
        marginRight: 'auto',
     },
     '& :first-child':{
        marginLeft: 'auto',
        marginRight: '10px',
     }

}))


export const StyleIncrement=styled(Box)(()=>(

    {
        display:'flex',

        '& button':{
            minWidth:'35px',
            padding:'4px 0',
        },
        '& div':{
            margin:'0 0.5rem'
        }
    }
  

))