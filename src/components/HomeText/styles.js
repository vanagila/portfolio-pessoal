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
    font-size: 1.5rem;
    text-align: left;
  }

  img {
    width: 38px;
    height: 41px;
  }

  h2 {
    font-family: var(--name-font);
    font-weight: 900;
    font-size: 3.125rem;
  }

  .p-typed {
    ::after {
      content: "|";
      opacity: 1;
      animation: blink 0.5s infinite;
    }
  }
`;

export const GreetingIllustration = styled.div`
  display: flex;
  align-items: center;

  p {
    letter-spacing: 2px;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  img {
    transform: rotate(30deg);
    animation: shake 1.2s ease-in-out;
    animation-delay: 1s;

    &:hover {
      animation: shake 1.2s infinite;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(40deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(41deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(39deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(40deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(41deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(39deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(40deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(41deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(39deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(40deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(41deg);
    }
  }
`;
