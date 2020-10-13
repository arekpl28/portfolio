import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { DataContext } from "../../context/DataProvider";

import img_maintenance from "../../img/maintenance.jpg";

const ImgStyle = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function AboutPageContent(props) {
  const { setPath } = useContext(DataContext);

  useEffect(() => {
    setPath(props.match.path);
  }, [props.match.path, setPath]);

  return (
    <>
      <ImgStyle src={img_maintenance} className alt="maintenance"></ImgStyle>
    </>
  );
}
