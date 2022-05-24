import { BrowserRouter, Routes, Route } from 'react-router-dom';


import TelaSessoes from './TelaSessoes';
import TelaInicial from './TelaInicial';
import TelaAssentos from './TelaAssentos';
import TelaSucesso from './TelaSucesso';

import './Assets/reset.css';
import './Assets/style.css';
import Header from './layouts/Header';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<TelaInicial />} />
                <Route path='/sessions/:movieID/' element={<TelaSessoes />} />
                <Route path='/seats/:sessionID' element={<TelaAssentos />} />
                <Route path='/success/' element={<TelaSucesso />} />
            </Routes>
        </BrowserRouter>
    )
}