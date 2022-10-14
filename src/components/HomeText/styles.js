import styled from "styled-components";

export const Text = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  color: var(--white-font);

  p {
    font-family: var(--introduction-font);
    font-size: 24px;
    text-align: left;
  }

  p:first-child {
    letter-spacing: 2px;
  }

  h2 {
    font-family: var(--name-font);
    font-weight: 900;
    font-size: 50px;
  }
`;
