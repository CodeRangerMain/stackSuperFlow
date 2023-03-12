import { CustomThemeProvider } from "./Theme";
import { ContextProps } from "./types";

export const Contexts = ({ children }: ContextProps) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};
