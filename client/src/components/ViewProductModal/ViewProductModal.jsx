import React,{useState,useEffect} from 'react'
import { Box, Container, Grid, ListItemText, Paper, Rating, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import uniqid from 'uniqid';
import { useSpring, animated } from 'react-spring';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {useGetAllProductsQuery} from '../../containers/featcher/producApi/productApi'
import { useDispatch, useSelector } from 'react-redux';
import {StyleImage,StyleGallary,StyleIncrement,StyleBackdrop}from'./index.js'
import {addToCart, decreaseCart} from '../../containers/featcher/cart/cartslice';



const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
  
 export function ViewProductModal({Visibility,setVisibility,id}) {
    const [open, setOpen] = useState(false);
    const {data,isLoading,error}=useGetAllProductsQuery()
    const [product,setProduct]=useState({});
    const handleClose = () => setVisibility(false);
    useEffect(()=>{
    const getProduct= async ()=>{
     let datanew=await axios.get(`https://fakestoreapi.com/products/${id}`);
     setProduct(datanew.data)
    }
    getProduct()
  },[id])

    return (
      <>
        <StyleBackdrop
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={Visibility}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          
          }}
        >
          <Fade in={Visibility}>
           <Box>
            <Container sx={{width:{xs:'auto',md:'50%'},margin:'2rem auto',position:'relative',zIndex:'2'}}>
              <Paper>
                <ShowProduct product={product} data={data}/>
             </Paper>
            </Container>
          </Box>
          </Fade>
        </StyleBackdrop>
      </>
    );
  }

 const ShowProduct=({product,data})=> {
    const [id,setid]=useState(0);
    const [quantity,setQuantity]=useState(0);
    const {cartItem}=useSelector((store)=>store.cart)
    const Dispatch=useDispatch();
    const navigete=useNavigate()
    const handlerDecreaseCart=(item)=>{
      Dispatch(decreaseCart(item))
    }
    const handlerIncreaseCart=(item)=>{
      Dispatch(addToCart(item))
    }
    const popPIdroduct=()=>{
      const itemId=cartItem.filter((item)=>item.id === product.id);
      if(itemId.length>0){
        return itemId[0].cartQuantity
      }
    }
    const activeGallery=(id)=>{
      setid(id)
  }
  // API
    // const [image,setImage]=useState(product.gallrey[0]);

    // const changeImage=(id)=>{
    //   const img =product.gallrey[id]
    //   setImage(img)
    // }
    useEffect(()=>{
    setQuantity(popPIdroduct())
    },[cartItem])

  return (
     <Grid container sx={{ padding:'1.5rem'}}>
      <Grid item xs={12} sm={12} md={12}>
                    <Box>
                        <StyleImage>
                              <span>
                               <span></span>
                               {/* API */}
                               {/* <img src={image}alt={product.title}/>  */}
                              <img src={product.image}alt={product.title}/> 
                              </span>
                           </StyleImage>
                           <Box >
                           <StyleGallary>
                        {/* {product.gallary&&.map((item,index)=>(  */}
                        {[1,2,3].map((item,index)=>(                                              
                        <Box key={uniqid()} onClick={()=>activeGallery(index)} style={id===index?{border:'1px solid rgb(210, 63, 87)'}:null}>
                           <Box>
                                 <img src={product.image} alt={product.title} />
                            </Box> 
                        </Box>                       
                    ))}
                      </StyleGallary>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                      <Grid container item xs={12}>
                        <Grid item xs={12} md={12}>
                          <Stack>
                            <Typography variant='h6' component='h2'>{product.title}</Typography>
                            <Typography marginTop='1rem' component='span'>دسته بندی:{product.category}</Typography>
                            <Box marginTop='1rem' display='flex'>
                            <Box component='span'>رتبه:</Box>
                            <Rating 
                             name="half-rating-read"
                             defaultValue={3}
                              precision={0.5} readOnly /> 
                              <Box component='span'>{`(${140})`}</Box>
                            </Box>
                            {/* <Box marginTop='2rem'>
                              <Box component='span'>Description</Box>
                            <Typography component='p'>Category:{product.description}</Typography>
                            </Box> */}
                          </Stack>
                        </Grid>
                        <Grid item xs={12} md={12}>
                                   <Paper sx={{padding:'1rem'}}>
                                      <Stack>
                                         <Box component='span'>
                                             <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'1rem',color:'#d32f2f' }} >{quantity * product.price>product.price?(quantity * product.price).toFixed(2):product.price} تومان</Box>
                                         </Box>
                                          <Stack>
                                           <Box 
                                           sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}
                                           >
                                           <Box component='span' color="#7d879c">{product.price} تومان</Box>
                                      <StyleIncrement>                           
                                           <Button  disabled={quantity?false:true} onClick={()=>handlerIncreaseCart(product)} variant="outlined" color='error'><AddIcon /></Button>    
                                           <ListItemText primary={quantity}/>                    
                                          <Button disabled={quantity?false:true}onClick={()=>handlerDecreaseCart(product)} variant="outlined" color='error'><RemoveIcon /></Button>
                                      </StyleIncrement> 
                                  </Box>
                                <Button 
                                   onClick={()=>handlerIncreaseCart(product)}
                                   disabled={quantity>=1?true:false}
                                   variant="outlined" startIcon={<ShoppingCartIcon />}>
                                    خرید
                              </Button>
                          </Stack>
                      </Stack>
                  </Paper>
              </Grid>
            </Grid>
         </Grid>
      </Grid>
  )
}
