import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const NotFount = () => {
  return (
    <Box 
       height='100vh'
       width='100vw'
       bgcolor='#e1e1e1'
       display='flex'
       justifyContent='center'
       alignItems='center'
       >
      <Typography 
        color='#fff' 
        variant='h2' 
        component='span'>Not Found</Typography></Box>
  )
}
