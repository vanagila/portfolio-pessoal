import { Container, Text, GreetingIllustration } from "./styles";
import me from "../../assets/img/me.gif";

export const HomeText = () => {
  return (
    <Text>
      <Container>
        <GreetingIllustration>
          <p>Olá, me chamo</p>
          <img src={me} alt="me" />
        </GreetingIllustration>
        <h2>Vanágila</h2>
        <p>
          sou desenvolvedora <br />
          front-end
        </p>
      </Container>
    </Text>
  );
};
