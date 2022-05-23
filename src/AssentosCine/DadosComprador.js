import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function DadosComprador({ movieinfo, seats, time }) {

    const [inputs, setInputs] = useState({ nome: '', cpf: '', validate: false })

    const { title, posterURL: img } = movieinfo.movie
    const { weekday, date } = movieinfo.days

    function handleSubmit(e) {

        e.preventDefault()

        if (inputs.nome.length < 10) { return alert('NOME Inválido') }
        if (inputs.cpf.length < 11) { return alert('CPF Inválido') }
        else {
            if (seats.length < 1) { return alert('Nenhum assento selecionado') }
            setInputs({ ...inputs, validate: true })
        }
    }

    let superdata = { ...inputs, title: title, img: img, weekday: weekday, date: date, seats: seats, time: time }

    return (
        <DadosUsuario>

            <TituloInput>
                <h1> Nome Comprador: </h1>
            </TituloInput>

            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite seu nome..." required
                    onChange={e => setInputs({ ...inputs, nome: e.target.value })} />
            </Form>

            <TituloInput>
                <h1> CPF do comprador: </h1>
            </TituloInput>

            <Form>
                <input type="text" placeholder="Digite seu CPF..." required
                    onChange={e => setInputs({ ...inputs, cpf: e.target.value })} />
            </Form>

                <Button>
                {inputs.validate ?
                    <Link style={{ textDecoration: 'none' }} state={superdata} to={`/success/`}>
                        <button type="submit">CONFIRMAR ?</button>
                    </Link> :
                    <button type="submit">Reservar assento(s)</button>}
                </Button>         
            
        </DadosUsuario>
    )
}

const DadosUsuario = styled.div`
    width: 375px;
    max-width: 100%;
    margin-top: 50px;
`
const TituloInput = styled.div`
    width: 327px;
    height: 25px;
    margin-left: 24px;
    top: 472px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            display: flex;
            align-items: center;
            color: #293845;
        }
`
const Form = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        input{
            width: 327px;
            height: 51px;
            left: 24px;
            top: 497px;
            background: #FFFFFF;
            border: 2px solid #D5D5D5;
            box-sizing: border-box;
            border-radius: 3px;
            font-family: 'Roboto', sans-serif;
            font-style: italic;
            font-size: 18px;
            display: flex;
            align-items: center;
            color: #AFAFAF;                     
        }
    `

const Button = styled.div`
    width: 225px;
    height: 42px;
    left: 72px;
    top: 688px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

`