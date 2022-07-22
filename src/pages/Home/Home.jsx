import { FirstSection } from "./styles";
import { Nav } from "../../components/Nav/Nav";
import { HomeText } from "../../components/HomeText/HomeText";

export const Home = () => {
  return (
    <FirstSection>
      <Nav />
      <HomeText />
    </FirstSection>
  );
};
