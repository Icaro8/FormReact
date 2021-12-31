import styled from "styled-components";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #dffeff;
`;
export const DivContainer = styled.div`
  width: 50vw;
  height: 50vh;
  margin: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  box-shadow: 3px 1px 2px #787878;
  border-radius: 20px;
  .content-text {
    width: 60%;
    text-align: left;
  }
  h1 {
    font-family: "Vujahday Script", cursive;
    margin-bottom: 30px;
    text-align: left;

    color: #718e86;
  }

  input {
    font-family: "Montserrat", sans-serif;
  }
  .input-style {
    display: block;
    margin: auto;
    width: 300px;
    height: 25px;

    background-color: transparent;
    margin: 10px;
    padding: 10px;
    border: none;

    border-bottom: 2px solid #718e86;

    font-size: 16px;
  }
  .input-style:focus {
    outline: none;
  }
  .input-btn {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: right;
  }
  .btn {
    border: none;

    width: 130px;
    height: 25px;

    background-color: #9bdfe2;

    border-radius: 10px;

    box-shadow: 1px 2px 5px #9bdfe2;

    color: #eee;

    font-size: 16px;
  }

  .btn:focus {
    box-shadow: inset 1px 2px 2px #fff;
  }

  .remember {
    width: 48%;

    margin-top: 25px;
    text-align: right;
  }
  .remember a {
    text-decoration: none;
    color: #718e86;
    font-family: "Montserrat", sans-serif;

    font-size: 14px;
  }
  .remember a:hover {
    text-decoration: underline;
    text-decoration-color: #718e86;
    text-decoration-thickness: 2px;
  }
`;
export const Eyes = styled(AiFillEye)`
  color: #718e86;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Hidden = styled(AiFillEyeInvisible)`
  color: #718e86;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .column {
    display: flex;
    flex-direction: column;
  }

  .display {
    display: none;
  }
`;
