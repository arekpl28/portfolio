import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //Todo App
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "all":
        setFilteredTodos(todos);
        break;

      default:
        break;
    }
  }, [todos, status]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) {
      setTodos(todoStore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);

  //ProjectPage set Header project name

  const [projectName, setProjectName] = useState("My projects");

  const defaultContext = {
    inputText,
    setInputText,
    todos,
    setTodos,
    status,
    setStatus,
    filteredTodos,
    setFilteredTodos,
    projectName,
    setProjectName,
  };
  return (
    <>
      <DataContext.Provider value={defaultContext}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};
