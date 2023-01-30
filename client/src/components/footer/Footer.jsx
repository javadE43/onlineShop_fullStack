import React,{useEffect,useState} from 'react'

//
import { Button, Container, Grid, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

//
import {StyleBox,StyleLink,StyleList} from './index'
import { footerInfo } from '../../data/textSite';


 const Footer = (props) => {
  return (
    <StyleBox 
      component='section'
    >
        <Container maxWidth='xl' 
         sx={{padding:'80px 0'}}
        >
             <Grid container>
                <Grid item md={4} sm={6} xs={12} >
                    <Stack>
                        <StyleLink to='/' 
                         style={{marginBottom:'20px'}}
                        >
                          <Typography variant='h4' component='h2'>
                                 {footerInfo.logo}
                          </Typography>
                        </StyleLink>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                            {footerInfo.description}
                          </Typography>
                           <Box 
                            display='flex'
                           >
                               <StyleLink to='/'>
                                 <Box 
                                 margin='8px'
                                 padding='10px 16px'
                                 borderRadius='5px'
                                 color='#fff'
                                 bgcolor='#0C2A4D'
                                 display='flex'
                                 >
                                      <GoogleIcon/>
                                      <Stack
                                      marginLeft='8px'
                                      >
                                        <Typography fontWeight='600' fontSize='8px' component='span'>
                                        </Typography>
                                        <Typography fontWeight='900' fontSize='14px' component='span'>
                                        گوگل پلی
                                        </Typography>
                                       </Stack>
                                 </Box>
                               </StyleLink> 
                          </Box>     
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6} xs={12} >
                    <Stack>
                        <Typography marginBottom='20px' fontWeight='600' fontSize='25px' component='span' color='#fff'>
                               درباره ما
                        </Typography>
                        <StyleList 
                        component='ul'
                        sx={{display:'flex',justifyContent:'center',flexDirection:'column',color:'#fff'}}
                        >
                            <ListItem>
                                <Link  to='/'>{footerInfo.abouts.about}</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>{footerInfo.abouts.contact}</Link>
                            </ListItem>
                            <ListItem>
                                <Link  to='/'>{footerInfo.abouts.privacyPolice}</Link>
                            </ListItem>
                        </StyleList>
                    </Stack>
                        
                </Grid>
                <Grid item md={3} sm={6} xs={12} >
                    <Stack>
                        <StyleLink to='/' 
                         style={{marginBottom:'20px'}}
                        >
                          <Typography variant='h4' component='h2'>
                         تماس با ما
                          </Typography>
                        </StyleLink>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                            {footerInfo.contactUs.address}
                          </Typography>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                          {footerInfo.contactUs.email}
                          </Typography>
                          <Typography component='p' color='#9095a3' marginBottom='20px'>
                          {footerInfo.contactUs.phone}
                          </Typography>
                           <Box 
                            display='flex'
                           >
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                     {footerInfo.icons.facebook}
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                  {footerInfo.icons.twiter}
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                  {footerInfo.icons.google}
                                  </IconButton>
                              </StyleLink>
                              <StyleLink to='/'>
                                  <IconButton aria-label="delete" size="small">
                                  {footerInfo.icons.linkdin}
                                  </IconButton>
                              </StyleLink>
                          </Box>     
                    </Stack>
                </Grid>
                <Grid item md={2} sm={6} xs={12} >
                    <Stack>
                        <Typography marginBottom='20px' fontWeight='600' fontSize='25px' component='span' color='#fff'>
                        {footerInfo.namad.title}
                        </Typography>
                    </Stack>
                </Grid>
             </Grid>  
        </Container>

    </StyleBox>
  )
}


export default React.memo(Footer)