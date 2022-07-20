import styled from "styled-components"
import {MdDelete} from "react-icons/md"
export default function PostIt({color, title, created}){
    return (
        <PostIT color={color}>
        <MdDelete className="delete">Exclur</MdDelete>
                <p>{title}</p>
            <div className="created">
                Criado em: {created}
            </div>
        </PostIT>
    )
}
//#FFD644"
//#00C773

const PostIT = styled.div`
background-color: ${props => props.color};
width: 200px;
height: 200px;
position: relative;
padding:10px;
color:black;
font-family: 'Arial';
display: flex;
align-items: center;
justify-content: center;
transition: all linear 0.2s;

cursor:pointer;

p{
    filter: brightness(2);
}

&:before{
    content:"";
    position: absolute;
    bottom:10px;
    left: 10%;
    width: 90%;
    height: 50px;
    background-color: rgba(0,0,0,0.3);
    transform-origin:left;
    transform: skewY(5deg);
    z-index: -1;  
}

.created{
    color:black;
    font-size: 14px;
    position: absolute;
    bottom:10px;
}

&:hover{
   background-color: gray;
}

.delete{
    position: absolute;
    top:0;
    right:0;
    width: 20px;
    border-radius: 0px 0px 0px 5px;
    color:white;
    transition: all linear 0.1s;
}

.delete:hover{
    width: 30px;
    height: 30px;
}

`