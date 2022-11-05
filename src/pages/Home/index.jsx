import { useRef } from "react";
import { FirstSection, SecondSection } from "./styles";
import { Nav } from "../../components/Nav";
import { HomeText } from "../../components/HomeText";
import { JsonText } from "../../components/JsonText";
import { Techs } from "../../components/Techs";
import { Projects } from "../../components/Projects";
import { ButtonToTop } from "../../components/ButtonToTop";

export const Home = () => {
  const techsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <ButtonToTop />
      <Nav techsRef={techsRef} projectsRef={projectsRef} />
      <FirstSection>
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
