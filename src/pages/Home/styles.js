import styled from "styled-components";

export const FirstSection = styled.section`
  margin: 25px 0;

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: center;
    margin: 60px 0;
    gap: 30px;
  }

  @media screen and (min-width: 1025px) {
    margin: 80px 0;
  }
`;

export const SecondSection = styled.section`
  margin: 25px 0;

  @media screen and (min-width: 769px) {
    margin: 60px 0;
  }

  @media screen and (min-width: 1025px) {
    margin: 80px 0;
  }
`;
