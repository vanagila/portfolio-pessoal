import { FiFolder } from "react-icons/fi";

import { Container, Header, Image, Links, Tags } from "./styles";

export const ProjectCard = ({ project }) => {
  const { title, img, demo, repo, tags } = project;

  return (
    <Container>
      <Header>
        <FiFolder size={35} />
        <p>{title}</p>
      </Header>

      <Image src={img} alt={title} />

      <Links>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={repo} target="_blank" rel="noreferrer">
          Repositório
        </a>
      </Links>

      <Tags>{tags}</Tags>
    </Container>
  );
};
