import React, { createContext } from "react";
import { useState } from "react";

export const useFormContext = createContext();

export const usecontext = createContext();

export const UseProvider = ({ children }) => {
  const [id, setId] = useState();

  return (
    <usecontext.Provider value={{ setId, id }}>{children}</usecontext.Provider>
  );
};
