import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const BASE_URL="http://localhost:4000/api/v1/"

export const productsApi=createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints:(builder)=>({
      getAllProducts:builder.query({
          query:()=>'products'
      })
    })
})

export const {useGetAllProductsQuery} = productsApi;


// export const productsApi=createApi({
//     reducerPath:'productsApi',
//     baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
//     endpoints:(builder)=>({
//       getAllProducts:builder.query({
//           query:()=>'product',
//           transformResponse: res => {
//             console.log(res.data)
//             return res.data;
//           },
//       })
//     })
// })

// export const {useGetAllProductsQuery} = productsApi;