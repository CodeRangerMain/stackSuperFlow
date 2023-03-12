import { SmileOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "antd";

export const SwitchButton = styled.button`
  background-color: transparent;
  font-size: 17px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: rgb(63%, 63%, 63%, 0.3);
  }
`;

export const StyledIco = styled(SmileOutlined)`
  color: ${(props) => {
    return props.theme.background;
  }};
`;
