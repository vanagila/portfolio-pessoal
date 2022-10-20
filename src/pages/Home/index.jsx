import { FirstSection, SecondSection } from "./styles";
import { Nav } from "../../components/Nav";
import { HomeText } from "../../components/HomeText";
import { JsonText } from "../../components/JsonText";
import { Techs } from "../../components/Techs";
import { Projects } from "../../components/Projects";
import { useRef } from "react";

export const Home = () => {
  const techsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <FirstSection>
        <Nav techsRef={techsRef} projectsRef={projectsRef} />
        <HomeText />
        <JsonText />
      </FirstSection>

      <Techs ref={techsRef} />

      <SecondSection>
        <Projects ref={projectsRef} />
      </SecondSection>
    </>
  );
};
