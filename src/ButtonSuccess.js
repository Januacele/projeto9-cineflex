import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ButtonSuccess() {
    return (
        <Link style={{ textDecoration: 'none' }} to="/">
            <BtnBack>
                <h1>Voltar pra Home</h1>
            </BtnBack>
        </Link>
    )
}


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