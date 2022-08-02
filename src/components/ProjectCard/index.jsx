import DHM from "../../assets/img/dhm.png";

import { FiFolder } from "react-icons/fi";

import { Container, Header, Image, Links } from "./styles";

export const ProjectCard = () => {
  return (
    <Container>
      <Header>
        <FiFolder size={35} />
        <p>Developer Habits Manager</p>
      </Header>
      <Image src={DHM} alt={"DHM"} />
      <Links>
        <a
          href="https://react-sprint2-kenzie-gestao-de-habitos.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          href="https://github.com/brunnomiguel/react-sprint2-kenzie-gestao-de-habitos.git"
          target="_blank"
          rel="noreferrer"
        >
          Repositório
        </a>
      </Links>
    </Container>
  );
};
