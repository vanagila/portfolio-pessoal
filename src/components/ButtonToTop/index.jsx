import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Button } from "./styles";

export const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
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
