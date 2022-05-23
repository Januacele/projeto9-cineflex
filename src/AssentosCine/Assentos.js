import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';

import ContainerHeader from '../ContainerHeader'
import Footer from '../Footer'
import RendenderizarAssentos from './RenderizarAssentos'
import DadosComprador from './DadosComprador'

// LOGIC
export default function EscolherAssentos() {
    
    const { sessionID } = useParams()

    let data = useLocation()
    const info = data.state

    const [movieData, setData] = useState({
        movie: [],
        seats: [],
        days: []
    })

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`)

            .then(({data}) => setData({movie: data.movie, seats: data.seats, days: data.day}))
            .catch(error => console.log(error))
    
        }, [sessionID]);

    const { title, posterURL: img } = movieData.movie
    const { weekday, date } = movieData.days

    const [list, setList] = useState([])

//UI
    return (

        <Assentos>
            <ContainerHeader />
            <Container>
                <Title>
                    <h1>Selecione o(s) assento(s)</h1>
                </Title>
                <Seats>
                    <RendenderizarAssentos seats={movieData.seats} setList={setList} list={list} />
                </Seats>
                <Descricao>
                    <Selecionado><AssentoSelecionado></AssentoSelecionado><h1>Selecionado</h1></Selecionado>
                    <Disponivel><AssentoDisponivel></AssentoDisponivel><h1>Disponível</h1></Disponivel>
                    <Indisponivel><AssentoIndisponivel></AssentoIndisponivel><h1>Indisponível</h1></Indisponivel>
                </Descricao>
                <DadosComprador movieinfo={movieData} seats={list} time={info} />
            </Container>
            <Footer img={img} title={title} weekday={weekday} date={date} />
        </Assentos>
    )
}

const Assentos = styled.div`
    width: 375px;
    max-width: 100%;
    height: 100vh;
`
const Container = styled.div`
    width: 375px;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    width: 375px;
    max-width: 100%;
    margin-top:30px;
    left: 0px;
    top: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #293845;
        }
`
const Seats = styled.div`
    width: 375px;
    max-width: 100%;
    height: 800px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer
`
const Descricao = styled.div`
    width: 375px;
    max-width: 100%;
    height: 10%;
    display: flex;
`
const Selecionado = styled.div`
    width: 375px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            align-items: center;
            color: #4E5A65;
`
const AssentoSelecionado = styled.div`
    width: 25px;
    height: 25px;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    box-sizing: border-box;
    border-radius: 17px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            letter-spacing: -0.013em;
            color: #4E5A65;
        }
`
const Disponivel = styled.div`
    width: 375px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            align-items: center;
            color: #4E5A65;
}
 `
const AssentoDisponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    box-sizing: border-box;
    border-radius: 17px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            letter-spacing: -0.013em;
            color: #4E5A65;
        }
`
const Indisponivel = styled.div`
    width: 375px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            align-items: center;
            color: #4E5A65;
        }
`
const AssentoIndisponivel = styled.div`
    width: 24px;
    height: 24px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    box-sizing: border-box;
    border-radius: 17px;

`