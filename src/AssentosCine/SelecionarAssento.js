import { useState } from 'react'
import styled from 'styled-components';
import '../Assets/style.css'

export default function SelecionarAssento({ number, available, list, setList }) {

    const [seatInfo, setseatInfo] = useState({ selected: false })

    function checkSeat(number) {

        if (!seatInfo.selected) {
            setseatInfo({ selected: true })
            setList([...list, number])
        } else {
            setseatInfo({ selected: false })
            setList(list.filter(item => item !== number))
        }
    }

    return (
        <div className={seatInfo.selected ? 'green' : available ? 'gray' : 'yellow'}
            onClick={() => available ? checkSeat(number) : alert(`seat ${number} is not available`)} >
            <FormatacaoAssentos>
                <h1>{number}</h1>
            </FormatacaoAssentos>
        </div>

    )
}

const FormatacaoAssentos = styled.div`

    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #808F9D;
    

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            display: flex;
            align-items: center;
            text-align: center;
            border-radius: 12px;
            color: #000000;
        }
    `


