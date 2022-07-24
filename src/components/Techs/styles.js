import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  align-items: center;
  margin-top: 25px;
`;

export const Box = styled.div`
  width: 144px;
  height: 94px;
  border-radius: 10px;
  background-color: var(--purple-1);
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.25));

  img {
    width: 72px;
    height: 72px;
  }
`;
