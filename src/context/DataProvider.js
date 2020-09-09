import React, { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const defaultContext = {};
  return (
    <>
      <DataContext.Provider value={defaultContext}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};
