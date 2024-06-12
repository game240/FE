import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import theme from "./styles/fontWeight";
import { Nav } from "./components";
import Footer from "./components/atom/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
