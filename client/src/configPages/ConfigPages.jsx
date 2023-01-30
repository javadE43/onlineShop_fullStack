
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Allproducts  from '../pages/Allproducts/Allproducts'
import Cart from '../pages/cartshopping/Cart'
import CategoryProducts from '../pages/categoryProducts/CategoryProducts'
import  DetailsProduct  from '../pages/detailsProduct/DetailsProduct'
import {NotFount} from '../pages/notfount/NotFount'
import Home from '../pages/Home'
import SignUp  from '../subComponents/signup/SignUp'

 const ConfigPages = () => {
  return (
    <div>
        <Routes>
            <Route path='/'element={<Home/>}></Route>
            <Route path='/cart'element={<Cart/>}></Route>
            <Route path='/products' element={<Allproducts/>}></Route>
            <Route path='/product/:id' element={<DetailsProduct/>}></Route>
            <Route path='/products/category/:id' element={<CategoryProducts/>}></Route>
            <Route path='/login'element={<SignUp/>}></Route>
            <Route path='*'element={<NotFount/>}></Route>
        </Routes>
    </div>
  )
}


export default React.memo(ConfigPages)