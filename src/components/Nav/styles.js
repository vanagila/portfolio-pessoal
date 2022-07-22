import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 10px 0 10px;
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
