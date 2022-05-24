import React from 'react';
import styled from 'styled-components';


export default function Header() {
    return (
            <Titulo>
                <h1> CINEFLEX </h1>
            </Titulo>


    );
}

const Titulo = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right:0px;
    height: 70px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center; 

    h1{
        font-weight: 400;
        font-size: 34px;       
        color: #E8833A;
        } 
`

    

