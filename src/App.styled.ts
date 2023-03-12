import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => {
    return theme.background;
  }};
  height: 100vh;
  color: ${({ theme }) => {
    return theme.text;
  }};
`;
