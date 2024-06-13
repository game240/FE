import styled, { ThemeProvider } from "styled-components";
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

        <Contents>
          <div>
            <p>content</p>
          </div>
        </Contents>

        <Footer />
      </ThemeProvider>
    </>
  );
}

const Contents = styled.div`
  flex-grow: 1;

  & > * {
    max-width: 146rem;
    padding: 0 3rem;
    margin: 0 auto;
  }
`;

export default App;
