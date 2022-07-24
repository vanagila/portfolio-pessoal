import { FirstSection } from "./styles";
import { Nav } from "../../components/Nav/Nav";
import { HomeText } from "../../components/HomeText/HomeText";
import { JsonText } from "../../components/JsonText/JsonText";
import { Techs } from "../../components/Techs/Techs";

export const Home = () => {
  return (
    <FirstSection>
      <Nav />
      <HomeText />
      <JsonText />
      <Techs />
    </FirstSection>
  );
};
