import { Container, Content } from "./styles";
import { ProjectCard } from "../ProjectCard";
import { useProjects } from "../../providers/ProjectsContext";
import { forwardRef } from "react";

export const Projects = forwardRef((props, ref) => {
  const { projects } = useProjects();

  return (
    <Container>
      <h2 ref={ref}>PROJETOS</h2>
      <Content>
        {projects
          .map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })
          .reverse()}
      </Content>
    </Container>
  );
});
