import { useState } from 'react';
// import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../Assets/style.css'

export default function DadosComprador({ movieinfo, seats, time }) {

    const [inputs, setInputs] = useState({ name: '', cpf: ''})
    const { title, posterURL: img } = movieinfo.movie
    const { weekday, date } = movieinfo.days

    let superdata = { ...inputs, title: title, img: img, weekday: weekday, date: date, seats: seats, time: time }



    return (
        <DadosUsuario>

            <TituloInput>
                <h1> Nome Comprador: </h1>
            </TituloInput>

            <Form >
                <input type="text" placeholder="Digite seu nome..." required
                    onChange={e => setInputs({ ...inputs, nome: e.target.value })} />
            </Form>

            <TituloInput>
                <h1> CPF do comprador: </h1>
            </TituloInput>

            <Form>
                <input type="text" placeholder="Digite seu CPF..." required
                    onChange={e => setInputs({ ...inputs, cpf: e.target.value })} />

                <BotaoConfirmar>
                    {inputs.validate ? 
                        <Link style={{ textDecoration: 'none' }} state={superdata} to={`/success/`}>
                            <h1> CONFIRMAR ? </h1>
                        </Link> :
                        <Link style={{ textDecoration: 'none' }} state={superdata} to={`/success/`}>
                            <h1> Reservar assento(s) </h1>
                        </Link>
                    }
                </BotaoConfirmar>

            </Form>

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

const BotaoConfirmar = styled.div`
    width: 225px;
    height: 42px;
    left: 72px;
    top: 688px;
    background: #E8833A;
    border-radius: 3px;
    margin-top: 20px;
    margin-left: 60px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
   

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
            cursor: pointer
        }
`