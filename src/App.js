import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Pages from "./pages/Pages";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { DataProvider } from "./context/DataProvider";
import theme from "./utils/theme";

import GlobalStyle from "./GlobalStyle.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Pages></Pages>
            <Footer></Footer>
          </DataProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
