import React, { useEffect,useState } from 'react'
import {useNavigate, useParams,Link as LinkRouter} from'react-router-dom';
import axios from 'axios';
import uniqid from 'uniqid';

import { Box, Container, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/system';

import { Card } from '../../subComponents/cardProducts/CardProducts';
import {Loding}from '../../subComponents/Loding/Loding'

 const CategoryProducts = () => {
   
    const theme=useTheme()
    const {id}=useParams();
    const [category,setCategory]=useState({});

useEffect(()=>{
  const getProduct= async ()=>{
   let data=await axios.get(`https://fakestoreapi.com/products/category/${id}`);
   setCategory(data.data)
  }
  getProduct()

},[id])


  return (
    <Box componenet='section' marginTop='5rem' marginBottom='5rem'>
    <Container maxWidth='lg' >
      <Grid container>
        <Grid sx={{display:{ xs:'none',lg:'flex' },justifyContent:'center' }} item md={12}>
             <Box
              padding='1rem' >
                <SidebarCategory/>
             </Box>
        </Grid>
         {Object.keys(category).length>0?
        <>
         <Grid item xs={12} md={12}>
         <BasicBreadcrumbs title={category[0]}/>        
         <Grid container item spacing={2}> 
          {category.map((item)=>(
             
               <Grid key={uniqid()} item xs={12} sm={6} md={4}>
               <Card item={item}/>
               </Grid>
            
         ))}   
             
         </Grid>
         </Grid>
          </> 
        :<Loding/>}
      </Grid>
    </Container >
    </Box>
  )
}

export const SidebarCategory = () => {

  const [category,setCategory]=useState({});
  useEffect(()=>{
    const getProduct= async ()=>{
     let data=await axios.get(`https://fakestoreapi.com/products/categories`);
     setCategory(data.data)
  
    }
    getProduct()
  
  },[])

  return (

    <Box>
      <List component='ul'  
        sx={{display:'flex',alignItems:"center",justifyContent:'space-between'}}   
    >
        {
          category.length>1 && category.map((item,index)=>(
            <ListItem key={uniqid()}  sx={{width:'auto'}}>
            <Paper sx={{width:'100%',background:'#fff'}}>
            <LinkRouter to={`/products/category/${item}`}
                      
            style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:"#333",
            textDecoration:'none',
            padding:'0.5rem 1rem',
            textTransform:'capitalize',
            width: '180px',
                      }}
                    >
                        <Box component='span'>
                           {item}
                        </Box>
                    </LinkRouter>
                    </Paper>
                   </ListItem>
                    ))
                  }
               </List>
      </Box>
  )
}



export function BasicBreadcrumbs({title}) {
  const navigate=useNavigate()  
  const handleClick=(event,hr) =>{
    event.preventDefault();
    navigate(hr)

  }
  return (
    <Box margin='1rem 0' role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
        underline="hover" 
        color="inherit" 
        onClick={(e)=>handleClick(e,'/')}
        href="/">

          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          onClick={(e)=>handleClick(e,'/products')}
          href="/products"
        >
          Products
        </Link>
        {title?<Typography color="text.primary">{title.category}</Typography>:null}
      </Breadcrumbs>
    </Box>
  );
}



export default React.memo(CategoryProducts)