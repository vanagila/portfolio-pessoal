import { Container } from "./styles";
import "./styles.css";

export const JsonText = () => {
  return (
    <Container>
      <pre>
        <pre className="initial-curly-brace"> &#123; </pre>
        <em className="parent">"nome"</em>
        <em className="children">:"Vanágila Xavier",</em>
        <br />
        <em className="parent">"descrição"</em>
        <em className="children">:"Desenvolvedora Front-End"</em>
        <br />
        <br />
        <em className="parent">"habilidades":</em>
        <em className="inner-braces"> &#123; </em>
        <br />
        <em className="parent-children">"html"</em>
        <em className="children">:"^5",</em>
        <br />
        <em className="parent-children">"css"</em>
        <em className="children">:"^3",</em>
        <br />
        <em className="parent-children">"javascript"</em>
        <em className="children">:"^ECMAS6",</em>
        <br />
        <em className="parent-children">"react"</em>
        <em className="children">:"^18.2.0"</em>
        <br />
        <em className="parent-children">"typescript"</em>
        <em className="children">:"^4.8"</em>
        <br />
        <em className="inner-braces"> &#125;, </em>
        <br />
        <br />
        <em className="parent">"conhecimentos":</em>
        <em className="inner-braces">&#123;</em>
        <br />
        <em className="parent-children">"redux"</em>
        <em className="children">:"^8.0.2",</em>
        <br />
        <em className="parent-children">"styled-components"</em>
        <em className="children">:"^5.3.5",</em>
        <br />
        <em className="parent-children">"mui"</em>
        <em className="children">:"^5.9.0",</em>
        <br />
        <em className="parent-children">"chakra ui"</em>
        <em className="children">:"^2.3.5",</em>
        <br />
        <em className="parent-children">
          <span>"context-api"</span>
        </em>
        <br />
        <em className="parent-children">"git flow"</em>
        <br />
        <em className="parent-children">"api"</em>
        <br />
        <em className="parent-children">"testes"</em>
        <br />
        <em className="parent-children">"ui/ux"</em>
        <br />
        <em className="parent-children">"conventional commits"</em>
        <br />
        <em className="parent-children">"metodologia scrum"</em>
        <br />
        <em className="inner-braces">&#125;,</em>
        <br />
        <pre className="initial-curly-brace"> &#125;</pre>
      </pre>
    </Container>
  );
};
