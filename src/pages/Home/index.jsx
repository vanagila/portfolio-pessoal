import { FirstSection, SecondSection } from "./styles";
import { Nav } from "../../components/Nav";
import { HomeText } from "../../components/HomeText";
import { JsonText } from "../../components/JsonText";
import { Techs } from "../../components/Techs";

export const Home = () => {
  return (
    <>
      <FirstSection>
        <Nav />
        <HomeText />
        <JsonText />
      </FirstSection>

      <SecondSection>
        <Techs />
      </SecondSection>
    </>
  );
};
