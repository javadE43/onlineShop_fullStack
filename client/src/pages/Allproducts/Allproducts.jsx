import React, { useCallback, useEffect, useState } from "react";

import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import uniqid from "uniqid";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import { Card } from "../../subComponents/cardProducts/CardProducts";
import { service } from "../../data/productspagaintion";
import { BreadcrumbsPage } from "../../subComponents/Breadcumbs/Breadcrumbs";
import { SidebarCategory } from "../../subComponents/SidebarCategory/SidebarCategory";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  return (
    <Box componenet="section" marginTop="5rem" marginBottom="5rem">
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
            item
            md={12}
          >
            <Box padding="1rem">
              <SidebarCategory />
            </Box>
          </Grid>
          <>
            <Grid item xs={12} lg={12}>
              <BreadcrumbsPage />
              <Grid container item spacing={2}>
                {products.map((item) => (
                  <Grid key={uniqid()} item xs={12} sm={6} md={4}>
                    <Card item={item} />
                  </Grid>
                ))}
              </Grid>
              <PaginationControlled setProducts={(D) => setProducts(D)} />
            </Grid>
          </>
        </Grid>
      </Container>
    </Box>
  );
};

const pageSize = 6;
export function PaginationControlled({ setProducts }) {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const getproduct = () => {
    return new Promise((res, rej) => {
      let listproduct = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : null;
      if (listproduct.length > 0) {
        res(listproduct);
        return;
      } else {
        res(data);
        return;
      }
    });
  };
  const handleChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
    setPage(page);
  };

  useEffect(() => {
    getproduct().then((resList) => {
      service
        .getData({ from: pagination.from, to: pagination.to, data: resList })
        .then((res) => {
          setPagination({ ...pagination, count: res.count });
          setProducts(res.data);
          // console.log(res)
        });
    });
  }, [pagination.from, pagination.to, data]);

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      marginTop="3rem"
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        page={page}
        variant="outlined"
        color="error"
        onChange={handleChange}
      />
    </Stack>
  );
}

export default React.memo(Allproducts);
