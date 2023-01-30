import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useReducer } from "react";

export const useFormContext = createContext();

const INITIALVALUE = {
  data: localStorage.getItem("formdata")
    ? JSON.parse(localStorage.getItem("formdata"))
    : [],
  loding: true,
};

const reducer = (state = INITIALVALUE, action) => {
  switch (action.type) {
    case "success":
      return {
        ...state,
        data: action.payload,
        loding: false,
      };
      break;
    case "Logout":
      return {
        ...state,
        data: action.payload,
        loding: false,
      };
      break;
    default:
      return state;
  }
};

export const UseFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIALVALUE);
  return (
    <useFormContext.Provider value={{ state, dispatch }}>
      {children}
    </useFormContext.Provider>
  );
};
