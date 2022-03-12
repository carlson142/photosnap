import React from "react";
import styled from "styled-components";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Routes>
          <Route path="/photosnap/" element={<HomePage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Main>
      <Footer />
    </Container>
  );
};

export default App;
