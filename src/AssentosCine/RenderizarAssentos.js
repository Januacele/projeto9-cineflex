import styled from 'styled-components';
import SelecionarAssento from './SelecionarAssento'



//Função auxiliar para renderizar os assentos na tela
export default function RendenderizarAssentos({ seats, setList, list }) {

    return seats.map((seat, index) =>
        <Seat>
            <SelecionarAssento number={seat.name} available={seat.isAvailable} setList={setList} list={list} key={index} />
        </Seat>
    )
}


const Seat = styled.div`
    width: 26px;
    height: 26px;
    left: 24px;
    top: 158px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    justify-content: space-around;
    font-family: 'Roboto';
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    `