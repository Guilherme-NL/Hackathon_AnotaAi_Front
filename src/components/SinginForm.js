import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useUserData, saveUserDataInLocalStorage} from "../contexts/UserDataContext";
import dotenv from "dotenv";
dotenv.config();

export default function SinginForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [, setUserData] = useUserData();

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const url = "https://back-anota-ai.herokuapp.com/signin";

    const body = { email, password };

    axios
      .post(url, body)
      .then((res) => {
        setUserData(res.data);
        saveUserDataInLocalStorage(res.data);
        console.log(res.data);
        setIsLoading(false);
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
        setIsLoading(false);
      });
  }

  return (
    <>
      <Container onSubmit={submitLogin}>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit">Entrar</button>
      </Container>
    </>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 35px;
  margin-top: 30px;

  input {
    @media (max-width: 450px) {
      width: 100%;
    }
    width: 350px;
    height: 58px;
    background-color: #f5f5f5;
    border: 1px solid #121212;
    border-radius: 5px;
    padding: 12px;
    font-size: 20px;
    ::placeholder {
      color: #767676;
      font-size: 20px;
    }
    margin-bottom: 7px;
  }

  button {
    @media (max-width: 450px) {
      width: 100%;
    }
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    background-color: #444444;
    border-radius: 5px;
    border: 1px solid #121212;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;
