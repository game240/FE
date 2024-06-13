import styled from "styled-components";
import Nav from "./components/Nav";
import Router from "./components/Router";
import Footer from "./components/Footer";

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
    padding: 5rem 3rem;
    margin: 0 auto;
  }
`;

export default App;
