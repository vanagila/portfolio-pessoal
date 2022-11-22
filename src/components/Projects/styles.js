import styled from "styled-components";

export const Container = styled.div`
  h2 {
    padding-bottom: 15px;
    text-align: center;
    font-size: 1.438rem;
    font-family: var(--introduction-font);
    color: var(--white-font);
  }

  @media screen and (min-width: 1025px) {
    h2 {
      font-size: 3rem;
      padding-bottom: 44px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 769px) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
