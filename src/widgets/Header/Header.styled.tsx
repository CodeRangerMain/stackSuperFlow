import styled from "styled-components";
import { colors } from "../../shared/styles/colors";
export const Wrapper = styled.header`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const LogoWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  margin-right: 20px;
  :hover {
    background-color: ${colors.basic.basic1};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
