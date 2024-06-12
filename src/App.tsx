import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import theme from "./styles/fontWeight";
import { Nav } from "./components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
      </ThemeProvider>
    </>
  );
}

export default App;
