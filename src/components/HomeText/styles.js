import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  color: var(--white-font);

  p {
    font-family: var(--introduction-font);
  }

  p:first-child {
    font-size: 24px;
    letter-spacing: 2px;
    text-align: left;
  }

  h2 {
    font-family: var(--name-font);
    font-weight: 900;
    font-size: 50px;
  }

  p:last-child {
    font-size: 24px;
    text-align: left;
  }
`;
