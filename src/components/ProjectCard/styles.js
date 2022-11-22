import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  height: 238px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--purple-1);
  gap: 10px;
  font-family: var(--text-font);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 9px;

  svg {
    color: var(--green);
  }

  p {
    font-size: 1.063rem;
    font-weight: 600;
    color: var(--white-font);
  }
`;

export const Image = styled.img`
  width: 270px;
  height: 129px;
  border-radius: 3px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 500;

  a {
    color: var(--green);
    display: inline-block;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--green);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    :hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  padding: 5px 0;
  margin-bottom: 9px;
  background-color: var(--purple-2);
  font-size: 0.75rem;
  color: var(--white-font);
`;
