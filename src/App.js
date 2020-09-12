import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/style/GlobalStyle.css";

import { DataProvider } from "./context/DataProvider";
import theme from "./utils/theme";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <GlobalStyle></GlobalStyle>
            <Header></Header>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/contact" component={ContactPage}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
            <Footer></Footer>
          </DataProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
