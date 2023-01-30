import { Box } from '@mui/material'
import {Link} from 'react-router-dom';
import { styled} from '@mui/system';

export const StyleLink=styled(Link)(()=>({
    textDecoration:"none",
    display:"block",
    width:'100%',
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
            minWidth:'70%',
            maxWidth:'70%',
            minHeight:'70%',
            maxHeight:'70%',
            objectFit: 'contain',
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