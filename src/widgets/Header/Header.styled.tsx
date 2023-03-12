import styled from "styled-components";

export const Wrapper = styled.header`
  box-shadow: 0px 2px 2px ${(props) => props.theme.shadow};
`;

export const LogoWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  margin-right: 20px;
  :hover {
    background-color: ${(props) => props.theme.background};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

export const ThemeButtonWrapper = styled.div`
  margin-left: 10px;
`;
