import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingGif from './Assets/loading.gif';
import '../src/stilopageone.css';
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
            < section className='Escolher-Filme'>
                <ContainerHeader />
                <div className='Titulo'> <h1> Selecione o filme </h1> </div>
                <div className='Container-Filmes'>
                    {movies.map((movie, index) =>
                        <div className='Catalogo' key={index}>
                            <img src={movie.posterURL} key={index} alt={'movie'} />
                        </div>
                    )}
                </div>
            </section>
        );

    } else {
        return <img src={LoadingGif} alt='loading' />
    }
}




