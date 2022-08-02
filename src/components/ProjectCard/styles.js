import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 290px;
  height: 238px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--purple-2);
  gap: 10px;
  font-family: var(--text-font);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    color: var(--green);
  }

  p {
    font-size: 17px;
    color: var(--white-font);
  }
`;

export const Image = styled.img`
  width: 270px;
  height: 129px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  a {
    color: var(--green);
  }
`;
