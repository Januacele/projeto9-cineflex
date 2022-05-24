import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import ContainerHeader from './layouts/Header';
import ButtonSuccess from './ButtonSuccess';

export default function Sucesso() {

    let data = useLocation()
    const info = data.state

    const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",   
    {
        id: info.seats,
        name: info.nome,
        cpf: info.cpf
    });
    promise.then(ButtonSuccess());
    promise.catch(err => console.log(err));


    return (
        <Success>
            <ContainerHeader />

            <SuccessText>
                <h1>Pedido feito com sucesso!</h1>
            </SuccessText>

            <SuccessContainer>
                <h1>Filme e sessão</h1>
                <h2>{info.title}</h2>
                <h2>{info.date} - {info.time}</h2>

                <h1>Ingressos</h1>
                {info.seats.map((seat, index) => (<p key={index}> Assento {seat}</p>))}

                <h1>Comprador</h1>
                <h2>Nome: {info.nome}</h2>
                <h2>CPF: {info.cpf}</h2>

                <ButtonSuccess />
                 
            </SuccessContainer>
        </Success>
    )
}


const Success = styled.div`
    width: 375px;
    max-width: 100%;
    height: 100vh;
`

const SuccessText = styled.div`
    width: 374px;
    height: 110px;
    left: 0px;
    top: 67px;
    display:flex;
    justify-content: center;
    align-items: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #247A6B;
        }
`

const SuccessContainer = styled.div`
    width: 375px;
    max-width: 100%;
    margin-left: 30px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 24px;
            color: #293845;     
        }
            p{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                display: flex;
                align-items: center;
                color: #293845;
            }

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 20px;
            color: #293845;
        }
`

