import styled from "styled-components";

export const Title = styled.div`
  margin: 25px 0;

  h2 {
    padding-bottom: 15px;
    text-align: center;
    font-size: 1.438rem;
    font-family: var(--introduction-font);
    color: var(--white-font);
  }

  @media screen and (min-width: 769px) {
    h2 {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    height: 188px;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;

    img {
      height: 400px;
    }
  }
`;

export const Forms = styled.div`
  width: 290px;

  h2 {
    display: none;
  }

  form {
    width: 100%;

    label {
      font-size: 1.25rem;
      font-family: var(--introduction-font);
      color: var(--white-font);
    }

    input,
    textarea {
      width: 100%;
      height: 29px;
      margin: 8px 0;
      padding-left: 10px;
      border: none;
      border-radius: 5px;
      background-color: var(--purple-1);

      &::placeholder {
        color: var(--white-font);
        font-family: var(--introduction-font);
      }
    }

    textarea {
      height: auto;
      padding-top: 5px;
    }
  }

  @media screen and (min-width: 769px) {
    width: 350px;

    h2 {
      display: block;
      padding-bottom: 15px;
      text-align: left;
      font-size: 1.438rem;
      font-family: var(--introduction-font);
      color: var(--white-font);
    }
  }

  @media screen and (min-width: 1025px) {
    width: 450px;

    form {
      input,
      textarea {
        height: 35px;
      }

      textarea {
        height: auto;
      }
    }
  }
`;
