import React from 'react'
import { Box,Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {useNavigate} from'react-router-dom';
export const BreadcrumbsPage = ({title}) => {

    const navigate=useNavigate();
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

