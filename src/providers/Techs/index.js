import { createContext, useState } from "react";

export const TechsContext = createContext([]);

export const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState([
    {
      id: 1,
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 4,
      name: "ReactJS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ]);
  return (
    <TechsContext.Provider value={{ techs }}>{children}</TechsContext.Provider>
  );
};
