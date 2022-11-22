import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: var(--text-font);
  font-size: 0.875rem;
  line-height: 17px;
  margin-top: 25px;

  @media screen and (min-width: 1025px) {
    font-size: 1.25rem;
    line-height: 20px;
  }
`;
