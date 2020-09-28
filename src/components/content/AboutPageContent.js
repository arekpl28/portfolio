import React from "react";
import { Route } from "react-router-dom";

export default function AboutPageContent() {
  // console.log(props);
  return (
    <>
      <p>about </p>
      <Route
        path="/:page"
        render={(props) => {
          console.log(props.match.params);
        }}
      ></Route>
    </>
  );
}
