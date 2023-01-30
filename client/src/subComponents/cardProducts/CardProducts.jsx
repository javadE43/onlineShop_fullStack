import React, { useState } from "react";

//
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import ButtonBase from "@mui/material/ButtonBase";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

//
import {
  addToCart,
  decreaseCart,
  getTotal,
} from "../../containers/featcher/cart/cartslice";
import {
  StyleContentItemAddProduct,
  StyleContentItemIcone,
  StyleContentItem,
  StyleContent,
  StyleIconsHeader,
  StyleContainer,
  StyleImageCartd,
  StyleChip,
} from "./index";
import "./style.css";
import { ViewProductModal } from "../../components/ViewProductModal/ViewProductModal";
import { offerProduct } from "../../data/textSite";

export const Card = ({ item }) => {
  const [Visibility, setVisibility] = useState(false);
  const [select, seSelect] = useState(false);
  const cart = useSelector((store) => store.cart);
  const { cartItem } = useSelector((store) => store.cart);
  const Dispatch = useDispatch();

  const handlerDecreaseCart = (item) => {
    Dispatch(decreaseCart(item));
  };

  const handlerIncreaseCart = (item) => {
    Dispatch(addToCart(item));
    // console.log(item)
  };

  React.useEffect(() => {
    Dispatch(getTotal());
  }, [cart]);

  return (
    <>
      <Paper
        square={false}
        elevation={2}
        component="div"
        sx={{ width: "100%" }}
      >
        <StyleContainer>
          <Box>
            <StyleIconsHeader>
              <ButtonBase>
                <IconButton
                  onClick={() => setVisibility(!Visibility)}
                  component="span"
                >
                  <VisibilityIcon />
                </IconButton>
              </ButtonBase>

              <ButtonBase onClick={() => seSelect(!select)}>
                <IconButton component="span">
                  {select ? (
                    <FavoriteIcon color="#ff0000" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </ButtonBase>
            </StyleIconsHeader>
            <StyleChip>
              <Chip label={offerProduct.offer} color="error" />
              {/* <Chip label={item.discount} color="error" /> */}
            </StyleChip>
            <StyleImageCartd sx={{ textAlign: "center" }}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} />
                {/* <img src={item.image}/> */}
              </Link>
            </StyleImageCartd>
          </Box>

          <StyleContent>
            <StyleContentItem>
              <span
                style={{
                  maxHeight: "20px",
                  overflow: "hidden",
                  textAlign: "initial",
                }}
              >
                {item.title}
              </span>
              <span>
                <Rating
                  name="size-medium"
                  defaultValue={item.rating.rate}
                  size="small"
                />
                {/* <Rating name="size-medium" defaultValue={item.product_reveiw.rating} size="small" /> */}
              </span>
              <span>
                {item.price} تومان
                {/* ${item.price} */}
              </span>
            </StyleContentItem>
            <StyleContentItemIcone>
              <ButtonBase onClick={() => handlerIncreaseCart(item)}>
                <IconButton color="primary" component="span">
                  <ShoppingCartIcon fontSize="medium" />
                </IconButton>
              </ButtonBase>
              <StyleContentItemAddProduct>
                <ButtonBase>
                  <IconButton
                    color="primary"
                    component="span"
                    onClick={() => handlerIncreaseCart(item)}
                  >
                    <AddBoxOutlinedIcon fontSize="medium" />
                  </IconButton>
                </ButtonBase>
                {cartItem &&
                  cartItem.map((product) =>
                    product.id === item.id ? (
                      <React.Fragment key={uniqid()}>
                        <span>{product.cartQuantity}</span>
                        <ButtonBase onClick={() => handlerDecreaseCart(item)}>
                          <IconButton color="primary" component="span">
                            <CancelPresentationRoundedIcon fontSize="medium" />
                          </IconButton>
                        </ButtonBase>
                      </React.Fragment>
                    ) : null
                  )}
              </StyleContentItemAddProduct>
            </StyleContentItemIcone>
          </StyleContent>
        </StyleContainer>
      </Paper>
      {Visibility && (
        <ViewProductModal
          setVisibility={setVisibility}
          Visibility={Visibility}
          id={item.id}
        />
      )}
    </>
  );
};
