import styled from "styled-components";
import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import back from "../image/Back.png";
import logo from "../image/logo.png";

export default function Signup() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <p>Cadastre-se no Anota Ai</p>
      <p>Será um prazer ter você conosco</p>
      <SignupForm />
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <p>Já tem uma conta? Entre agora!</p>
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
