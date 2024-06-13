import styled from "styled-components";
import { Nav, Router } from "./components";
import Footer from "./components/atom/Footer";

function App() {
  return (
    <>
      <Nav />
      <Contents>
        <Router />
      </Contents>
      <Footer />
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
