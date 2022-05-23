import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import LoadingGif from './Assets/loading.gif';
import ContainerHeader from './ContainerHeader';


export default function ListarFilmes() {
    const [movies, setMovies] = useState(false);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setMovies(resposta.data);
        });
    }, []);

    if (movies) {
        return (
            <EscolherFilme>
                <ContainerHeader />
                <Titulo> <h1> Selecione o filme </h1> </Titulo>
                <ContainerFilmes>
                    {movies.map((movie, index) =>
                        <Catalogo key={index}>
                            <Link to={`/sessions/${movie.id}`}>
                                <img src={movie.posterURL} key={index} alt={'movie'} />
                            </Link>                       
                        </Catalogo>
                    )}
            </ContainerFilmes>
            </EscolherFilme >
        );

    } else {
        return <img src={LoadingGif} alt='loading' />
    }
}


const EscolherFilme = styled.div`
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
                display: flex;
                align-items: center;
                text-align: center;
                letter-spacing: 0.04em;
                color: #293845;
            }
    `

const ContainerFilmes = styled.div`
    width: 375px;
    max-width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    `

const Catalogo = styled.div`
    width: 145px;
    height: 209px;
    left: 30px;
    top: 169px;
    margin-bottom: 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

        img{
            width: 129px;
            height: 193px;
            left: 38px;
            top: 177px;

            :hover {
                cursor: pointer;
        }
`

