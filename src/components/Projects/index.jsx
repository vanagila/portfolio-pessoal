import { ProjectCard } from "../ProjectCard";

import { Container } from "./styles";

import { useProjects } from "../../providers/ProjectsContext";

export const Projects = () => {
  const { projects } = useProjects();

  return (
    <Container>
      <h2>PROJETOS</h2>

      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project} />;
      })}
    </Container>
  );
};
