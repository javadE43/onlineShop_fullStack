import {styled,keyframes } from '@mui/system';
import Paper from '@mui/material/Paper';

const styleAnimation=keyframes`

  0% {
    visibility:'hidden';
    -webkit-transform: translateY(30px);
            transform: translateY(30px);
  }
  100% {
    visibility:'visible';
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
  }

`

export const DivContainer = styled('div')(({ theme }) => ({
  background:'#fff',
  height:'100%',
  position:'relative',
  boxShadow: `0px 14px 16px rgba(43, 52, 69, 0.1)`,
  zIndex:'100',
}));

export const StyleLinkContainer = styled('div')(({ theme }) => ({
  '& > ul':{
    visibility:'hidden', 
    transform: 'translateY(100px)',
  },
  background:'#fff',
  display:`flex`,
  padding:`0.5rem 1rem`,
  justifyContent:'center',
  alignItems:'center',
  position:'relative',
  cursor:'pointer',
  '&:hover > ul':{
    visibility:'visible',   
    animation:`${styleAnimation} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,

},

  '& a':{
    color:'#333',
    textDecoration:'none',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    transition:'color 0.5s ease',

  },
  '&:hover >a':{
    color:'#ffe0b2'
  },

}));

const styleAnimationDrow=keyframes`

  0% {
    visibility:'hidden';

  }
  100% {
    visibility:'visible';
  }

`



export const StylePaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  zIndex: '1000',
  listStyle: 'none',
  transform: 'translateY(0)',
  width:'200px',
  '& li':{
    position:'relative',
    color:'white',
    display: 'flex',
    justifyContent:' space-between',
    '&:hover > ul':{
      visibility:'visible',    
      animation:`${styleAnimationDrow} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  
  }, 

    '& a':{
      color:'#333',
      textDecoration:'none',
      textTransform:'capitalize',
    }
  },
  '&:lastChild':{
    borderBottom:'none',
  },
}));



export const StylePaperSubmenu = styled(Paper)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    zIndex: '1000',
    listStyle: 'none',
    left:'-100%',
    transform:'translateX(-5px)',
    width:'100%',
    visibility:'hidden', 
    '& li':{
      color:'white',
      display: 'flex',
      '& a':{
        color:'#ff0000',
        textDecoration:'none',
        textTransform:'capitalize',

      }
    },
    '&:lastChild':{
      borderBottom:'none',
    },
  }));





export const ContainerList = styled('div')(({ theme }) => ({
padding:'10px',
width:'100%',
}));


export const RowList = styled('div')(({ theme }) => ({

  marginRight: 'auto',
  marginLeft: 'auto',
  position: 'relative',
   '& a':{
    display: 'flex',
    justifyContent:'space-between',
   }
  }));