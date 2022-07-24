import { useContext } from "react";
import { TechsContext } from "../../providers/Techs";

import { Container, Box } from "./styles";

export const Techs = () => {
  const { techs } = useContext(TechsContext);

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
