import { Input, Space } from "antd";
import { ThemeButton } from "widgets/ThemeButton";

import { search } from "../../models/Search/searchReduser";
import { Logo } from "../../shared/ico/logo/Logo";
import { useAppDispatch } from "../../shared/lib/hooks/state";
import { MainWrapper } from "../../shared/styles/App.styled";
import {
  ContentWrapper,
  LogoWrapper,
  ThemeButtonWrapper,
  Wrapper,
} from "./Header.styled";

export const Header = () => {
  const dispatch = useAppDispatch();
  const onSearch = () => {
    dispatch(search("some"));
  };
  return (
    <Wrapper>
      <MainWrapper>
        <ContentWrapper>
          <LogoWrapper>
            <Logo />{" "}
            <>
              Stack<b>SuperFlow</b>
            </>
          </LogoWrapper>
          <Input onChange={onSearch} placeholder="Search..." />
          <ThemeButtonWrapper>
            <ThemeButton />
          </ThemeButtonWrapper>
        </ContentWrapper>
      </MainWrapper>
    </Wrapper>
  );
};
