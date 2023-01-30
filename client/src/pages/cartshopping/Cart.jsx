import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Autocomplete,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useNavigate } from "react-router-dom";

import {
  StyleImg,
  StyleIncrement,
  StyleButtonRemove,
  StylePrice,
  StyleOutlinedInput,
  StyleFormControl,
} from "./index";
// import { useTheme } from '@emotion/react';
import {
  addToCart,
  decreaseCart,
  getTotal,
  removeallproducts,
  removeCart,
} from "../../containers/featcher/cart/cartslice";
import { Box, useTheme } from "@mui/system";

import uniqid from "uniqid";
import { countries } from "../../data/dataCountries";

const Cart = () => {
  // console.log('cartshopingPage')

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useSelector((store) => store.cart);
  const Dispatch = useDispatch();

  const handlerRemoveCart = useCallback(
    (item) => {
      Dispatch(removeCart(item));
    },
    [cart.cartItem]
  );

  const handlerDecreaseCart = useCallback(
    (item) => {
      Dispatch(decreaseCart(item));
    },
    [cart.cartItem]
  );

  const handlerremoveallproducts = useCallback(() => {
    Dispatch(removeallproducts());
  }, []);

  const handlerIncreaseCart = useCallback(
    (item) => {
      Dispatch(addToCart(item));
    },
    [cart.cartItem]
  );

  useEffect(() => {}, [cart.cartItem]);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "4rem" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Stack>
            <Typography
              color={theme.palette.text.secondary}
              variant="h3"
              component="h2"
              marginY={2}
              textAlign="center"
            >
              سبد خرید
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              variant="h6"
              component="div"
              textAlign="center"
            >
              سبد
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          {cart.cartItem.length > 0 ? (
            cart.cartItem.map((product) => (
              <Grid
                key={uniqid()}
                item
                xs={12}
                position="relative"
                marginBottom="1rem"
              >
                <Paper
                  square={false}
                  elevation={2}
                  component="div"
                  sx={{ width: "100%", padding: "0.5rem" }}
                >
                  <Grid
                    spacing={2}
                    container
                    item
                    justifyContent="space-between"
                    flexDirection="row"
                  >

                    <Grid
                      container
                      item
                      md={11}
                      sm={10}
                      xs={12}
                      justifyContent="space-between"
                      flexDirection="column"
                    >
                      <Grid item sx={{ paddingLeft: { xs: "0", md: "2rem",display:"flex",justifyContent:"end" } }}>
                        <Typography variant="h6">{product.title}</Typography>
                      </Grid>
                      <Grid
                        container
                        item
                        justifyContent="space-between"
                        sx={{ paddingLeft: { xs: "0", md: "2rem" } }}
                      >
                        <Grid item>
                          <StylePrice>
                            <Typography
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              color="#8f98aa"
                              component="span"
                            >
                              {product.price} تومان
                              <ClearIcon />
                            </Typography>
                            <Typography
                              color="error"
                              component="span"
                              marginLeft="0.7rem"
                            >
                              {product.price * product.cartQuantity} تومان
                            </Typography>
                          </StylePrice>
                        </Grid>

                        <Grid item>
                          <StyleIncrement>
                            <Button
                              onClick={() => handlerIncreaseCart(product)}
                              variant="outlined"
                              color="error"
                            >
                              <AddIcon />
                            </Button>
                            <ListItemText primary={product.cartQuantity} />
                            <Button
                              onClick={() => handlerDecreaseCart(product)}
                              variant="outlined"
                              color="error"
                            >
                              <RemoveIcon />
                            </Button>
                          </StyleIncrement>
                        </Grid>
                      </Grid>
                      <StyleButtonRemove>
                        <IconButton onClick={() => handlerRemoveCart(product)}>
                          <CloseIcon />
                        </IconButton>
                      </StyleButtonRemove>
                    </Grid>
                    <Grid item md={1} sm={2} xs={12}>
                      <StyleImg src={product.image} alt="" />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))
          ) : (
            <Box
              height={{ xs: "auto", md: "50%" }}
              padding="1rem"
              marginTop="3rem"
              width="100%"
              textAlign="center"
              boxShadow={theme.shadows[7]}
            >
              <Stack justifyContent="center" alignItems="center">
                <LocalMallOutlinedIcon
                  color="error"
                  sx={{ fontSize: "13rem" }}
                />
                <Typography
                  fontSize={{ sm: "1.5rem", md: "2rem" }}
                  component="div"
                  color={theme.palette.primary.main}
                >
                 محصولی وجود ندارد
                </Typography>
              </Stack>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={3}>
          <SidebarCart />
        </Grid>
        {cart.cartItem.length > 0 && (
          <Grid item xs={12}>
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              marginTop="1rem"
            >
              <Paper component="span">
                <Button variant="contained" onClick={handlerremoveallproducts}>
                  حذف همه
                </Button>
              </Paper>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

const currencies = [
  {
    value: "USD",
    label: "New York",
  },
  {
    value: "EUR",
    label: "Chicago",
  },
];

export const SidebarCart = () => {
  const [value, setValue] = useState({
    massege: "",
    voucher: "",
    country: "",
    city: "",
    zipCode: "",
  });

  const [currency, setCurrency] = useState("");

  const cart = useSelector((store) => store.cart);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      sx={{
        padding: "1rem 0",
      }}
    >
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="1rem 0"
        >
          <Typography component="span">مبلغ:</Typography>
          <Typography component="span">{cart.total} تومان</Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          justifyContent="start"
          alignItems="center"
          padding="0.7rem 0"
        >
          <Typography component="span">نظرات</Typography>
          <Typography
            marginLeft="0.7rem"
            bgcolor="#d32f2f"
            fontSize="0.8rem"
            component="span"
            padding="0.3rem 0.5rem"
          >
            توجه
          </Typography>
        </Box>
        <form onSubmit={(e) => handleOnsubmit(e)}>
          <Box marginBottom="1rem">
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="پیام"
                multiline
                rows={5}
                maxRows={10}
                fullWidth
              />
            </FormControl>
          </Box>
          <Divider />

          <Box>
            <Stack>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={{ top: "-0.5rem" }} htmlFor="voucher">
                  کد
                </InputLabel>
                <StyleOutlinedInput
                  id="voucher"
                  type="text"
                  // value={values.password}
                  // onChange={handleChange('password')}
                  label="voucher"
                />
              </FormControl>
              <Button variant="outlined" sx={{ margin: "1rem 0" }}>
                ارسال کد
              </Button>
            </Stack>
          </Box>
          <Divider />
          <Box>
            <Stack>
              <Typography
                marginTop="1.5rem"
                marginBottom="1rem"
                component="span"
              >
               اطلاعات
              </Typography>
              <StyleFormControl fullWidth>
                <Autocomplete
                  id="country-select"
                  fullWidth
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="انتخاب کشور"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label=" انتخاب شهر"
                  value={currency}
                  onChange={handleChange}
                  // helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField label="کد پستی" placeholder="کد پستی" fullWidth />

                <Button
                  variant="outlined"
                  sx={{ margin: "1rem 0", textTransform: "capitalize" }}
                  type="submit"
                >
                  محاسبه
                </Button>
                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                >
                  اکنون پرداخت کنید
                </Button>
              </StyleFormControl>
            </Stack>
          </Box>
        </form>
      </Container>
    </Paper>
  );
};

export default React.memo(Cart);
