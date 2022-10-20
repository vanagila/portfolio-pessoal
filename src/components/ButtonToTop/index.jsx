import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Button } from "./styles";

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
    <>
      {showButton && (
        <Button onClick={scrollToTop}>
          <FaAngleDoubleUp size={30} />
        </Button>
      )}
    </>
  );
};
