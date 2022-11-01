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

  svg {
    color: var(--green);
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
