import { SmileOutlined } from "@ant-design/icons";
import { CustomThemeContext } from "contexts/Theme";
import { useContext } from "react";
import { useTheme } from "styled-components";
import { StyledIco, SwitchButton } from "./styled";

export const ThemeButton = () => {
  const { toggleTheme, theme } = useContext(CustomThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <SwitchButton onClick={handleToggleTheme}>
      {theme === "dark" ? `🌞` : `🌚`}
    </SwitchButton>
  );
};
