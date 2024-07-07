import styled from "styled-components";
import Nav from "./components/Nav";
import Router from "./components/Router";
import Footer from "./components/Footer";
import { MAX_WIDTH } from "./constants/common";

function App() {
  return (
    <>
      <Nav />
      {/* 네비게이션 바 padding */}
      <div style={{ paddingTop: "95px" }}></div>
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
    max-width: ${MAX_WIDTH};
    padding: 5rem 3rem;
    margin: 0 auto;
  }
`;

export default App;
