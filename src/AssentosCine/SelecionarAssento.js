import { useState } from 'react'
import '../Assets/style.css'

export default function SelecionarAssento({ number, available, list, setList }) {

    const [seatInfo, setInfo] = useState({ selected: false })

    function checkSeat(number) {

        if (!seatInfo.selected) {
            setInfo({ selected: true })
            setList([...list, number])
        } else {
            setInfo({ selected: false })
            setList(list.filter(item => item !== number))
        }
    }

    return (
        <div className={seatInfo.selected ? 'seat green' : available ? 'seat gray' : 'seat yellow'}
            onClick={() => available ? checkSeat(number) : alert(`seat ${number} is not available`)} >
            <h1>{number}</h1>
        </div>

    )
}




