import styled from "styled-components"
import { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.png"


export default function Note() {
  const [note, setNote] = useState("")

  return (
   <>
    <Container>
      <Header>
        <img src={Logo} />
        <div className="actions">
            <p>Olá, fulano</p>
            <p>Logout Icon</p>
        </div>
      </Header>
      
      <div className="main">
      <div className="sidebar">
        <div>
            <Link to="/notes">
              <li className="all">Todas as anotações</li>
            </Link>
        </div>  
        <ul className="notes">
          <li>Minha primeira nota</li>
          <li>Minha segunda nota</li>
        </ul>
        <div>
          <li>Preciso de ajuda</li>
        </div>
      </div> 
      <section >
        <h2 className="noteTitle">Minha primeira nota</h2>
        
      <MDEditor className="note" value={note} onChange={setNote} height={400} />
      </section>
      
      </div>
    </Container>
   </>
  )
}

const Header = styled.div`
background-color: #646464;
width: 100%;
height:100px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;

.actions{
  display:flex;
  color:white;

  p{
    margin: 0px 15px;
  }
}


`
const Container = styled.div`
display: flex;
flex-direction:column;
background-color: #E3E3E3;

.sidebar{
    height:85vh;
    width:200px;
    color:white;
    background-color:#A6A6A6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding:20px;

  .all{
    box-shadow: 2px 3px 5px black;
    color:white;
    padding:5px;
    border-radius: 5px;
  }

    a{
      text-decoration: none;
      width:50%;
    }

    .notes{
      height:100%;
      padding-top:40px;
      width: 100%;
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
  justify-content:space-between;
  
  section{
    margin-top: 20px;
    margin-right: 20px;
    font-size: 48px;
    

    
  }

  .note{
    margin-top:25px;
    width: 80vw;
    
  }
}



`