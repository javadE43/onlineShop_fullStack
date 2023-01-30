import React, { useEffect,useState } from 'react'
import {useNavigate} from'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Container, Grid, ListItemText, Paper, Rating, Stack, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import uniqid from 'uniqid';

import {StyleImage,StyleGallary,StyleIncrement}from './index'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, decreaseCart} from '../../containers/featcher/cart/cartslice';


export const ShowProduct=({product,data})=> {

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
          <Grid container>
                <Grid item xs={12} sm={12} md={4}>
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
                <Grid item xs={12} md={8}>
                      <Grid container item xs={12}>
                        <Grid item xs={12} md={9}>
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
                        <Grid item xs={12} md={3}>
                                   <Paper sx={{padding:'1rem'}}>
                                      <Stack>
                                         <Box component='span'>
                                             <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'1rem',color:'#d32f2f' }} >${quantity * product.price>product.price?(quantity * product.price).toFixed(2):product.price}</Box>
                                         </Box>
                                          <Stack>
                                           <Box 
                                           sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}
                                           >
                                           <Box component='span' color="#7d879c">${product.price}</Box>
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 export function BasicTabs({desc,review}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',marginTop:'2rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'error' }}>
        <Tabs 
           value={value} onChange={handleChange}
           aria-label="basic tabs example"
          //  textColor="secondary"
          //  indicatorColor="secondary"
         >
          <Tab label="توضیحات" {...a11yProps(0)} />
          <Tab label="نظرات" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {desc}
      </TabPanel>
      <TabPanel value={value} index={1}>
        نظرات
      </TabPanel>
    </Box>
  );
}

