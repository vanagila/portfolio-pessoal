import { useTechs } from "../../providers/TechsContext";
import { Container, Box } from "./styles";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Techs = forwardRef((props, ref) => {
  const { techs } = useTechs();

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Container>
          {techs.map((tech) => {
            return (
              <Box key={tech.id} aria-label={tech.name}>
                <img src={tech.img} alt={tech.name} />
              </Box>
            );
          })}
        </Container>
      </motion.div>
    </div>
  );
});
