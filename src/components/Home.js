import { Link } from "react-router-dom"
import styled from "styled-components"
import bgHome from "../assets/images/bgHome.png"
import Logo from "../assets/images/Logo.png"
import Mackbook from "../assets/images/Macbook.png"

export default function Home(){
    return (
        <>
        <Header>
               <div></div>
                <img src={Logo} />
                <div className="actions">
                    <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
                     <div>Entrar</div>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: "none", color:"black" }}>
                        <div>Criar Conta</div>
                    </Link>
                </div>
        </Header>   
        <Container>
               <div>
               <ul>
                    <li>Moderno</li>
                    <li>Eficiente</li>
                    <li>Minimalista</li>
                </ul> 
                <p>
                Anota Ai é a plataforma perfeita para você que necessita fazer anotações onde e quando quiser
                </p> 
                <Link to="/signup">
                 <button>Comece Agora</button> 
                </Link> 
               </div>
                <img src={Mackbook}/>  
        </Container>
        </>
    )
}


const Container = styled.div`
    width: 100wh;
    height: 100vh;
    background-image: url(${bgHome});
    margin-top:100px;
    display: flex;
    justify-content: center;
    align-items:center;

    p{
        margin: 30px 0px;
        width: 230px;
        text-align: justify;
        line-height: 25px;
    }

    ul{
        display: flex;
    }

    ul li{
        margin-right: 20px;
        font-weight: bold;
    }

    img{
        width: 345px;
        height: 255px;
    }

    button{
        cursor:pointer;
        border:none;
        width: 150px;
        padding:10px;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

   

`


const Header = styled.div`
background-color: #DCDCDC;
width:100%;
height:100px;
top:0;
left:0;
position: fixed;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

.actions{
    display: flex;
}

.actions div{
    padding: 10px;
}

div{
    cursor:pointer;
    transition: all linear 0.3s;
    border-radius: 5px;
}

div :hover{
    background: rgba(169, 169, 169, 0.5);
}

`
