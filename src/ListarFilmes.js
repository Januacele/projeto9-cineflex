import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingGif from './Assets/loading.gif';
import '../src/stilopageone.css';
import ContainerHeader from './ContainerHeader';
import styled from 'styled-components';

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
            <>
                <ContainerHeader />
                <Content>
                    <PosterBack>
                        <PosterFilm>
                            {movies.map((movie, index) =>
                                <img index={index} src={movie.posterURL} alt={'movie'} />
                            )}
                        </PosterFilm>
                    </PosterBack>
                </Content>
            </>
        );

    } else {
        return <img src={LoadingGif} alt='loading' />
    }
}


const Content = styled.div`
    width: 375px;
    max-width: 100%;
    background-color: #FFFFFF;
`

const PosterBack = styled.div`
    position: absolute;
    width: 145px;
    height: 209px;
    left: 30px;
    top: 169px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px; 
`

const PosterFilm = styled.div`
    position: absolute;
    width: 129px;
    height: 193px;
    left: 38px;
    top: 177px;
    }`  
