import React, { useContext } from "react";

import { DataContext } from "../../../../context/DataProvider";
import {
  Form,
  DivInput,
  InputTodo,
  ButtonTodo,
  DivSelect,
  Label,
  Select,
} from "./FormTodo.css";

export default function FormTodo() {
  const { todos, setTodos, inputText, setInputText, setStatus } = useContext(
    DataContext
  );

  const handlerInputText = (e) => {
    setInputText(e.target.value);
  };

  const handlerClickAddTodo = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    } else {
      setTodos([
        ...todos,
        { id: todos.length, text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const handlerSelect = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Form>
        <DivInput>
          <InputTodo
            value={inputText}
            onChange={handlerInputText}
            type="text"
          />
          <ButtonTodo onClick={handlerClickAddTodo} type="submit">
            Create
          </ButtonTodo>
        </DivInput>
        <DivSelect>
          <Label htmlFor="select">Select</Label>
          <Select name="select" onChange={handlerSelect}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Select>
        </DivSelect>
      </Form>
    </>
  );
}
