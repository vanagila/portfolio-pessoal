import { Container, Text, GreetingIllustration } from "./styles";
import me from "../../assets/img/me.gif";
import { useEffect, useState } from "react";

const text = "front-end";

export const HomeText = () => {
  const [type, setType] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setType(text.slice(0, type.length + 1));
    }, 200);

    return () => clearTimeout(timeout);
  }, [type]);

  return (
    <Text>
      <Container>
        <GreetingIllustration>
          <p>Olá, me chamo</p>
          <img src={me} alt="me" />
        </GreetingIllustration>
        <h2>Vanágila</h2>
        <p className="p-typed">
          sou desenvolvedora <br />
          {type}
        </p>
      </Container>
    </Text>
  );
};
