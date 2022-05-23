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
//     width: 26px;
//     height: 26px;
//     top: 158px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     justify-content: space-around;
//     `