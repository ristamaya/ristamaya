import { createContext, useContext } from "react";

interface themeContext {
  useTheme: String;
  setUseTheme: any;
}

const defaultContext = {
  useTheme: "root",
  setUseTheme: null,
};

export const LayoutContext = createContext<themeContext>(defaultContext);
export const LayoutProvider = LayoutContext.Provider;
