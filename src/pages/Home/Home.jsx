import { FirstSection } from "./styles";
import { Nav } from "../../components/Nav/Nav";
import { HomeText } from "../../components/HomeText/HomeText";
import { JsonText } from "../../components/JsonText/JsonText";

export const Home = () => {
  return (
    <FirstSection>
      <Nav />
      <HomeText />
      <JsonText />
    </FirstSection>
  );
};
