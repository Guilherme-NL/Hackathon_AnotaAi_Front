import styled from "styled-components"
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import PostIt from "../assets/Postit/Postit";

export default function Notes() {
  //Essa função renderiza todas as anotações do usuário
  return (
    <>
    <Container>
    <TopBar />  
      <div className="main">
      <div className="sidebar">
        <div>
            <Link to="/notes">
              <li className="all">Todas as anotações</li>
            </Link>
        <ul className="notes">
            <Link to="/notes/1">
            <li>Minha primeira nota</li>
            </Link>
            <Link to="/notes/2">
            <li>Minha segunda nota</li>
            </Link>
        </ul>
           
        </div>  
        
        <div>
          <li>Preciso de ajuda</li>
        </div>
      </div> 
      <section >
        <div className="createnotes">
          <h2>Todas as minhas anotações</h2>
          <div className="addnote">
            <button>+</button>
            <p>Nova Anotação</p>
          </div>
        </div>
        <div className="allnotes">
            <Link to="/notes/1">
            <PostIt color={'#FFD644'} created={'20/07/2022'} title={'Minha primeira nota'} />
            </Link>
            <Link to="/notes/2">
            <PostIt color={'#00C773'} created={'21/07/2022'} title={'Minha segunda nota'} />
            </Link>
        </div>
      </section>
      
      </div>
    </Container>
   </>
  )
}


const Container = styled.div`
display: flex;
flex-direction:column;
background-color: #E3E3E3;

.sidebar{
    height: 100vh;
    width:200px;
    color:white;
    background-color:#A6A6A6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top:120px;

  .all:focus{
    box-shadow: 2px 3px 5px black;
    border-radius: 5px;
  }

  .notes{
    margin-top:20px;
  }

  .notes li:focus{
    box-shadow: 2px 3px 5px black;
    border-radius: 5px;
  }

    a{
      text-decoration: none;
      width:50%;
    }

    li{
      list-style-type: none;
      cursor: pointer;
      transition: all linear 0.3s;
      padding:5px;
      margin-top:10px;
      border-radius: 5px;
      color:black;

      &:hover{
        background-color: #D9D9D9;
        width: 100%;
      }
    }
  }


  .main{
  display:flex;
  height: 100vh;

  section{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100vw;

    h2{
      font-size:48px;
    }
  }
 
  .createnotes{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    .addnote{
      display: flex;
      flex-direction: column;
      align-items: center;

      button{
      width: 30px;
      height: 30px;
      border: none;
      background-color: lightblue;
      border-radius: 500px;
      margin-bottom: 5px;
      cursor: pointer;
      transition: all linear 0.2s ;
      &:hover{
      background-color: blue;
      color:white;
    }
    }
    }

  }

  .allnotes{
    margin-top:10px;
    width: 80%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    gap:25px;
  }

  .note{
    margin-top:25px;
    width: 80vw;
  }
}

a{
  text-decoration: none;
}


`