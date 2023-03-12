import { Color, Theme } from "./types";

export const themeConf: Theme = {
  basic: {
    white: Color.WHITE,
    black: Color.BLACK,
    default: Color.DEFAULT,
    basic1: Color.BASIC1,
  },
  lightTheme: {
    text: Color.BLACK,
    background: Color.WHITE,
    opositeBackground: Color.BLACK,
    shadow: Color.SHDWBLACK,
  },
  darkTheme: {
    text: Color.WHITE,
    background: Color.BLACK,
    opositeBackground: Color.WHITE,
    shadow: Color.SHDWHIT,
  },
};
