import { useParams, Link } from 'react-router-dom'
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
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`)

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
                    <Link style={{ textDecoration: 'none' }} state={name} to={`/seats/${id}`}>
                            <h1>{name}</h1>
                    </Link>   
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
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 28px;
                color: #293845;
            }
    `
const ContainerConteudo = styled.div`
    width: 375px;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    
    `

const Day = styled.div`
    width: 375px;
    `
const Date = styled.div`
    width: 241px;
    height: 35px;
    left: 24px;
    top: 170px;

            h1{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;  
                color: #293845;
            }
    `
const Time = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    `
const TimeBox = styled.div`
    width: 82px;
    height: 43px;
    left: 24px;
    top: 227px;
    border-radius: 3px;
    background-color: #E8833A;

            h1{
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #FFFFFF;

                :hover {
                    cursor: pointer;
            }
    `