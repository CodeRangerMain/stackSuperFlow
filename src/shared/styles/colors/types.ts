export enum Color {
  WHITE = "#FFFFFF",
  BLACK = "#000000",
  DEFAULT = "#FCFEFF",
  BASIC1 = "#e3e6e8",
  SHDWBLACK = "rgba(0, 0, 0, 0.25)",
  SHDWHIT = "rgba(255, 255, 255, 0.25)",
}

export interface Theme {
  basic: {
    white: Color.WHITE;
    black: Color.BLACK;
    default: Color.DEFAULT;
    basic1: Color.BASIC1;
  };
  lightTheme: {
    text: Color.BLACK;
    background: Color.WHITE;
    opositeBackground: Color.BLACK;
    shadow: Color.SHDWBLACK;
  };
  darkTheme: {
    text: Color.WHITE;
    background: Color.BLACK;
    opositeBackground: Color.WHITE;
    shadow: Color.SHDWHIT;
  };
}
