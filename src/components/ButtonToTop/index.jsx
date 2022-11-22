import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Container } from "./styles";

export const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(!showButton);
      } else {
        setShowButton(showButton);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      {showButton && (
        <motion.button
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          onClick={scrollToTop}
        >
          <FaAngleDoubleUp size={30} />
        </motion.button>
      )}
    </Container>
  );
};
