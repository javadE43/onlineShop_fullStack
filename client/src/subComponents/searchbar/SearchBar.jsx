import React, { useEffect, useState, useTransition } from "react";

//
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { borderBottom, styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Box, Paper, TextField } from "@mui/material";
import uniqid from "uniqid";

//
import { useGetAllProductsQuery } from "../../containers/featcher/producApi/productApi";
import { search } from "../../containers/featcher/searchbar/searchbar";

import {
  StyleDiv,
  StyleImgSearch,
  StyledInputBase,
  SearchIconWrapper,
  Search,
  SearchB,
  StyleTextField,
  UlSearchBar,
} from "./index";

export const SearchBar = () => {
  const { id } = useNavigate();
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [inputvalue, setInputValue] = useState("");
  const [showboxsearchitem, setshowboxsearchitem] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.search);

  const handlershowboxsearchitem = () => {
    if (inputvalue !== "") {
      setshowboxsearchitem(true);
    }
    if (inputvalue == "") {
      setshowboxsearchitem(false);
    }
  };

  const handlerValueInput = (e) => {
    setInputValue(e.target.value);
  };

  const handlerSelectProductSearch = () => {
    setInputValue("");
  };

  useEffect(() => {
    if (data) {
      dispatch(search({ inputvalue, data }));
      handlershowboxsearchitem();
    }
  }, [inputvalue, id]);

  return (
    <>
      <SearchB>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="جستجو"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handlerValueInput(e)}
          value={inputvalue}
        />
        <StyleTextField
          id="SearchB"
          label="Search"
          value={inputvalue}
          variant="standard"
          // placeholder='Search...'
          onChange={(e) => handlerValueInput(e)}
        />
        {products && (
          <StyleDiv
            style={
              showboxsearchitem
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            <Paper>
              <UlSearchBar>
                {products.map((product, index) => {
                  return (
                    <React.Fragment key={uniqid()}>
                      <Divider />
                      <li onClick={handlerSelectProductSearch}>
                        <Link to={`product/${product.id}`}>
                          <StyleImgSearch>
                            <img src={product.image} alt="" />
                          </StyleImgSearch>
                          <p>{product.title}</p>
                        </Link>
                      </li>
                    </React.Fragment>
                  );
                })}
              </UlSearchBar>
            </Paper>
          </StyleDiv>
        )}
      </SearchB>
    </>
  );
};
