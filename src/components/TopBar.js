import {
  deleteUserDataInLocalStorage,
  useUserData,
} from "../contexts/UserDataContext";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import logo from "../image/logo.png";
dotenv.config();

export default function TopBar() {
  //OBS: tive que comentar esses trechos de código por enquanto, devido ao seu funcionamento necessitar do sistema de cadastro e login
  //const [{name, token}, setUserData] = useUserData();
  const name = "Samer"
  const navigate = useNavigate();
  function logout() {
    // const auth = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    const requisition = axios.delete(
      "https://back-anota-ai.herokuapp.com/sessions",
      //auth
    );
    requisition.then((response) => {
      //setUserData(null);
      deleteUserDataInLocalStorage();
      navigate("/signin");
    });
    requisition.catch((error) => {
      alert("Ocorreu um erro");
      console.log(error.data);
    });
  }
  return (
      <>
         {name.length !== 0 ? <Container>
      <img src={logo} alt="logo"></img>
      <LogOut onClick={logout}>
        <h1>Olá, {name}</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </LogOut>
    </Container> : "Carregando..."} 
      
      </>
  );
}
const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 101px;
  padding: 0px 10px;
  box-sizing: border-box;
  background-color: #646464;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.5);

  img {
    width: 315px;
    height: 81px;
    object-fit: cover;
  }
`;

const LogOut = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: white;
  font-size: 30px;
  margin: 0;
  border-style: none;

  h1 {
    margin-right: 40px;
  }

  ion-icon {
    font-size: 40px;
  }
`;
