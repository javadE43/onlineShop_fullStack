import React, { useContext, useEffect, useState } from 'react'
// import {DrawerHeader} from '../../styles/appbar/appbar'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {IconButton, Switch} from '@mui/material'
import {dataListItem} from '../../data/datamenulist'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


import {usecontext,UseProvider}from '../../context/menuM'


 import {
   styleanimation,
   StyleBox,
   StyleListitemButton,
   StyleList,
   StyleListItemText,
   StyleListitemButtonMain,
   StyleListMain,
   StyleListItem,
   StyleListSubheader,
   DrawerHeader,
  } from './index'

  import uniqid from 'uniqid';


export const DraweMenu = ({onClose,open}) => {

  const [id,setId]=useState()
  const [index,setIndex]=useState(1)

  const handlerOpenSubmenu=(id)=>{
    if(!open){
      setIndex(1)
    }
    setIndex(index + 1)
    setId(id)
  }

  useEffect(()=>{
    if(!open){
      setIndex(1)
    }
  },[open])

  return (
    <div>
      <UseProvider>
      <Box  sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
            // hideBackdrop={true}
            // elevation='16'
          >
              <DrawerHeader>
                  <IconButton onClick={onClose}>
                    <ChevronRightIcon/>
                  </IconButton>
            </DrawerHeader>
             <Divider/>
             <Box  sx={{width:'300px'}}>
                  <List 
                      // component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <StyleListSubheader component="div" id="nested-list-subheader">
                        منو اصلی
                        </StyleListSubheader>
                      }
                    >
                       <Divider/>
                     <ListItem>
                       <ListItemButton sx={{display: 'flex',justifyContent:'start'}}>
                         <Link to='/'style={{display: 'flex',alignItems:'center',textDecoration:'none',color:'#000'}}>
                       {/* <StyleListItemText primary='Home'/> */}
                         <ListItemIcon sx={{display: 'flex',justifyContent:'start'}}>
                                <HomeIcon/>
                         </ListItemIcon>
                         </Link>
                       </ListItemButton>
                     </ListItem>
                      {dataListItem.map((itemL)=>{
                          return(
                            <React.Fragment key={uniqid()}>
                            {itemL.title?<>
                             <Divider/>
                            <StyleListItem>
                          <StyleListitemButtonMain>

                          <Link to={itemL.title}>
                            <StyleListItemText primary={itemL.title} />
                          </Link>
                          <ListItemIcon  onClick={()=>handlerOpenSubmenu(itemL.id)}>
                             <ChevronLeftIcon/>
                             <Divider orientation="vertical" flexItem />
                          </ListItemIcon>
                            {itemL.id===id?<DropdownMobile Back={{setIndex,index}} category={itemL.category} item={itemL}/>:null}
                          </StyleListitemButtonMain>
                          </StyleListItem>
                          </>:null}
                          </React.Fragment>
                          )
                      })}
                </List>
             </Box>
          </Drawer>
        </Box>
        </UseProvider>
    </div>
  )
}








export const DropdownMobile = ({item,category,Back}) => {
  const {id}=useContext(usecontext)
  {switch(Back.index) {
    case 2:
       return( <Dropdown item={item} category={category} Back={Back}/>)
    break;
    case 3:
       return( 
          <> 
            {item.subMenu?    
          <>
            {item.subMenu.map((item)=>(
            <React.Fragment key={uniqid()}>
               {id === item.id && <><Dropdown  item={item} category={category} Back={Back}/></>}
            </React.Fragment>
    ))}      
          </> 
        :
        null
        }
      </> 
     )
    break;
    default:
      return null
      break;
  }}
 
}



export const Dropdown = ({item,category,Back,handleid}) => {
  const {setId}=useContext(usecontext)
  const handlerOpenSubmenu=(id)=>{
    setId(id)
    Back.setIndex(Back.index + 1)
  }
  const handlerBack=()=>{
    Back.setIndex(Back.index - 1)
  }
return (
  <>
  {item.subMenu &&<StyleBox>
       
        <StyleList >
          <ListItemButton>
          <ListItemIcon onClick={handlerBack}>
                <ChevronRightIcon/>
        </ListItemIcon>
        {category&& <ListItemText primary={category}/>}
          </ListItemButton>
        <Divider/>
     {item.subMenu&&item.subMenu.map((itemL,index)=>{
        return(
          <React.Fragment key={uniqid()}>
           <Divider/>
          
          <ListItem >
            <StyleListitemButton>
              <ListItemIcon onClick={()=>handlerOpenSubmenu(itemL.id)}>
                 {itemL.iconeM?itemL.iconeM:null}
              </ListItemIcon>
                <Link  
                  to={itemL.path}>
                  {itemL.title}
              </Link>
            </StyleListitemButton>
        </ListItem>
        </React.Fragment>
        )
     })}
     </StyleList>
     </StyleBox>
     }
 
</>
)
}
