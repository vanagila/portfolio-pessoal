import { ProjectCard } from "../ProjectCard";
import { Container } from "./styles";
import { useProjects } from "../../providers/ProjectsContext";
import { forwardRef } from "react";

export const Projects = forwardRef((props, ref) => {
  const { projects } = useProjects();

  return (
    <Container ref={ref}>
      <h2>PROJETOS</h2>

      {projects.map((project, id) => {
        return <ProjectCard key={id} project={project} />;
      })}
    </Container>
  );
});
