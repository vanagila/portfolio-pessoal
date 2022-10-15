import DHM from "../../assets/img/dhm.png";

import { FiFolder } from "react-icons/fi";

import { Container, Header, Image, Links } from "./styles";

export const ProjectCard = ({ project }) => {
  const { title, img, demo, repo } = project;
  return (
    <Container>
      <Header>
        <FiFolder size={35} />
        <p>{title}</p>
      </Header>
      <Image src={DHM} alt={title} />
      <Links>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          Repositório
        </a>
      </Links>
    </Container>
  );
};
