import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-row: 200px 1fr;
  width: 100%;
  margin-top: 20px;
  background-color: #f8f9fa;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-around;
  width: 100%;
  height: 70vh;
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const Contact = styled.div`
  max-width: 70%;
  align-content: center;
`;

export const Form = styled.form`
  padding: 40px;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px;
  width: 100%;
  padding-top: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  i {
    font-size: 1.2rem;
    justify-self: right;
    align-self: center;
  }
`;

export const Input = styled.input`
  height: 50px;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const TextArea = styled.textarea`
  font-family: "Poppins", sans-serif;
  min-height: 100px;
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  overflow: auto;
  resize: none;
  border: none;
`;

export const DivTextArea = styled(Div)`
  i {
    align-self: flex-start;
  }
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
  padding: 5px 10px;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s;
  &:hover {
    background-color: #000;
    color: white;
  }
`;
