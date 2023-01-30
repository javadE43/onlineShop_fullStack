import { styled } from '@mui/system';
import { Box} from '@mui/material'

export const StyleSection=styled('section')(({theme})=>({
    // transform: 'translateY(-39px)',
    position: 'relative',
    zIndex: '100',
    padding: '1rem',
    background:'transparent',
    margin:"2rem 0",
}))

export const StyleBox=styled(Box)(()=>({

    display:'flex',
    flexDirection:'column',
    background:'transparent',

    '& a':{
        textDecoration:'none',
    }
 
}))

export const StyleImage=styled('div')(({theme})=>({

    display:'flex',
    flexDirection:'column',
    // border:'4px solid #d23f57',
    borderRadius:'50%',
    padding:'0.5rem',
    justifyContent:'center',
    alignItems:'center',
    width: '150px',
    height: '150px',
    background: theme.palette.common.white,
    '& img':{
        display: 'block',
        height: '65px',
        marginBottom: '10px',
        objectfit: 'contain',
        width: '65px',
    } 

}))

export const StyleTitle=styled('div')(({theme})=>({

    display:'flex',
    flexDirection:'column',
    marginTop:'0.7rem',
    '& p':{
         color:theme.palette.text.secondary,
         fontSize:'1rem',
         fontWeight:'700',
    } 

}))

export const StyleDivider=styled('div')(()=>({
width:'50%',
margin:'auto',
marginTop:'5rem',
'& hr':{
        height:"0",
        width:'100%',
        border:'1px solid #0000ff',
}

}))





