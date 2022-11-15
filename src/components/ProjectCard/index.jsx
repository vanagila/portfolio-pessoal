import { FiFolder } from "react-icons/fi";
import { Container, Header, Image, Links, Tags } from "./styles";
import { motion } from "framer-motion";

export const ProjectCard = ({ project }) => {
  const { title, img, demo, repo, tags } = project;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
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
    </motion.div>
  );
};
