import { Link } from "react-router-dom";
import styled from "styled-components";

import SinginForm from "./SinginForm";
import back from "../image/Back.png";
import logo from "../image/logo.png";

export default function Singin() {
  return (
    <Container>
    <Link to="/">
    <img src={logo} alt="logo" /> 
    </Link>
      <p>Seja bem vindo</p>
      <SinginForm />
      <Link to="/signup" style={{ textDecoration: "none" }}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: #121212;
  background-image: url(${back});

  img {
    margin-bottom: 60px;
  }

  p {
    font-size: 15px;
    color: #f5f5f5;
    margin-bottom: 10px;
  }
`;
