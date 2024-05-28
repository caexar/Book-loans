import React from "react";
import ListaPrestamos from "./components/ListaPrestamos";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mensaje from './components/Mensaje';
import Prestamo from './components/Prestamo';
import QuienesSomos from './components/QuienesSomos';
import Principal from './components/Principal';
import Problema from './components/Problema';
import Users from './components/Users';

function App() {
  return (
    <>
      <Router>
        <div className='container' bg-light>
          <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">React</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/inicio">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/QuienesSomos">QuienesSomos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Mensaje">Mensaje</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/ListaPrestamos">Prestamo</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path='Mensaje' element={<Mensaje nombre="leonardo" id="090" nombre2="cesar" id2="020"  />}/>
            <Route path='prestamo' element={<Prestamo/>}/>
            <Route path='quienesSomos' element={<QuienesSomos/>}/>
            <Route path='inicio' element={<Principal/>}/>
            <Route path='*' element={<Problema/>}/>   
            <Route path='quienesSomos/:id' element={<Users/>}/> 
            <Route path='ListaPrestamos' element={<ListaPrestamos/>}/>      
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
