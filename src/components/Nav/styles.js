import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 150px;

  display: flex;
  justify-content: space-between;

  padding: 0 10px;

  background-color: var(--purple-1);

  button {
    background: none;
    border: none;
  }

  svg {
    color: var(--green);
  }
`;
