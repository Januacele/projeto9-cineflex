import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ListarFilmes from './ListarFilmes';
import HorariosFilmes from './HorariosFilmes';
import Assentos from './AssentosCine/Assentos';
import Sucesso from './Sucesso';


export default function TrocarRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListarFilmes />} />
                <Route path='/sessions/:movieID/' element={<HorariosFilmes />} />
                <Route path='/seats/:sessionID' element={<Assentos />} />
                <Route path='/success/' element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}