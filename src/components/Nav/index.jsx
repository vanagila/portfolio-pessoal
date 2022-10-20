import { Container, NavBar } from "./styles";
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
        <button onClick={scrollToTechs}>
          <FaLaptopCode size={30} />
        </button>
        <button onClick={scrollToProjects}>
          <FaFolderOpen size={30} />
        </button>
        <button>
          <FaFileAlt size={30} />
        </button>
        <button>
          <FaLinkedin size={30} />
        </button>
        <button>
          <FaGithub size={30} />
        </button>
      </Container>
    </NavBar>
  );
};
