import styled from "styled-components";

export const DivTodoContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const UlTodoList = styled.ul`
  list-style: none;
  border: none;
  li.completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;
