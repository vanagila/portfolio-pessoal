import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 10px 0;
  align-items: center;
  font-family: var(--introduction-font);
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
  position: relative;

  &:hover::after {
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::after {
    content: attr(aria-label);
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    top: -20px;
    width: 70%;
    height: 25px;
    border-radius: 5px;
    background-color: var(--purple-1);
    color: var(--white-font);
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  img {
    width: 72px;
    height: 72px;
  }
`;
