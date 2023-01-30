import React from'react'
import { Box, Container } from "@mui/material";
import { SectionProductsRatings } from "../components/SectionProductRatings/SectionProductsRatings";
import { SectionNewArrivals } from '../components/SectionNewArrivals/SectionNewArrivals';
import { CaroselBigDiscounts } from '../components/CarouselSectionBigDiscounts/CaroselBigDiscounts';
import { CarouselListProducts } from '../components/CarouselListProduct/CarouselListProducts';
import { CarouselHome } from '../components/CarouselHome/CarouselHome';
import CarouselCategory from '../components/CarouselCategory/CarouselCategory';
import { SectionBrands } from '../components/SectionBrands/SectionBrands';

const Home = () => {
    return (
      <Box marginBottom='70px'>
      <CarouselHome/>
        <Container fixed>
           <CarouselListProducts/> 
           <CarouselCategory/>
           <SectionProductsRatings/>
           <SectionNewArrivals/>
           <CaroselBigDiscounts/>
           <SectionBrands/>
       </Container>
     </Box>
    )
};

export default React.memo(Home)





