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

  //Path name

  const [path, setPath] = useState("");
  console.log(path);

  //Navigation

  const [navSticky, setNavSticky] = useState("");
  const [burgerActive, setBurgerAcive] = useState(false);
  const [viewportWidth, setViewportWidth] = useState();

  window.addEventListener("resize", function () {
    setViewportWidth(window.innerWidth);
  });

  //Scroll top
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, [setViewportWidth]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    path,
    setPath,
    navSticky,
    setNavSticky,
    burgerActive,
    setBurgerAcive,
    viewportWidth,
    setViewportWidth,
    scrollTop,
    showScroll,
    setShowScroll,
  };

  // console.log(path);
  return (
    <>
      <DataContext.Provider value={defaultContext}>
        {props.children}
      </DataContext.Provider>
    </>
  );
};
