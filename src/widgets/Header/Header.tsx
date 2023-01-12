import { Input } from "antd";
import { Logo } from "../../shared/ico/logo/Logo";
import { MainWrapper } from "../../shared/styles/App.styled";
import { ContentWrapper, LogoWrapper, Wrapper } from "./Header.styled";

export const Header = () => {
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
          <Input placeholder="Search..." />
        </ContentWrapper>
      </MainWrapper>
    </Wrapper>
  );
};
