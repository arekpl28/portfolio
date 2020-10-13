import React, { useContext, useEffect } from "react";

import { DataContext } from "../../context/DataProvider";

export default function AboutPageContent(props) {
  const { setPath } = useContext(DataContext);

  useEffect(() => {
    setPath(props.match.path);
  }, [props.match.path, setPath]);

  return (
    <>
      <p>about </p>
    </>
  );
}
