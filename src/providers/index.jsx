import { ProjectsProvider } from "./ProjectsContext";
import { TechsProvider } from "./TechsContext";

export const Providers = ({ children }) => {
  return (
    <TechsProvider>
      <ProjectsProvider>{children}</ProjectsProvider>
    </TechsProvider>
  );
};
