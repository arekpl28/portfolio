import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const DataContext = createContext();

export const DataProvider = (props) => {
  //Todo App
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeLang, setActiveLang] = useState(false);
  const [activeLangBurger, setActiveLangBurger] = useState(false);
  const [languaeFirst, setLanguaeFirst] = useState("");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLanguaeFirst(i18n.language);
  }, [i18n.language]);

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
  const [projectName, setProjectName] = useState("My_projects");

  //Path name
  const [path, setPath] = useState("");

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

  //Translator
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
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
    handleChangeLanguage,
    t,
    activeLang,
    setActiveLang,
    activeLangBurger,
    setActiveLangBurger,
    languaeFirst,
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
