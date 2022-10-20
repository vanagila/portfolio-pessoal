import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 15px;
  right: 1px;
  background: transparent;
  border: none;
  color: var(--green);

  svg {
    &:hover {
      width: 40px;
      height: 40px;
    }
  }
`;
