import { FirstSection, SecondSection } from "./styles";
import { Nav } from "../../components/Nav";
import { HomeText } from "../../components/HomeText";
import { JsonText } from "../../components/JsonText";
import { Techs } from "../../components/Techs";
import { Projects } from "../../components/Projects";

export const Home = () => {
  return (
    <>
      <FirstSection>
        <Nav />
        <HomeText />
        <JsonText />
      </FirstSection>

      <Techs />

      <SecondSection>
        <Projects />
      </SecondSection>
    </>
  );
};
