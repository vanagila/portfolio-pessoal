import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages/Home/Home";
import { TechsProvider } from "./providers/Techs";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <TechsProvider>
        <Home />
      </TechsProvider>
    </>
  );
};
