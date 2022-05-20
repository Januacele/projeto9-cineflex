import React from 'react';
import styled from 'styled-components';


export default function Header() {
    return (
        <ContainerHeader >
            <HeaderCine>
                <h1> CINEFLEX </h1>
            </HeaderCine>
        </ContainerHeader>

    );
}


const ContainerHeader = styled.div`
    width: 375px;
    max-width: 100%;
    background-color: #FFFFFF;
`

const HeaderCine = styled.div`
    
    height: 67px;
    max-heigth: 18%;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;   
    background-color: #C3CFD9;
    
        h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;        
        color: #E8833A;

        } 
`

