import React, { useState } from 'react'

//
import {Container, Grid } from '@mui/material'
import {Link} from 'react-router-dom';
import uniqid from 'uniqid';

//
import {dataListItem} from '../../data/datamenulist'


import {
  DivContainer,
  StyleLinkContainer,
  ContainerList,
  RowList,
  StylePaper,
  StylePaperSubmenu} from'./index'

export const MenuDesktop = () => {

  const [id,setId]=useState()
  const [showSubmenu,setShowSubmenu]=useState(true)

  const handlerOpenSubmenu=(id)=>{
    setShowSubmenu(true)
    setId(id)
  }

  const handlerCloseSubmenu=(id)=>{
    setShowSubmenu(false)
    setId(null)
  }

  return (
    <DivContainer>
    <Container maxWidth='100%'>
      <Grid 
        container
        justifyContent='start'
        alignItems='center'
       >
         {dataListItem.map((itemL)=>{
            return(
              <React.Fragment key={uniqid()}>
            <Grid item style={{flexBasis:'auto'}}>
              <StyleLinkContainer onMouseLeave={()=>handlerCloseSubmenu()} onMouseEnter={()=>handlerOpenSubmenu(itemL.id)} >
              <Link  
                  to={itemL.path}>
                  <span>{itemL.icone}</span>
                  {itemL.title}
              </Link>
              <Dropdown open={showSubmenu} item={itemL} id={itemL.id}index={id}/>
              {/* {id===itemL.id?<Dropdown open={showSubmenu} item={itemL} id={itemL.id}index={id}/>:null} */}
              </StyleLinkContainer>
            </Grid>
            </React.Fragment>
            )
         })}
      </Grid>
    </Container>
  </DivContainer>
  )
}



export const Dropdown = ({item,open,id,index}) => {
  const [checked, setChecked] = React.useState(true);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {item.subMenu && <><StylePaper square={false}  elevation={2} component='ul'>
         {item.subMenu&&item.subMenu.map((itemL,index)=>{
            return(
            <React.Fragment key={uniqid()}>
              {/* <Divider/> */}
              
              <li key={index}>
                <ContainerList>
                  <RowList>
                    <Link  
                      to={itemL.path}>
                      {itemL.title}
                      {itemL.icone}
                  </Link>
                 </RowList>
                </ContainerList>
                {itemL.subMenu?<Submenu item={itemL}/>:null}
            </li>
          </React.Fragment>
            )
         })}
    
        </StylePaper>
        </> 
        }
    </>
  )
}


export const Submenu = ({item}) => {
  return (
       <>
       <StylePaperSubmenu square={false}  elevation={2} component='ul'>
         {item.subMenu.map((itemL,index)=>{
            return(
              <li key={uniqid()}>
                <ContainerList>
                  <RowList>
                    <Link  
                      to={itemL.path}>
                      {itemL.title}
                  </Link>
                 </RowList>
                </ContainerList>
            </li>
            )
         })}
         </StylePaperSubmenu>
      </>
  )
}
