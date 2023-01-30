import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from'react-router-dom';
import { useGetAllProductsQuery } from '../../containers/featcher/producApi/productApi';
import axios from 'axios';
import { BasicTabs, ShowProduct } from '../../components/ProductDetails/ProductDeatils';
import {Loding} from '../../subComponents/Loding/Loding'
import { Box, Container } from '@mui/material';
    
 const DetailsProduct = () => {

  const {data,isLoading,error}=useGetAllProductsQuery()
  const {id}=useParams();
  const [product,setProduct]=useState({});
  useEffect(()=>{
  const getProduct= async ()=>{
   let datanew=await axios.get(`https://fakestoreapi.com/products/${id}`);
   setProduct(datanew.data)
  }
  getProduct()

},[id])

  return (
    <>
      {Object.keys(product).length>1?
      <Box>
        <Container maxWidth='xl' sx={{margin:'2rem auto'}}>
          <ShowProduct product={product} data={data}/>
          <BasicTabs desc={product.description}/>
        </Container>
      </Box>
      :<Loding/>}
    </>
  )
}

export default DetailsProduct