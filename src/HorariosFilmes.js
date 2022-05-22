import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components';

import ContainerHeader from './ContainerHeader';
import Footer from './Footer';


export default function HorariosFilmes() {

    //LOGIC 
    const { movieID } = useParams();

    const [movie, setMovie] = useState([]);
    const [times, setTimes] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/{movieID}/showtimes")

            .then(({ data }) => {
                setTimes(data.days)
                setMovie(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [movieID])

    //Função auxiliar para renderizar os horários do filme, buscando na API 

    function renderShowtimes(time) {
        return (
            time.map(({ name, id }, index) =>
                <Time key={index}>
                    <TimeBox>
                        
                            <h1>{name}</h1>
                        
                    </TimeBox>
                </Time>
            )
        )
    }

    //Função auxiliar para renderizar os dias da semana e as datas, buscando na API 

    function renderWeekDays(times) {
        return (
            times.map((time, index) =>
                <Day key={index}>
                    <Date>
                        <h1>{time.weekday} - {time.date}</h1>
                    </Date>
                    {renderShowtimes(time.showtimes)}
                </Day>
            )
        )
    }

    //UI
    return (
        <ContainerHorarios>
            <ContainerHeader />
            <Titulo><h1>Selecione o horário</h1></Titulo>
            <ContainerConteudo>
                {renderWeekDays(times)}
            </ContainerConteudo>
            <Footer img={movie.posterURL} title={movie.title} />
        </ContainerHorarios>
    )
}

    //Styled-components

const ContainerHorarios = styled.div`
        width: 375px;
        max-width: 100%;
        height: 100vh;
        `
const Titulo = styled.div`
        width: 374px;
        height: 110px;
        left: 0px;
        top: 67px;
        display: flex;
        justify-content: center;
        align-items: center;

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
const ContainerConteudo = styled.div`
    width: 375px;
    max-width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    `

const Day = styled.div`
    width: 241px;
    height: 35px;
    left: 24px;
    top: 170px;
    `
const Date = styled.div`
            h1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;
                display: flex;
                align-items: center;
                letter-spacing: 0.02em;
                color: #293845;
            }
    `
const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `
const TimeBox = styled.div`
    width: 83px;
    height: 43px;
    left: 23px;
    top: 227px;
    background: #E8833A;
    border-radius: 3px;

            h1{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.02em;
                color: #FFFFFF;
            }
    `