import React, { useEffect, useState } from "react";

//
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import BoltIcon from "@mui/icons-material/Bolt";
import Stack from "@mui/material/Stack";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//
import "./style.css";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { Card } from "../../subComponents/cardProducts/CardProducts";
import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import { CaroselCategoryHome } from "../../data/textSite";

export const CarouselListProducts = () => {
  const theme = useTheme();
  const [product, seProduct] = useState([]);
  const { data, isLoading, error } = useGetAllProductsQuery();

  const getproduct = async () => {
    try {
      let listproduct = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : null;
      if (listproduct.length > 0) {
        seProduct(listproduct);
      } else {
        seProduct(await data);
      }
    } catch (error) {
      // console.log('error')
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <section style={{ margin: "3rem 0" }}>
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
            {CaroselCategoryHome.flashDeals}
          </Typography>
          <BoltIcon color="error" />
        </Stack>
      </Box>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 5000 }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="carouselMainCard"
      >
        {product &&
          product.map((item, index) => {
            return (
              <SwiperSlide key={uniqid()} style={{ background: "transparent" }}>
                <Card item={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
