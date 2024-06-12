import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import theme from "./styles/fontWeight";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>h1 폰트</h1>
        <h2>h2 폰트</h2>
        <h3>h3 폰트</h3>
        <h4>h4 폰트</h4>
        <p>p font</p>
        <a href="#">a font</a>
      </ThemeProvider>
    </>
  );
}

export default App;
