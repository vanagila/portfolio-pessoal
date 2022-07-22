import {
  FiUser,
  FiFolder,
  FiFileText,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

import { Container } from "./styles";

export const Nav = () => {
  return (
    <Container>
      <button>
        <FiUser size={30} />
      </button>
      <button>
        <FiFolder size={30} />
      </button>
      <button>
        <FiFileText size={30} />
      </button>
      <button>
        <FiLinkedin size={30} />
      </button>
      <button>
        <FiGithub size={30} />
      </button>
    </Container>
  );
};
