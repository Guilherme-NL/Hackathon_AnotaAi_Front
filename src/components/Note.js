import styled from "styled-components"
import { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import { Link, useParams } from "react-router-dom"
import TopBar from "./TopBar"


export default function Note() {
  const [note, setNote] = useState("")
  const {id} = useParams()

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
       
           <li>Minha primeira nota</li>
          <li>Minha segunda nota</li>
        </ul>
        </div>  
    
        <div>
          <li>Preciso de ajuda</li>
        </div>
      </div> 
      <section >
        <h2 className="noteTitle">Minha primeira nota</h2>
        
      <MDEditor className="note" value={note} onChange={setNote} height={330} />
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
  justify-content:space-between;
  height: 100vh;

  section{
    margin-top: 120px;
    margin-right: 20px;
    font-size: 48px;
  }

  .note{
    margin-top:25px;
    width: 80vw;
    
  }
}



`