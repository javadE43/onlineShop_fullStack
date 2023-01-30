import { Backdrop, Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

export function Loding() {
    const [open, setOpen] =useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    useEffect(() => {
      handleToggle()
    }, [])
    return (
      <Box 
         coponent='div'
         bgcolor='#f4f7fa'
         sx={{width:'100%',height:'100vh'}}
         >
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    )
  }