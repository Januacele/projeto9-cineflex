import { useState, useEffect } from 'react';
import axios from 'axios';
import Filme from './Filme';
import styled from 'styled-components';

import LoadingGif from './Assets/loading.gif'
 
export default function TelaInicial() {
    const [filmes, setFilmes] = useState([]);
    

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL);

        promise.then((response) => {
            const { data } = response;
            setFilmes(data);
        });
        promise.catch(err => {
            const mensage = err.response.statusText;
            alert(mensage);
        
        });

    }, []);


        function montarFilmesEmExibicao(){
           if (filmes.length > 0) {
               return filmes.map(filme => {
                    const {id, posterURL, title} = filme;
                    return <Filme key ={id} id ={id} title={title} poster={posterURL} />;
                });
            } else {
                return <img src = {LoadingGif} alt ='Loading' />
            }
        }


        const filmesEmExibicao = montarFilmesEmExibicao();

        return (
                <Container >
                    <h1> Selecione o filme </h1>
                    <Filmes>
                        {filmesEmExibicao}
                    </Filmes>
                </Container>
        );
}

const Container = styled.div`
    margin: 70px 30px;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;

        h1{
            height: 110px;
            font-size: 24px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.04em;
            color: #293845;
        }
    `

const Filmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    `