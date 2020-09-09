import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/style/GlobalStyle.css";

import { DataProvider } from "./context/DataProvider";
import theme from "./utils/theme";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Route path="/" exact component={HomePage}></Route>
          </DataProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
