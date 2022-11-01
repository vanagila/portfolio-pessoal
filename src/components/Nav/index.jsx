import { Container, NavBar, Button, Link } from "./styles";
import {
  FaLaptopCode,
  FaFolderOpen,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const Nav = ({ techsRef, projectsRef }) => {
  const scrollToTechs = () => {
    techsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <NavBar>
      <Container>
        <Button onClick={scrollToTechs}>
          <abbr title="Tecnologias">
            <FaLaptopCode size={30} />
          </abbr>
        </Button>
        <Button onClick={scrollToProjects}>
          <abbr title="Projetos">
            <FaFolderOpen size={30} />
          </abbr>
        </Button>
        <Link>
          <abbr title="Currículo">
            <a
              href="https://docs.google.com/document/d/11zlBnDsKUsLfGykM4XzoIsZqUHsmON4Hot95FdiwYn8/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FaFileAlt size={30} />
            </a>
          </abbr>
        </Link>
        <Link>
          <abbr title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/vanagila/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </abbr>
        </Link>
        <Link>
          <abbr title="GitHub">
            <a
              href="https://github.com/vanagila"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </abbr>
        </Link>
      </Container>
    </NavBar>
  );
};
