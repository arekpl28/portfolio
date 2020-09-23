import styled from "styled-components";

export const DivTodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UlTodoList = styled.ul`
  min-width: 30%;
  list-style: none;
  border: none;
  li.completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;
