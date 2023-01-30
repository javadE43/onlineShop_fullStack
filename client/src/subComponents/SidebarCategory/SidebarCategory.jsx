import { List, ListItem, Paper } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

export const SidebarCategory = () => {

    const [category,setCategory]=useState({});
    useEffect(()=>{
      const getProduct= async ()=>{
       let data=await axios.get(`https://fakestoreapi.com/products/categories`);
       setCategory(data.data)
      }
      getProduct()
    },[category])
    return (
  
      <Box>
        <List component='ul'  
          sx={{display:'flex',alignItems:"center",justifyContent:'space-between'}}   
      >
          {
            category.length>1 && category.map((item,index)=>(
              <ListItem key={uniqid()}  sx={{width:'auto'}}>
              <Paper sx={{width:'100%',background:'#fff'}}>
              <Link to={`/products/category/${item}`}
                        
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
                      </Link>
                      </Paper>
                     </ListItem>
                      ))
                    }
           </List>
        </Box>
    )
}

