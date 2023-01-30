import {styled } from '@mui/system';
import Paper from '@mui/material/Paper';


export const StylePaper=styled(Paper)(()=>({
boxShadow:'none',
borderRadius: '7px',
transition:'box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
'&:hover':{
    boxShadow:'0px 4px 16px rgba(43, 52, 69, 0.1)',
}
}))