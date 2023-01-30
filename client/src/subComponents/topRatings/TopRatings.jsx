import React, { useEffect, useState } from "react";

import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";

import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

import { Link } from "react-router-dom";

import uniqid from "uniqid";

import { StyleImage, StyleLink } from "./index";
import topRatings1 from "../../assets/topRatings/camera-1.webp";
import topRatings2 from "../../assets/topRatings/mobile-1.webp";
import topRatings3 from "../../assets/topRatings/shoes-2.webp";
import topRatings4 from "../../assets/topRatings/watch-1.webp";
import { CaroselCategoryHome, topRatingsBanners } from "../../data/textSite";

export const TopRatings = () => {
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

  const theme = useTheme();

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
            variant="h5"
            component="span"
            color={theme.palette.text.primary}
            fontWeight={theme.typography.fontWeightBold}
          >
            {CaroselCategoryHome.topRatings}
          </Typography>
        </Stack>
      </Box>
      <Paper
        square={false}
        elevation={2}
        component="div"
        sx={{ padding: "1rem" }}
      >
        <Grid
          container
          marginTop="-30px"
          sx={{ transform: "translateX(-1rem)" }}
        >
          {/* API */}
          {/* {product && product.map((rtopatings)=>(
               rtopatings.product_reviews.rating>4.6?
               <Grid item md={3} paddingLeft='32px' paddingTop='32px'>
               <StyleLink to='/'>
                 <Box>
                   <StyleImage>
                     <span>
                       <span></span>
                       <img src={rtopatings.image} alt=''/> 
                      </span>
                    </StyleImage>
                   <Box>
                    <Rating name="half-rating-read" value={rtopatings.product_reviews.rating} precision={0.5} readOnly />     
                     </Box>
                   <Typography variant="h6" component="h2" color='#2b3445'>rtopatings.title</Typography>
                   <Typography variant="h6" component="h2" color='error'>${rtopatings.price}</Typography>
                 </Box>
               </StyleLink>
             </Grid>
               :null
             ))} */}

          {topRatingsBanners.map((rtopatings) => (
            <Grid
              key={uniqid()}
              item
              md={3}
              sm={6}
              xs={6}
              paddingLeft="32px"
              paddingTop="32px"
            >
              <StyleLink to="/">
                <Box>
                  <StyleImage>
                    <span>
                      <span></span>
                      <img src={rtopatings.image} alt="" />
                    </span>
                  </StyleImage>
                  <Box>
                    <Rating
                      sx={{ fontSize: "1rem" }}
                      name="half-rating-read"
                      value={rtopatings.rating}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                  <Typography
                    fontSize="1rem"
                    variant="h6"
                    component="h2"
                    color={theme.palette.text.secondary}
                  >
                    {rtopatings.title}
                  </Typography>
                  <Typography
                    fontSize="1rem"
                    variant="h6"
                    component="h2"
                    color={theme.palette.primary.main}
                  >
                    {rtopatings.price} تومان  
                  </Typography>
                </Box>
              </StyleLink>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};
