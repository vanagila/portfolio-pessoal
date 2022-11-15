import { FirstSection, SecondSection } from "./styles";
import { useRef } from "react";
import { Nav } from "../../components/Nav";
import { HomeText } from "../../components/HomeText";
import { JsonText } from "../../components/JsonText";
import { Techs } from "../../components/Techs";
import { Projects } from "../../components/Projects";
import { ButtonToTop } from "../../components/ButtonToTop";
import { Contact } from "../../components/Contact";

export const Home = () => {
  const techsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <ButtonToTop />
      <Nav
        techsRef={techsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <FirstSection>
        <HomeText />
        <JsonText />
      </FirstSection>

      <Techs ref={techsRef} />

      <SecondSection>
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </SecondSection>
    </>
  );
};
