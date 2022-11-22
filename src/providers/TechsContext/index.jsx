import { createContext, useState, useContext } from "react";
import { techsData } from "../../database";
export const TechsContext = createContext();

export const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState(techsData);
  return (
    <TechsContext.Provider value={{ techs }}>{children}</TechsContext.Provider>
  );
};

export const useTechs = () => useContext(TechsContext);
