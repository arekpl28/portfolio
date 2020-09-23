import React from "react";

import { Form, Input, Button, Select, DivSelect } from "./FormTodo.css";

let idNumer = 0;
export default function FormTodo({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  const handlerInputText = (e) => {
    setInputText(e.target.value);
  };

  const handlerClickAddTodo = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    } else {
      setTodos([...todos, { id: idNumer, text: inputText, completed: false }]);
      setInputText("");
      idNumer++;
    }
  };

  const handlerSelect = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Form>
        <Input value={inputText} onChange={handlerInputText} type="text" />
        <Button onClick={handlerClickAddTodo} type="submit">
          <i className="fas fa-plus-square"></i>
        </Button>
        <DivSelect>
          <Select onChange={handlerSelect} name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Select>
        </DivSelect>
      </Form>
    </>
  );
}
