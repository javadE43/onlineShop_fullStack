import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import uniqid from "uniqid";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Collapse, ListItem } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

import {
  addToCart,
  decreaseCart,
  getTotal,
  removeallproducts,
  removeCart,
} from "../../containers/featcher/cart/cartslice";

import {
  StylePaper,
  StylePaperItem,
  StyleListCartShoping,
  StyleImageItemCartShoping,
  StyleIconButton,
} from "./index";

export const CartShopping = () => {
  const navigete = useNavigate();

  const [showproductsshopingcart, setShowproductsshopingcart] =
    React.useState(false);
  const cart = useSelector((store) => store.cart);
  const Dispatch = useDispatch();

  const handleClickAway = () => {
    setShowproductsshopingcart(false);
  };
  const handlerRemoveCart = (item) => {
    Dispatch(removeCart(item));
  };
  const handlerDecreaseCart = (item) => {
    Dispatch(decreaseCart(item));
  };
  const handlerremoveallproducts = () => {
    Dispatch(removeallproducts());
  };
  const handleraddtocart = (product) => {
    navigete("/cart");
  };
  React.useEffect(() => {
    Dispatch(getTotal());
  }, [cart]);

  return (
    <>
      <Box>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box>
            <StyleIconButton
              disableFocusRipple={true}
              disableRipple={false}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, position: "relative" }}
              onClick={() =>
                setShowproductsshopingcart(!showproductsshopingcart)
              }
            >
              <Badge badgeContent={cart.amount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </StyleIconButton>
            <Collapse
              sx={{ position: "absolute", top: "100%", zIndex: "1000",right:"-40%" }}
              in={showproductsshopingcart}
              timeout="auto"
              unmountOnExit
            >
              <StylePaper square={false} elevation={1} component="div">
                <StyleListCartShoping component="ul" disablePadding>
                  {cart.cartItem &&
                    cart.cartItem.map((product, index) => (
                      <div key={uniqid()}>
                        {/* <Divider /> */}
                        <StylePaperItem
                          square={false}
                          elevation={1}
                          component="li"
                        >
                          <IconButton
                            aria-label="delete"
                            onClick={() => handlerRemoveCart(product)}
                          >
                            <ClearRoundedIcon color="error" />
                          </IconButton>
                          <div>
                            <p style={{ color: "#0000ff" }}>{product.title}</p>
                            <div>
                              <span>
                                قیمت {product.price * product.cartQuantity}
                                <ClearRoundedIcon />{" "}
                              </span>
                              <span>{product.cartQuantity}</span>
                            </div>
                          </div>
                          <StyleImageItemCartShoping>
                            <img src={product.image} alt={product.title} />
                          </StyleImageItemCartShoping>
                        </StylePaperItem>
                      </div>
                    ))}
                  {cart.cartItem.length > 0 ? (
                    <>
                      {/* <Divider /> */}
                      <ListItem
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          onClick={() => handleraddtocart()}
                          variant="outlined"
                        >
                          مشاهده همه
                        </Button>
                      </ListItem>
                    </>
                  ) : (
                    <p>سبد خالی </p>
                  )}
                </StyleListCartShoping>
              </StylePaper>
            </Collapse>
          </Box>
        </ClickAwayListener>
      </Box>
    </>
  );
};
