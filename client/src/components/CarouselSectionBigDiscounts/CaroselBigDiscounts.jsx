import React, { useEffect, useState } from "react";

//
import { Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import uniqid from "uniqid";
import { CaroselCategoryHome } from "../../data/textSite";

//
import { StyleImage, StyleLink } from "./index";
import "./style.css";
import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";


export const CaroselBigDiscounts = () => {
  const theme = useTheme();
  const [product, setProduct] = useState([]);
  const { data, isLoading, error } = useGetAllProductsQuery();

  const getproduct = async () => {
    try {
      let listproduct = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : null;
      if (listproduct.length > 0) {
        setProduct(listproduct);
      } else {
        setProduct(await data.data);
      }
    } catch (error) {
      // console.log('error')
    }
  };
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <Box component="section">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0 1rem 0",
        }}
      >
        <span>
          <Link to="/">{CaroselCategoryHome.viewAll}</Link>
        </span>
        <Stack component="span" flexDirection="row">
          <Typography
            marginBottom="1rem"
            variant="h4"
            component="span"
            color={theme.palette.text.primary}
            fontWeight={theme.typography.fontWeightBold}
          >
            {" "}
            {CaroselCategoryHome.bigdiscount}
          </Typography>
        </Stack>
      </Box>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="carouselMainCard"
      >
        {/* API */}
        {data &&
          data.map((rtopatings, index) =>
            rtopatings.rating.rate > 4.4 ? (
              <SwiperSlide key={uniqid()} style={{ background: "transparent" }}>
                <Paper sx={{ width: "100%", padding: "1rem" }}>
                  <StyleLink to={`/product/${rtopatings.id}`}>
                    <Box>
                      <StyleImage>
                        <Box component="span">
                          <Box component="span"></Box>
                          <img src={rtopatings.image} alt="" />
                          {/* <img src={rtopatings.image} alt=''/>  */}
                        </Box>
                      </StyleImage>
                      <Typography
                        textAlign="start"
                        //  variant="h6"
                        //  component="span"
                        color={theme.palette.text.secondary}
                      >
                        {rtopatings.title.slice(0, 10)}
                        {/* {rtopatings.title.slice(0, 10)} */}
                      </Typography>
                      <Typography
                        textAlign="start"
                        variant="h6"
                        component="h2"
                        color={theme.palette.primary.main}
                      >
                         {rtopatings.price} تومان
                        {/* ${rtopatings.price} */}
                      </Typography>
                    </Box>
                  </StyleLink>
                </Paper>
              </SwiperSlide>
            ) : null
          )}

        {/* { newArrivals.map((newArrivals,index)=>(
               <SwiperSlide key={index} style={{background:"transparent"}}>     
               <Paper sx={{width:'100%',padding:'1rem'}}>       
               <StyleLink to='/'>
               <Box>
                 <StyleImage>
                   <span>
                     <span></span>
                     <img src={newArrivals.image} alt=''/> 
                    </span>
                  </StyleImage>
                 <Typography fontSize='1rem' variant="h6" component="h2" color='#2b3445'>{newArrivals.title}</Typography>
                 <Typography fontSize='1rem' variant="h6" component="h2" color='error'>${newArrivals.price}</Typography>
               </Box>
             </StyleLink>
             </Paper> 
           </SwiperSlide> 
           ))} */}
      </Swiper>
    </Box>
  );
};
