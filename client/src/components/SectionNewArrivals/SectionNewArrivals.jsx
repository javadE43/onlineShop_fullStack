import React, { useEffect, useState } from "react";

//
import { Grid, Stack, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

//
import { StyleImage, StyleLink } from "./index";
import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import { CaroselCategoryHome, newArrivalsBanner } from "../../data/textSite";

export const SectionNewArrivals = () => {
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
            {CaroselCategoryHome.newArrivals}
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
             rtopatings.product_review.rating>4.4?
             <Grid item md={2} xs={6} paddingLeft='32px' paddingTop='32px'>
             <StyleLink to='/'>
               <Box>
                 <StyleImage>
                   <Box component='span'>
                     <Box component='span'></Box>
                     <img src={rtopatings.image} alt=''/> 
                    </Box>
                  </StyleImage>
                 <Typography variant="h6" component="h2" color='#2b3445'>rtopatings.title</Typography>
                 <Typography variant="h6" component="h2" color='error'>${rtopatings.price}</Typography>
               </Box>
             </StyleLink>
           </Grid>
             :null
           ))} */}

          {newArrivalsBanner.map((newArrivals) => (
            <Grid
              key={uniqid()}
              item
              md={2}
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
                      <img src={newArrivals.image} alt="" />
                    </span>
                  </StyleImage>
                  <Typography
                    fontSize="1rem"
                    variant="h6"
                    component="h2"
                    color="#2b3445"
                  >
                    {newArrivals.title}
                  </Typography>
                  <Typography
                    fontSize="1rem"
                    variant="h6"
                    component="h2"
                    color="error"
                  >
                    {newArrivals.price}
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
