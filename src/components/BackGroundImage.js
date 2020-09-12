import React from "react";
import { Route } from "react-router-dom";
import { BgImg } from "./style/BackGroundImage.css";

export default function BackGroundImage() {
  return (
    <>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <BgImg
              style={{ backgroundImage: "url(images/header.jpg)" }}
            ></BgImg>
          </>
        )}
      ></Route>
      <Route
        path="/about"
        render={() => (
          <>
            <BgImg
              style={{ backgroundImage: "url(images/header.jpg)" }}
            ></BgImg>
          </>
        )}
      ></Route>
      <Route
        path="/projects"
        render={() => (
          <>
            <BgImg
              style={{ backgroundImage: "url(images/header.jpg)" }}
            ></BgImg>
          </>
        )}
      ></Route>
      <Route
        path="/contact"
        render={() => (
          <>
            <BgImg style={{ backgroundImage: "url(images/map.jpg)" }}></BgImg>
          </>
        )}
      ></Route>
    </>
  );
}
