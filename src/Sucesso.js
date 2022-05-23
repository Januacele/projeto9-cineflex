import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components';
import ContainerHeader from './ContainerHeader';
import RenderizarAssentos from './AssentosCine/RenderizarAssentos';

export default function Sucesso() {

    let data = useLocation()
    const info = data.state

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
                <RenderizarAssentos seats={info.seats} />

                <h1>Comprador</h1>
                <h2>Nome: {info.nome}</h2>
                <h2>CPF: {info.cpf}</h2>

                <Link style={{ textDecoration: 'none' }} to="/">
                    <BtnBack>
                        <h1>Voltar pra Home</h1>
                    </BtnBack>
                </Link> 
            </SuccessContainer>
        </Success>
    )
}

function RenderSeats({ seats }) {

    return seats.map((seat, index) =>
        <h1 key={index}>Assento {seat}</h1>
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

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 20px;
            color: #293845;
        }
`

const BtnBack = styled.div`
    width: 225px;
    height: 42px;
    left: 74px;
    top: 622px;
    background: #E8833A;
    border-radius: 3px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
        }
`