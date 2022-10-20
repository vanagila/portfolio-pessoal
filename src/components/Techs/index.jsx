import { useTechs } from "../../providers/TechsContext";
import { Container, Box } from "./styles";
import { forwardRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Techs = forwardRef((props, ref) => {
  const { ref: animateRef, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({ y: "-1000vw" });
    }
  }, [inView, animation]);

  const { techs } = useTechs();

  return (
    <div ref={ref}>
      <div ref={animateRef}>
        <motion.div animate={animation}>
          <Container>
            {techs.map((tech) => {
              return (
                <Box key={tech.id}>
                  <img src={tech.img} alt={tech.name} />
                </Box>
              );
            })}
          </Container>
        </motion.div>
      </div>
    </div>
  );
});
