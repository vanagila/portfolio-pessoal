import { useTechs } from "../../providers/TechsContext";

import { Container, Box } from "./styles";

export const Techs = () => {
  const { techs } = useTechs();

  return (
    <Container>
      {techs.map((tech) => {
        return (
          <Box key={tech.id}>
            <img src={tech.img} alt={tech.name} />
          </Box>
        );
      })}
    </Container>
  );
};
