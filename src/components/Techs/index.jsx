import { useTechs } from "../../providers/TechsContext";

import { Container, Box } from "./styles";
import { forwardRef } from "react";

export const Techs = forwardRef((props, ref) => {
  const { techs } = useTechs();

  return (
    <Container ref={ref}>
      {techs.map((tech) => {
        return (
          <Box key={tech.id}>
            <img src={tech.img} alt={tech.name} />
          </Box>
        );
      })}
    </Container>
  );
});
