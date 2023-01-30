import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";

import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import { Card } from "../../subComponents/cardProducts/CardProducts";
import { SidebarCategory } from "../../subComponents/SidebarCategory/SidebarCategory";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import axios from "axios";
import { StylePaper } from "./index";
import {
  categoryApi,
  getcategorystatus,
  selectAllcategory,
} from "../../containers/featcher/category/categorySlice";
import { CaroselCategoryHome } from "../../data/textSite";

export const SectionBrands = () => {
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
        // seProduct(await data.data)
      }
    } catch (error) {
      // console.log('error')
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <Box component="section" sx={{ marginTop: "3rem" }}>
      <Grid container spacing={2}>
        <Grid sx={{ display: { xs: "none", lg: "flex" } }} item md={3}>
          <Sidebar />
        </Grid>
        <Grid item lg={9} xs={12}>
          <Box>
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
                  {CaroselCategoryHome.brands}
                </Typography>
              </Stack>
            </Box>
            <Grid container item spacing={3} xs={12}>
              {product &&
                product.slice(0, 6).map((card, index) => (
                  <Grid key={uniqid()} item xs={12} sm={6} md={4}>
                    <Card item={card} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Sidebar = () => {
  const [category, setCategory] = useState({});

  const dispatch = useDispatch();
  const cat = useSelector((state) => state.category);

  useEffect(() => {
    const getProduct = async () => {
      let data = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setCategory(data.data);
    };
    getProduct();
  }, []);

  return (
    <Box height="350px">
      <Paper sx={{ height: "100%" }}>
        <List component="ul" sx={{ height: "100%" }}>
          {category.length > 1 &&
            category.map((item, index) => (
              <ListItem key={uniqid()}>
                <StylePaper sx={{ width: "100%", background: "#f6f9fc" }}>
                  <Link
                    to={`/products/category/${item}`}
                    style={{ textTransform: "capitalize" }}
                  >
                    <Stack flexDirection="row" padding="0.5rem">
                      <Box component="span" marginRight="1rem"></Box>
                      <Box component="span" sx={{ overflow: "hidden" }}>
                        <Box component="span" marginLeft="0.5rem">
                          <Typography
                            fontWeight="bold"
                            color="error"
                            component="span"
                          >
                            {CaroselCategoryHome.brands}
                          </Typography>
                        </Box>
                        {item}
                      </Box>
                    </Stack>
                  </Link>
                </StylePaper>
              </ListItem>
            ))}
          <ListItem
            sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}
          >
            <StylePaper sx={{ width: "100%", background: "#fff" }}>
              <Box padding="0.5rem 1rem">
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  color="error"
                  component="div"
                >
                  <Link to="/products">
                    {" "}
                    {CaroselCategoryHome.viewAllBrands}
                  </Link>
                </Typography>
              </Box>
            </StylePaper>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};
