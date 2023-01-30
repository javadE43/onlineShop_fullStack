import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState={
    cartItem:localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems'))
    :
    [],
    amount:0,
    total:0,
    isloding:true,
    popPro:[],
};


 const cartSlice = createSlice({
     name:'cart',
     initialState,
     reducers:{

        // Add product to cart
        addToCart:(state,{payload})=>{
           const itemIndex=state.cartItem.findIndex(
               (item)=> item.id === payload.id
           );
        //  Product availability
           if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity +=1;
        // popup Product increase
                toast.info(
                    `increased cart quantity`,
                        {
                            position:"bottom-left"
                        }
                    )
           } else {
        // Product not available
                const temProduct={...payload,cartQuantity:1};
                state.cartItem.push(temProduct) 
        // popup new product
                toast.success(
                    `Added to cart`,
                    {
                        position:"bottom-left"
                    }
               ); 
           }
        //Local storage of the product    
           localStorage.setItem('cartItems',JSON.stringify(state.cartItem))
        },
        // Action Remove Cart   
        removeCart:(state,{payload})=>{
        //Delete the item via ID 
           let newcartitem=state.cartItem.filter((cartitem)=>{
           return cartitem.id !== payload.id
            })
        // Array obtained from the filter
            state.cartItem=newcartitem;
            toast.error(`Remove`,{
                position:"bottom-left"
            }) 
        //LocalStorage update 
            localStorage.setItem('cartItems',JSON.stringify(state.cartItem))
            
        },
       // decreaseCart
        decreaseCart:(state,{payload})=>{
       //Obtain product index 
            const itemIndex=state.cartItem.findIndex((item)=>{
                return item.id === payload.id
            });
            if (state.cartItem[itemIndex].cartQuantity > 1) {
                state.cartItem[itemIndex].cartQuantity -= 1; 
                toast.info(`DecreaseCart`,{
                    position:"bottom-left"
                }) 
                
            }else if(state.cartItem[itemIndex].cartQuantity === 1){
                let newcartitem=state.cartItem.filter((cartitem)=>{
                return cartitem.id !== payload.id
                 })
        // Array obtained from the filter
                state.cartItem=newcartitem;
                 toast.error(`Remove`,{
                     position:"bottom-left"
                 }) 
        //LocalStorage update 
                 localStorage.setItem('cartItems',JSON.stringify(state.cartItem)) 
                }
            },
        // Remove all products
        removeallproducts:(state,action)=>{
                state.cartItem=[];
                toast.error(`Remove all products`,{
                    position:"bottom-left"
                })
                
            localStorage.setItem('cartItems',JSON.stringify(state.cartItem)) 
        },

       getTotal:(state,action)=>{
           let {total,quantity}=state.cartItem.reduce(
               (cartTotal,item)=>{
                   const {price,cartQuantity}=item;
                   const itemTotal=price * cartQuantity;

                   cartTotal.total +=itemTotal;
                   cartTotal.quantity +=cartQuantity;

                   return cartTotal;
               },
               {
                   total:0,
                   quantity:0
               }
           );
           state.amount=quantity;
           state.total=total
           
       },

        
        
    },
});

export const {addToCart,removeCart,decreaseCart,removeallproducts,getTotal}=cartSlice.actions


export default cartSlice.reducer;
