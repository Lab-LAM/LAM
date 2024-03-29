import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projetos from '../pages/projects';
import Team from '../pages/team';
import Contato from '../pages/contact';
import Missão from '../pages/mission';
import Publicações from '../pages/feed';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ferramentas' element={<Projetos />} />
        <Route path='/equipe' element={<Team />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/mission' element={<Missão />} />
        <Route path='/feed' element={<Publicações />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
