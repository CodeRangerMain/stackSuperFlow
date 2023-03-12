import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeConf } from "shared/styles/colors/colors";
import { ContextProps } from "contexts/types";

export const CustomThemeContext = createContext<any>(null);

export const CustomThemeProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState("light");
  const activeTheme =
    theme === "light" ? themeConf.lightTheme : themeConf.darkTheme;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <CustomThemeContext.Provider value={{ activeTheme, toggleTheme, theme }}>
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
