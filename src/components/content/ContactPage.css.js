import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  // grid-template-row: 1fr 1fr;
  width: 100%;
  background-color: #f8f9fa;
`;
export const WrapperInfo = styled.div`
  display: grid;
  width: 100%;
  // grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  justify-content: space-around;
  background-color: white;
  padding: 15px 15px 0 15px;
`;
export const DivInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 80px;
`;
export const Icon = styled.i`
  font-size: 2rem;
  padding-top: 5px;
  color: green;
`;
export const DviMedia = styled.div`
  padding-left: 10px;
`;
export const H5Title = styled.h5`
  font-size: 1.5rem;
`;
export const Description = styled.p`
  font-size: 1.4rem;
`;
export const Section = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 50vh 1fr;
  width: 100%;
`;
export const DivContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  // padding: 20px 40px;
`;
export const Contact = styled.div`
  max-width: 600px;
  align-content: center;
`;
export const Form = styled.form`
  padding: 20px;
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
