import styled from 'styled-components';

export default function Assentos() {
    return (
        <Escolher >
            <h1> Escolha </h1>
        </Escolher>
    )
}


const Escolher = styled.div`
            width: 375px;
            max-width: 100%;
            height: 100vh;

            h1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.04em;
                color: #293845;
            }
        `